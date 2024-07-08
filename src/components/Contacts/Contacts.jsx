import { Container } from "../../ui/Container/Container";
import { Facebook } from "../../assets/icons/Facebook";
import { Inst } from "../../assets/icons/Inst";
import { Twitter } from "../../assets/icons/Twitter";
import { Link } from "react-router-dom";
import styles from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <Container>
        <div className={styles.contacts__wrapper}>
          <div className={styles.contacts__info}>
            <h2>Контакты</h2>
            <h4>Адрес</h4>
            <p>
              Санкт-Петербург,
              <br /> ул. Большая Конюшенная, 19
            </p>
            <h4>Телефон</h4>
            <a href="tel:+79238889060">+7 (923) 888-90-60</a>
            <h4>E-mail</h4>
            <a href="mailto:info@maroon.ru">info@maroon.ru</a>
            <div className={styles.contacts__socials}>
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
          <div className={styles.contacts__map}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae7a0d180538cdf2350cf0c05cd782d625423c6f99046736f8fe8516258bd0876&amp;source=constructor"
              width="670"
              height="420"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};
