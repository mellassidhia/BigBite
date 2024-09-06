import { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { assets, food_list } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin, setCategory, scrollPosition }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  useEffect(() => {
    if (scrollPosition === 0) {
      // Apply a timeout to allow the state update to be visible
      setTimeout(() => {
        setMenu("home");
      }, 200);
    }
  }, [scrollPosition]);

  const filteredFoodList = food_list.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchResultClick = (id) => {
    setCategory("All");
    setSearchTerm("");
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleBasketClick = () => {
    navigate("/cart");
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      // No delay if on home page
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Apply delay for cart and order pages
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  const handleContactUsClick = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const naviage = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    naviage("/");
  };

  return (
    <div className="navbar">
      <Link to="/" onClick={() => handleNavClick("home")}>
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("food-display");
          }}
        >
          menu
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("app-download");
          }}
        >
          mobile-app
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleContactUsClick();
          }}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={assets.search_icon} alt="Search" />
          {searchTerm && (
            <div className="search-results">
              {filteredFoodList.map((item) => (
                <a
                  key={item._id}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSearchResultClick(item._id);
                  }}
                  className="search-item"
                >
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="navbar-search-icon">
          <img
            src={assets.basket_icon}
            alt="Cart"
            onClick={handleBasketClick}
          />
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
