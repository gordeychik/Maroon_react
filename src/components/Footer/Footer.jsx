import { Container } from "../../ui/Container/Container";
import { Logo } from "../../assets/icons/Logo";
import { Facebook } from "../../assets/icons/Facebook";
import { Inst } from "../../assets/icons/Inst";
import { Twitter } from "../../assets/icons/Twitter";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__info}>
            <Logo />
            <nav class={styles.footer__nav}>
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
          </div>
          <div className={styles.footer__icons}>
            <Link target="_blanc" to="https://www.facebook.com">
              <Facebook />
            </Link>
            <Link target="_blanc" to="https://www.instagram.com">
              <Inst />
            </Link>
            <Link target="_blanc" to="https://www.twitter.com">
              <Twitter />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
