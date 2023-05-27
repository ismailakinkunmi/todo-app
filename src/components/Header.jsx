import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <h1>todos</h1>
      <p>Items will persist in the browser local storage.</p>
    </header>
  );
};

export default Header;
