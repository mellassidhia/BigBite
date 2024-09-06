import "./Header.css";
const Header = () => {
  const scrollToMenu = () => {
    document
      .getElementById("explore-menu")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Feast on Your Favorites!</h2>
        <p>
          Indulge in your favorite dishes with our diverse menu, crafted from
          the finest ingredients and expert culinary techniques. We are
          dedicated to satisfying your cravings and enhancing your dining
          experience, one delectable meal at a time.
        </p>
        <button onClick={scrollToMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
