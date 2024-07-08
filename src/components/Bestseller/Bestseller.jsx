import { Container } from "../../ui/Container/Container";
import { Button } from "../../ui/Button/Button";
import styles from "./Bestseller.module.scss";
import { Link } from "react-router-dom";
import { BestsellerSlider } from "./BestsellerSlider";

export const Bestseller = () => {
  return (
    <section className={styles.bestseller}>
      <Container>
        <div className={styles.bestseller__wrapper}>
          <div className={styles.bestseller__info}>
            <h2>Бестселлеры</h2>
            <p>Легендарные продукты, завоевавшие любовь наших клиентов</p>
            <Link to="/catalog">
            <Button>Смотреть все</Button>
            </Link>
          </div>
          <div className={styles.bestseller__slider}>
            <BestsellerSlider />
            </div>
        </div>
      </Container>
    </section>
  );
};
