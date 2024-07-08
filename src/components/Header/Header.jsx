import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons/Logo";
import { Container } from "../../ui/Container/Container";
import styles from "./Header.module.scss";
import { Profile } from "../../assets/icons/Profile";
import { Basket } from "../../assets/icons/Basket";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <Container>
        <div className={styles.header__wrapper}>
          <Link to="/">
            <Logo />
          </Link>
          <div className={styles.header__actions}>
            <nav
              class={`${styles.header__nav} ${isMenuOpen ? styles.open : ""}`}
            >
              <ul>
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <Link to="/catalog">Каталог</Link>
                </li>
                <li>
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </nav>
            <div className={styles.header__icons}>
              <Link to="/cart">
                <Basket />
              </Link>
              {cartItems.length > 0 && (
                <span className={styles.cart__number}>{cartItems.length}</span>
              )}
            </div>
            <div
              className={`${styles.header__burger} ${
                isMenuOpen ? styles.open : ""
              }`}
              onClick={toggleMenu}
            >
              <div
                className={`${styles.header__burger_line} ${
                  isMenuOpen ? styles.open : ""
                } `}
              ></div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};