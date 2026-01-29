import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom"; // ✅ Added useNavigate

// ✅ SAME formatPrice FUNCTION from PropertyDetail.jsx
function formatPrice(price, type) {
  if (!price) return "Price not available";
  if (!type) return `₹${price.toLocaleString()}`;

  const lowerType = type.toLowerCase();
  if (lowerType === "crore") {
    return `₹${(price / 1e7).toLocaleString()} Cr`;
  }
  if (lowerType === "lakh") {
    return `₹${(price / 1e5).toLocaleString()} Lac`;
  }
  return `₹${price.toLocaleString()}`;
}

function Properties() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); // ✅ Navigation hook
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ FIX 1: Memoize filters to prevent re-creation
  const filters = useMemo(() => ({
    property_type: searchParams.get('property_type'),
    transaction: searchParams.get('transaction'),
    location: searchParams.get('location'),
    budget: searchParams.get('budget')
  }), [searchParams]);

  // ✅ FIX 2: Create stable filter key
  const filterKey = useMemo(() => 
    `${filters.property_type || ''}-${filters.transaction || ''}-${filters.location || ''}-${filters.budget || ''}`,
    [filters]
  );

  // ✅ FIX 3: Specific dependency only
  useEffect(() => {
    fetchProperties();
  }, [filterKey]);

  // ✅ REMOVE FILTER FUNCTIONS
  const removePropertyType = () => {
    searchParams.delete('property_type');
    navigate(`?${searchParams.toString()}`);
  };

  const removeTransaction = () => {
    searchParams.delete('transaction');
    navigate(`?${searchParams.toString()}`);
  };

  const removeLocation = () => {
    searchParams.delete('location');
    navigate(`?${searchParams.toString()}`);
  };

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams(filters);
      const response = await fetch(`http://localhost:3000/api/properties?${params}`);
      const data = await response.json();
      setProperties(data.properties || data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={styles.loading}>Loading properties...</div>;

  return (
    <div style={styles.page}>
      {/* Active Filters - ✅ NOW WORKING */}
      <div style={styles.filtersBar}>
        <div style={styles.resultsCount}>
          {properties.length} Properties Found
        </div>
        {filters.property_type && (
          <span style={styles.activeFilter}>
            {filters.property_type} 
            <button style={styles.removeFilter} onClick={removePropertyType}>×</button>
          </span>
        )}
        {filters.transaction && (
          <span style={styles.activeFilter}>
            {filters.transaction} 
            <button style={styles.removeFilter} onClick={removeTransaction}>×</button>
          </span>
        )}
        {filters.location && (
          <span style={styles.activeFilter}>
            {filters.location} 
            <button style={styles.removeFilter} onClick={removeLocation}>×</button>
          </span>
        )}
      </div>

      {/* Properties Grid */}
      <div style={styles.grid}>
        {properties.length === 0 ? (
          <div style={styles.noResults}>
            No properties found matching your filters. Try adjusting your search.
          </div>
        ) : (
          properties.map((property) => (
            <div key={property.id} style={styles.card}>
              <img 
                src={`http://localhost:3000/images/${property.images?.split(',')[0] || 'placeholder.jpg'}`} 
                alt={property.name}
                style={styles.cardImage}
                onError={(e) => e.target.src = 'http://localhost:3000/images/placeholder.jpg'}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{property.name}</h3>
                <p style={styles.cardLocation}>
                  {property.location} • {property.locality}
                </p>
                <div style={styles.cardPrice}>
                  {formatPrice(property.price, property.price_type)}
                </div>
                <p style={styles.cardType}>
                  {property.property_type} • {property.transaction_type || 'Rent/Buy'}
                </p>
              </div>
              <Link to={`/properties/${property.id}`} style={styles.viewBtn}>
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  page: { 
    padding: '120px 20px 40px', 
    background: '#f5f5f5', 
    minHeight: '100vh',
    margin: 0
  },
  filtersBar: { 
    display: 'flex', 
    gap: '10px', 
    alignItems: 'center', 
    marginBottom: '30px', 
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto 30px'
  },
  resultsCount: { fontSize: '18px', fontWeight: '600', color: '#333' },
  activeFilter: { 
    background: '#d32f2f', 
    color: 'white', 
    padding: '5px 12px', 
    borderRadius: '20px', 
    fontSize: '14px',
    cursor: 'pointer' // ✅ Clickable
  },
  removeFilter: { 
    background: 'none', 
    border: 'none', 
    color: 'white', 
    fontSize: '18px', 
    cursor: 'pointer', 
    marginLeft: '5px',
    padding: 0 // ✅ No padding interference
  },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
    gap: '25px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  noResults: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '60px 20px',
    color: '#666',
    fontSize: '16px'
  },
  card: { 
    background: 'white', 
    borderRadius: '12px', 
    overflow: 'hidden', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s'
  },
  cardImage: { 
    width: '100%', 
    height: '200px', 
    objectFit: 'cover' 
  },
  cardContent: { padding: '20px' },
  cardTitle: { fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0' },
  cardLocation: { color: '#666', margin: '0 0 12px 0', fontSize: '14px' },
  cardPrice: { fontSize: '22px', fontWeight: '700', color: '#d32f2f', margin: '0 0 8px 0' },
  cardType: { color: '#888', fontSize: '14px', margin: 0 },
  viewBtn: { 
    display: 'block', 
    background: '#d32f2f', 
    color: 'white', 
    textAlign: 'center', 
    padding: '12px', 
    textDecoration: 'none', 
    borderRadius: '8px', 
    fontWeight: '500',
    marginTop: '10px'
  },
  loading: {
    textAlign: 'center',
    padding: '100px 20px',
    fontSize: '18px',
    color: '#666'
  }
};

export default Properties;
