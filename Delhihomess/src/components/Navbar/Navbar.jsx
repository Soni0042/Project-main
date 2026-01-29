// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

// const styles = {
//   navbar: {
//      backgroundColor: 'rgba(0, 64, 128, 0.9)', // semi-transparent blue
//     backgroundColor: 'transparent',
//     padding: '0.8rem 2rem',
//     color: 'white',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     position: 'fixed',  // fixed for scroll effect
//     top: 0,
//     width: '100%',
//     zIndex: 10,
//     boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
//     transition: 'top 0.3s ease',
//   },
//   navbarContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     maxWidth: '1200px',
//     margin: '0 auto',
//   },
//   logo: {
//     fontSize: '1.8rem',
//     fontWeight: 'bold',
//     color: 'white',
//     textDecoration: 'none',
//     letterSpacing: '1.2px',
//   },
//   navMenu: {
//     listStyleType: 'none',
//     display: 'flex',
//     margin: 0,
//     padding: 0,
//     gap: '1rem',
//   },
//   navLink: {
//     color: 'white',
//     padding: '0.7rem 1.2rem',
//     textDecoration: 'none',
//     cursor: 'pointer',
//     fontWeight: 600,
//     transition: 'background-color 0.3s ease',
//     borderRadius: '6px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.3rem',
//     userSelect: 'none',
//   },
//   navLinkActive: {
//     backgroundColor: '#003366',
//   },
//   dropdown: {
//     position: 'relative',
//   },
//   dropdownToggle: {
//     color: 'white',
//     padding: '0.7rem 1.2rem',
//     cursor: 'pointer',
//     fontWeight: 600,
//     userSelect: 'none',
//     borderRadius: '6px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//     transition: 'background-color 0.3s ease',
//   },
//   dropdownArrow: (isOpen) => ({
//     display: 'inline-block',
//     transition: 'transform 0.3s ease',
//     transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
//     fontSize: '0.75rem',
//   }),
//   dropdownMenu: {
//     backgroundColor: 'rgba(0, 64, 128, 0.9)',
//     position: 'absolute',
//     top: '100%',
//     left: 0,
//     minWidth: '180px',
//     borderRadius: '0 0 8px 8px',
//     boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
//     overflow: 'hidden',
//     zIndex: 20,
//   },
//   dropdownItem: {
//     display: 'block',
//     padding: '0.6rem 1.2rem',
//     color: 'white',
//     textDecoration: 'none',
//     fontWeight: 500,
//     transition: 'background-color 0.3s ease',
//   },
// };

// const Navbar = () => {
//   const [isPropertiesOpen, setPropertiesOpen] = useState(false);
//   const [isServicesOpen, setServicesOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const togglePropertiesMenu = () => {
//     setPropertiesOpen(!isPropertiesOpen);
//   };

//   const toggleServicesMenu = () => {
//     setServicesOpen(!isServicesOpen);
//   };

//   const closePropertiesMenu = () => setPropertiesOpen(false);
//   const closeServicesMenu = () => setServicesOpen(false);

//   const controlNavbar = () => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY > lastScrollY && currentScrollY > 50) {
//       // Scrolling down and scrolled enough
//       setShowNavbar(false);
//     } else {
//       // Scrolling up
//       setShowNavbar(true);
//     }
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', controlNavbar);
//     return () => {
//       window.removeEventListener('scroll', controlNavbar);
//     };
//   }, [lastScrollY]);

//   const activeStyle = {
//     backgroundColor: '#003366',
//   };

//   return (
//     <nav
//       style={{
//         ...styles.navbar,
//         top: showNavbar ? '0' : '-80px', // hide upward
//       }}
//     >
//       <div style={styles.navbarContainer}>
//         <NavLink to="/" style={styles.logo} end>
//           DelhiHomes
//         </NavLink>

//         <ul style={styles.navMenu}>
//           <li>
//             <NavLink
//               to="/"
//               end
//               style={({ isActive }) =>
//                 isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
//               }
//             >
//               Home
//             </NavLink>
//           </li>

//           <li
//             style={styles.dropdown}
//             onMouseEnter={() => setPropertiesOpen(true)}
//             onMouseLeave={closePropertiesMenu}
//           >
//             <span
//               style={{
//                 ...styles.dropdownToggle,
//                 ...(isPropertiesOpen ? activeStyle : {}),
//               }}
//               onClick={togglePropertiesMenu}
//             >
//               Properties
//               <span style={styles.dropdownArrow(isPropertiesOpen)}>▼</span>
//             </span>
//             {isPropertiesOpen && (
//               <ul style={styles.dropdownMenu}>
//                 {['1bhk', '2bhk', '3bhk', '4bhk'].map((type) => (
//                   <li key={type}>
//                     <NavLink
//                       to={`/properties/${type}`}
//                       style={({ isActive }) =>
//                         isActive ? { ...styles.dropdownItem, ...activeStyle } : styles.dropdownItem
//                       }
//                     >
//                       {type.toUpperCase()}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <li>
//             <NavLink
//               to="/rent"
//               style={({ isActive }) =>
//                 isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
//               }
//             >
//               Rent
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/buy"
//               style={({ isActive }) =>
//                 isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
//               }
//             >
//               Buy
//             </NavLink>
//           </li>

//           <li
//             style={styles.dropdown}
//             onMouseEnter={() => setServicesOpen(true)}
//             onMouseLeave={closeServicesMenu}
//           >
//             <span
//               style={{
//                 ...styles.dropdownToggle,
//                 ...(isServicesOpen ? activeStyle : {}),
//               }}
//               onClick={toggleServicesMenu}
//             >
//               Services
//               <span style={styles.dropdownArrow(isServicesOpen)}>▼</span>
//             </span>
//             {isServicesOpen && (
//               <ul style={styles.dropdownMenu}>
//                 {[
//                   'Property Valuation',
//                   'Legal Title Check',
//                   'Rates & Trends',
//                   'EMI Calculator',
//                 ].map((service) => (
//                   <li key={service}>
//                     <NavLink
//                       to={`/services/${service.toLowerCase().replace(/[ &]/g, '-')}`}
//                       style={({ isActive }) =>
//                         isActive ? { ...styles.dropdownItem, ...activeStyle } : styles.dropdownItem
//                       }
//                     >
//                       {service}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <li>
//             <NavLink
//               to="/gallery"
//               style={({ isActive }) =>
//                 isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
//               }
//             >
//               Gallery
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/about-us"
//               style={({ isActive }) =>
//                 isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
//               }
//             >
//               About Us
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/blogs"
//               style={({ isActive }) =>
//                 isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
//               }
//             >
//               Blogs
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/contact-us"
//               style={({ isActive }) =>
//                 isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
//               }
//             >
//               Contact Us
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  navbar: {
    padding: '0.8rem 2rem',
    color: 'white',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    position: 'fixed',  // fixed for scroll effect
    top: 0,
    width: '100%',
    zIndex: 10,
    transition: 'top 0.3s ease, background-color 0.3s ease',
  },
  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
    letterSpacing: '1.2px',
  },
  navMenu: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
    gap: '1rem',
  },
  navLink: {
    color: 'white',
    padding: '0.7rem 1.2rem',
    textDecoration: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'background-color 0.3s ease',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    userSelect: 'none',
  },
  navLinkActive: {
    backgroundColor: '#003366',
  },
  dropdown: {
    position: 'relative',
  },
  dropdownToggle: {
    color: 'white',
    padding: '0.7rem 1.2rem',
    cursor: 'pointer',
    fontWeight: 600,
    userSelect: 'none',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'background-color 0.3s ease',
  },
  dropdownArrow: (isOpen) => ({
    display: 'inline-block',
    transition: 'transform 0.3s ease',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    fontSize: '0.75rem',
  }),
  dropdownMenu: {
    backgroundColor: 'rgba(0, 64, 128, 0.9)',
    position: 'absolute',
    top: '100%',
    left: 0,
    minWidth: '180px',
    borderRadius: '0 0 8px 8px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    overflow: 'hidden',
    zIndex: 20,
  },
  dropdownItem: {
    display: 'block',
    padding: '0.6rem 1.2rem',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'background-color 0.3s ease',
  },
};

const Navbar = () => {
  const [isPropertiesOpen, setPropertiesOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgColor, setBgColor] = useState('transparent');

  const togglePropertiesMenu = () => {
    setPropertiesOpen(!isPropertiesOpen);
  };

  const toggleServicesMenu = () => {
    setServicesOpen(!isServicesOpen);
  };

  const closePropertiesMenu = () => setPropertiesOpen(false);
  const closeServicesMenu = () => setServicesOpen(false);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }

    // Change background to blue after scrolling away from top
    if (currentScrollY > 0) {
      setBgColor('#003366');  // blue color
    } else {
      setBgColor('transparent');
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const activeStyle = {
    backgroundColor: '#003366',
  };

  return (
    <nav
      style={{
        ...styles.navbar,
        top: showNavbar ? '0' : '-80px',
        backgroundColor: bgColor,
      }}
    >
      <div style={styles.navbarContainer}>
        <NavLink to="/" style={styles.logo} end>
          DelhiHomes
        </NavLink>

        <ul style={styles.navMenu}>
          <li>
            <NavLink
              to="/"
              end
              style={({ isActive }) =>
                isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>

          <li
            style={styles.dropdown}
            onMouseEnter={() => setPropertiesOpen(true)}
            onMouseLeave={closePropertiesMenu}
          >
            <span
              style={{
                ...styles.dropdownToggle,
                ...(isPropertiesOpen ? activeStyle : {}),
              }}
              onClick={togglePropertiesMenu}
            >
              Properties
              <span style={styles.dropdownArrow(isPropertiesOpen)}>▼</span>
            </span>
            {isPropertiesOpen && (
              <ul style={styles.dropdownMenu}>
                {['1bhk', '2bhk', '3bhk', '4bhk'].map((type) => (
                  <li key={type}>
                    <NavLink
                      to={`/properties/${type}`}
                      style={({ isActive }) =>
                        isActive ? { ...styles.dropdownItem, ...activeStyle } : styles.dropdownItem
                      }
                    >
                      {type.toUpperCase()}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/rent"
              style={({ isActive }) =>
                isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
              }
            >
              Rent
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/buy"
              style={({ isActive }) =>
                isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
              }
            >
              Buy
            </NavLink>
          </li>

          <li
            style={styles.dropdown}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={closeServicesMenu}
          >
            <span
              style={{
                ...styles.dropdownToggle,
                ...(isServicesOpen ? activeStyle : {}),
              }}
              onClick={toggleServicesMenu}
            >
              Services
              <span style={styles.dropdownArrow(isServicesOpen)}>▼</span>
            </span>
            {isServicesOpen && (
              <ul style={styles.dropdownMenu}>
                {[
                  'Property Valuation',
                  'Legal Title Check',
                  'Rates & Trends',
                  'EMI Calculator',
                ].map((service) => (
                  <li key={service}>
                    <NavLink
                      to={`/services/${service.toLowerCase().replace(/[ &]/g, '-')}`}
                      style={({ isActive }) =>
                        isActive ? { ...styles.dropdownItem, ...activeStyle } : styles.dropdownItem
                      }
                    >
                      {service}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/gallery"
              style={({ isActive }) =>
                isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
              }
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about-us"
              style={({ isActive }) =>
                isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
              }
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              style={({ isActive }) =>
                isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
              }
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact-us"
              style={({ isActive }) =>
                isActive ? { ...styles.navLink, ...activeStyle } : styles.navLink
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

