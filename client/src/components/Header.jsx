
const Header = () => {
  return (
    <header className="header h-16 px-4 flex justify-between items-center text-white ">
      <a href="/" className="logo">
        officeLounge
        </a>
      <div className="nav text-base" style={{ fontSize: "1.2rem", fontWeight: "bolder" }}>
       
        <a href="user" className="nav-item">
          Profile
        </a>
      </div>
    </header>
  );
};

export default Header;
