import { Container } from "../../ui/Container/Container";
import { Button } from "../../ui/Button/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Catalog.module.scss";

export const Catalog = () => {
  const backgroundImageStyle = (image) => {
    return { backgroundImage: `url(/src/assets/images/${image}.png)` };
  };

  const [list, setList] = useState([]);

  const getCatalog = async () => {
    try {
      const { data } = await axios.get(
        "https://7b06ca7d4baf48da.mokky.dev/catalog"
      );
      setList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCatalog();
  }, []);

  return (
    <>
      <Container>
        <div className={styles.catalog__wrapper}>
          <div className={styles.catalog__title}>
            <h2>Каталог</h2>
            <Button>Фильтр</Button>
          </div>
          <div className={styles.catalog__items}>
            {list.map((elem) => {
              return (
                <Link to={`/product/${elem.id}`} key={elem.id}>
                  <div
                    className={styles.catalog__item}
                    style={backgroundImageStyle(elem.image)}
                  >
                    <div className={styles.catalog__itemInfo}>
                      <h4>{elem.title}</h4>
                      <h4>{elem.price}</h4>
                    </div>
                    <div className={styles.catalog__itemInfo}>
                      <p>{elem.name}</p>
                      <p>{elem.size}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};