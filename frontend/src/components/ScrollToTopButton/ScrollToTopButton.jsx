import "./ScrollTopButton.css";

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-to-top" onClick={handleClick}>
      ↑
    </button>
  );
};

export default ScrollToTopButton;
