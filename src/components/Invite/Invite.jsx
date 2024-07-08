import { Container } from "../../ui/Container/Container";
import { Button } from "../../ui/Button/Button";
import InviteImage from "../../assets/images/InviteImage.png";
import styles from "./Invite.module.scss";
import { Link } from "react-router-dom";

export const Invite = () => {
  return (
    <Container>
      <div className={styles.invite}>
        <div className={styles.invite__image}>
          <img src={InviteImage} alt="" />
        </div>
        <div className={styles.invite__info}>
          <h2>Присоединяйтесь к нам</h2>
          <p>
            Подпишитесь на наш аккаунт @marooncare
            <br /> и узнавайте о новиках и акциях первыми
          </p>
          <Link target="_blanc" to="https://www.instagram.com">
            <Button>Подписаться</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
