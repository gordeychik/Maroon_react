// src/components/ProductPage/ProductPage.js
import { Button } from "../../ui/Button/Button";
import { Container } from "../../ui/Container/Container";
import { useState, useEffect } from "react";
import { Closer } from "../../assets/icons/Closer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToRecentlyViewed } from "../../store/cartSlice";
import { Check } from "../../assets/icons/Check";

export const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isSposobActive, setIsSposobActive] = useState(false);
  const [isSostavActive, setIsSostavActive] = useState(false);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const recentlyViewed = useSelector((state) => state.cart.recentlyViewed);

  const backgroundImageStyle = (image) => {
    return { backgroundImage: `url(/src/assets/images/${image}.png)` };
  };

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://7b06ca7d4baf48da.mokky.dev/catalog/${id}`
      );
      setProduct(data);
      dispatch(addToRecentlyViewed(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const cartItemIds = cartItems.map(item => item.id);
  const isInCart = cartItemIds.includes(product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Container>
        <div className={styles.single__wrapper}>
          <div className={styles.single__image}>
            <img src={`/src/assets/images/${product.image}.png`} alt="image" />
          </div>
          <div className={styles.single__info}>
            <h3>{product.title}</h3>
            <span>{product.name}</span>
            <p>{product.opisanie}</p>
            <div className={styles.single__infoMore}>
              <button
                onClick={() => setIsSostavActive(!isSostavActive)}
                className={isSostavActive ? styles.active : ""}
              >
                Состав <Closer />
              </button>
              <p
                className={`${styles.sostav} ${
                  isSostavActive ? styles.active : ""
                }`}
              >
                {product.sostav}
              </p>
            </div>
            <div className={styles.single__infoMore}>
              <button
                onClick={() => setIsSposobActive(!isSposobActive)}
                className={isSposobActive ? styles.active : ""}
              >
                Способ применения{" "}
                <Closer
                  className={`${styles.icon} ${
                    isSposobActive ? styles.active : ""
                  }`}
                />
              </button>
              <p
                className={`${styles.sposob} ${
                  isSposobActive ? styles.active : ""
                }`}
              >
                {product.sposob}
              </p>
            </div>
            <div className={styles.single__infoActions}>
              <h3>{product.price}</h3>
              <Button onClick={handleAddToCart} disabled={isInCart}>
                {isInCart ? <><Check/> Добавлено в корзину</> : "Добавить в корзину"}
              </Button>
            </div>
          </div>
        </div>
        {recentlyViewed.length > 1 && (
          <div className={styles.visited}>
            <h2>Недавно просмотренные</h2>
            <div className={styles.visited__wrapper}>
              {recentlyViewed.map((elem) => (
                <Link to={`/product/${elem.id}`} key={elem.id}>
                  <div
                    className={styles.visited__item}
                    style={backgroundImageStyle(elem.image)}
                  >
                    <div className={styles.visited__itemInfo}>
                      <h4>{elem.title}</h4>
                      <p>{elem.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
};