//import Navbar from "@/components/Navbar";
import styles from "@/styles/Header.module.css";

const Header = () => {
  const headStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
    color: "#aeadad",
    textAlign: "center",
  };
  return (
    <header style={headStyle} className={styles.Header}>
      <h1>todos</h1>
      <p>Items will persist in the browser local storage.</p>
    </header>
  );
};

export default Header;
