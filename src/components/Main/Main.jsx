import { Container } from "../../ui/Container/Container";
import HomeLeft from "../../assets/images/HomeLeft.png";
import HomeRight from "../../assets/images/HomeRight.png";
import { Arrow } from "../../assets/icons/Arrow";
import { Button } from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <section className={styles.main}>
      <Container>
        <ul className={styles.main__wrapper}>
          <li className={styles.main__item}>
            <Link to="/catalog">
              <div className={styles.main__itemImage}>
                <img src={HomeLeft} alt="image" />
              </div>
              <div className={styles.main__itemInfo}>
                <p>Уход для лица</p>
                <Arrow />
              </div>
            </Link>
          </li>
          <li className={styles.main__itemCenter}>
            <h1>MAROON</h1>
            <p className={styles.main__itemText}>
              Натуральная косметика
              <br /> для бережного ухода за кожей
            </p>
            <Link to="/catalog">
              <Button>Подробнее</Button>
            </Link>
          </li>
          <li className={styles.main__item}>
            <Link to="/catalog">
              <div className={styles.main__itemImage}>
                <img src={HomeRight} alt="image" />
              </div>
              <div className={styles.main__itemInfo}>
                <p>Уход для тела</p>
                <Arrow />
              </div>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
};
