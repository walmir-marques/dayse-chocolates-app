import Logo from "../img/12.png"; // Caminho relativo à pasta public

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between h-full">
        <div>
          <img className="w-[150px] absolute" src={Logo} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
