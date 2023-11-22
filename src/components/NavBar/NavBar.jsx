import CarWidget from "../CarWidget/CarWidget";
import style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav>
      <h2 className={style.h2}>wilgray</h2>

      <div>
        <ul>
          <li>Remeras</li>
          <li>Pantalones</li>
          <li>Zapatillas</li>
        </ul>
      </div>
      <div className={style.CarWidget}>
        <CarWidget />
      </div>
    </nav>
  );
};

export default NavBar;
