import { Bestseller } from "../../components/Bestseller/Bestseller";
import { Contacts } from "../../components/Contacts/Contacts";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Invite } from "../../components/Invite/Invite";
import { Main } from "../../components/Main/Main";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Main />
      <Bestseller />
      <Invite />
      <Contacts />
      <Footer />
    </>
  );
};
