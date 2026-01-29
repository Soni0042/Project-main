import React, { useMemo, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function Emic() {
  const [amount, setAmount] = useState(30000);
  const [interest, setInterest] = useState(10); // annual %
  const [tenureMonths, setTenureMonths] = useState(240);
  const [processingFeePercent, setProcessingFeePercent] = useState(1.2);
  const [downPayment, setDownPayment] = useState(3000);
  const [tenureMode, setTenureMode] = useState("months"); // or "years"
  const [showAmort, setShowAmort] = useState(true);

  const fmt = (v) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(v);

  const months = tenureMode === "years" ? Math.round(tenureMonths * 12) : Math.round(tenureMonths);

  const results = useMemo(() => {
    const principalLoanAmount = Math.max(0, Number(amount) - Number(downPayment));
    const monthlyRate = Number(interest) / 100 / 12;

    let emi = 0;
    if (monthlyRate === 0) {
      emi = principalLoanAmount / (months || 1);
    } else {
      const factor = Math.pow(1 + monthlyRate, months || 1);
      emi = (principalLoanAmount * monthlyRate * factor) / (factor - 1);
    }

    const totalEmiPayment = emi * months;
    const totalInterest = Math.max(0, totalEmiPayment - principalLoanAmount);
    const processingFeeAmount = (Number(amount) * Number(processingFeePercent)) / 100;
    const totalDownPayment = Number(downPayment) + processingFeeAmount;
    const totalPayment = Number(downPayment) + processingFeeAmount + totalEmiPayment;

    const amortization = [];
    if (principalLoanAmount > 0 && months > 0) {
      let balance = principalLoanAmount;
      for (let i = 1; i <= months; i++) {
        const interestPortion = balance * monthlyRate;
        const principalPortion = emi - interestPortion;
        balance = Math.max(0, balance - principalPortion);
        amortization.push({ month: i, emi, interestPortion, principalPortion, balance });
        if (amortization.length >= 240) break;
      }
    }

    return {
      principalLoanAmount,
      emi,
      totalInterest,
      processingFeeAmount,
      totalDownPayment,
      totalPayment,
      totalEmiPayment,
      amortization,
    };
  }, [amount, interest, months, processingFeePercent, downPayment]);

  const numOnChange = (setter) => (e) => {
    const val = e.target.value;
    if (val === "") return setter("");
    const parsed = Number(val.replace(/,/g, ""));
    if (!Number.isFinite(parsed) || parsed < 0) return;
    setter(parsed);
  };

  // Data for Pie Chart (Principal vs Interest)
  const pieData = [
    { name: "Principal", value: results.principalLoanAmount },
    { name: "Interest", value: results.totalInterest },
  ];
  const COLORS = ["#1f77b4", "#ff7f0e"];

  // Data for Bar Chart (Amortization monthly principal & interest)
  // Show first 60 months max for readability
  const barData = results.amortization.slice(0, 60).map(({ month, principalPortion, interestPortion }) => ({
    name: `M${month}`,
    Principal: principalPortion,
    Interest: interestPortion,
  }));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-6 md:p-8">
        {/* Header */}
        <header className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">EMI Calculator</h1>
            <p className="text-sm text-slate-500 mt-1">Calculate EMI, interest, processing fee &amp; payment breakdown with visuals.</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">Estimated EMI</div>
            <div className="text-lg font-medium text-slate-700">{fmt(results.emi)} / month</div>
            <div className="text-xs text-slate-400">(approx.)</div>
          </div>
        </header>

        {/* Main grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inputs */}
          <section className="space-y-4">
            <Input label="Loan Amount" value={amount} onChange={numOnChange(setAmount)} placeholder="Enter loan amount" />
            <Input label="Annual Interest Rate (%)" value={interest} onChange={numOnChange(setInterest)} placeholder="Enter annual rate" step="0.01" />
            <div className="grid grid-cols-2 gap-3">
              <Input label={`Tenure (${tenureMode === "years" ? "years" : "months"})`} value={tenureMonths} onChange={numOnChange(setTenureMonths)} placeholder="Enter tenure" />
              <label className="block">
                <div className="text-sm text-slate-600 mb-2">Tenure Mode</div>
                <select
                  aria-label="tenure mode"
                  value={tenureMode}
                  onChange={(e) => setTenureMode(e.target.value)}
                  className="w-full border rounded-lg p-3 text-slate-800"
                >
                  <option value="months">Months</option>
                  <option value="years">Years</option>
                </select>
              </label>
            </div>
            <Input label="Processing Fees (% of loan amount)" value={processingFeePercent} onChange={numOnChange(setProcessingFeePercent)} placeholder="Enter processing fee %" step="0.01" />
            <Input label="Down Payment" value={downPayment} onChange={numOnChange(setDownPayment)} placeholder="Enter down payment amount" />

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => setShowAmort((s) => !s)}
                type="button"
                className="px-4 py-2 rounded-lg border text-sm bg-slate-100 hover:bg-slate-200"
              >
                {showAmort ? "Hide" : "Show"} amortization
              </button>
              <button
                onClick={() => {
                  setAmount(30000);
                  setInterest(10);
                  setTenureMonths(240);
                  setProcessingFeePercent(1.2);
                  setDownPayment(3000);
                  setTenureMode("months");
                  setShowAmort(false);
                }}
                type="button"
                className="px-4 py-2 rounded-lg border text-sm text-slate-600 hover:bg-slate-50"
              >
                Reset
              </button>
            </div>
          </section>

          {/* Summary & Pie Chart */}
          <aside className="bg-slate-50 rounded-xl p-4 flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-medium text-slate-700 mb-3">Summary</h3>
              <SummaryRow label="Principal Loan Amount" value={fmt(results.principalLoanAmount)} />
              <SummaryRow label="Processing Fee" value={fmt(results.processingFeeAmount)} />
              <SummaryRow label="Total Down Payment" value={fmt(results.totalDownPayment)} />
              <SummaryRow label="EMI (monthly)" value={fmt(results.emi)} isBold />
              <SummaryRow label="Tenure (months)" value={months} />
              <SummaryRow label="Total EMI paid" value={fmt(results.totalEmiPayment)} />
              <SummaryRow label="Total Interest" value={fmt(results.totalInterest)} isBold isNegative />
              <div className="col-span-2 mt-3 border-t pt-3">
                <div className="text-sm text-slate-500">Grand Total (Down payment + Processing + EMIs)</div>
                <div className="text-xl font-semibold text-slate-800">{fmt(results.totalPayment)}</div>
              </div>
              <div className="mt-4 text-xs text-slate-400">
                Note: Calculations are approximate and assume fixed interest compounded monthly.
              </div>
            </div>

            <div style={{ width: "100%", height: 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={(entry) => `${entry.name}: ${fmt(entry.value)}`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </aside>
        </main>

        {/* Amortization Table & Bar Chart */}
        {showAmort && results.amortization.length > 0 && (
          <section className="mt-6">
            <h4 className="text-sm font-medium text-slate-700 mb-3">Amortization Schedule (first {Math.min(60, results.amortization.length)} months)</h4>
            <div className="overflow-x-auto rounded-lg border mb-6">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="p-2 text-left">#</th>
                    <th className="p-2 text-right">EMI</th>
                    <th className="p-2 text-right">Interest</th>
                    <th className="p-2 text-right">Principal</th>
                    <th className="p-2 text-right">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {results.amortization.slice(0, 60).map((row) => (
                    <tr key={row.month} className="odd:bg-white even:bg-slate-50">
                      <td className="p-2">{row.month}</td>
                      <td className="p-2 text-right">{fmt(row.emi)}</td>
                      <td className="p-2 text-right">{fmt(row.interestPortion)}</td>
                      <td className="p-2 text-right">{fmt(row.principalPortion)}</td>
                      <td className="p-2 text-right">{fmt(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => fmt(value)} />
                  <Legend />
                  <Bar dataKey="Principal" fill={COLORS[0]} />
                  <Bar dataKey="Interest" fill={COLORS[1]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        )}

        <footer className="mt-6 text-xs text-slate-400 text-center">
          
        </footer>
      </div>
    </div>
  );
}

// Input component
const Input = ({ label, value, onChange, placeholder = "", step, type = "number" }) => (
  <label className="block">
    <div className="text-sm text-slate-600 mb-2">{label}</div>
    <input
      aria-label={label}
      value={value}
      onChange={onChange}
      type={type}
      step={step}
      min="0"
      placeholder={placeholder}
      className="w-full border rounded-lg p-3 text-slate-800 placeholder-slate-400"
    />
  </label>
);

// Summary row
const SummaryRow = ({ label, value, isBold = false, isNegative = false }) => (
  <>
    <div>{label}</div>
    <div
      className={`text-right ${isBold ? "font-medium text-slate-800" : "text-slate-600"} ${
        isNegative ? "text-rose-600" : ""
      }`}
    >
      {value}
    </div>
  </>
);

// Chart Colors
const COLORS = ["#1f77b4", "#ff7f0e"];

// Chart Data must be defined after results (as function scope)
const getPieData = (principal, interest) => [
  { name: "Principal", value: principal },
  { name: "Interest", value: interest },
];

const getBarData = (amortization) =>
  amortization.slice(0, 60).map(({ month, principalPortion, interestPortion }) => ({
    name: `M${month}`,
    Principal: principalPortion,
    Interest: interestPortion,
  }));
