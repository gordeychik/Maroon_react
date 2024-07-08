import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Container } from "../../ui/Container/Container";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../ui/Button/Button";
import { removeFromCart } from "../../store/cartSlice";
import { useEffect, useState } from "react";
import { Cart } from "../../assets/icons/Cart";
import styles from "./CartPage.module.scss";

export const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const [counters, setCounters] = useState(cartItems.map(item => ({ id: item.id, count: 1 })));

  const handleMinus = (id) => {
    setCounters(prevCounters => 
      prevCounters.map(counter => 
        counter.id === id ? { ...counter, count: Math.max(counter.count - 1, 1) } : counter
      )
    );
  }
  
  const handlePlus = (id) => {
    setCounters(prevCounters => 
      prevCounters.map(counter => 
        counter.id === id ? { ...counter, count: counter.count + 1 } : counter
      )
    );
  }

  const getCounter = (id) => {
    return counters.find(counter => counter.id === id)?.count || 1;
  }

  const calculatePrice = (basePrice, id) => {
    const count = getCounter(id);
    return basePrice * count;
  }

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, item) => {
      return acc + calculatePrice(parseFloat(item.price), item.id);
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems, counters]);

  return (
    <>
      <Header />
      <Container>
        <div className={styles.cart}>
          <h2>Корзина</h2>
          {cartItems.length === 0 ? (
            <div className={styles.cart__empty}>
              <p>Ваша корзина пуста</p>
              <Cart />
            </div>
          ) : (
            <>
            <ul className={styles.cart__wrapper}>
              {cartItems.map((item, i) => (
                <li className={styles.cart__item} key={i}>
                  <div className={styles.cart__itemInfo}>
                    <div className={styles.cart__itemImage}>
                      <img
                        src={`/src/assets/images/${item.image}.png`}
                        alt="image"
                      />
                    </div>
                    <div className={styles.cart__itemName}>
                      <h3>{item.title}</h3>
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <div className={styles.cart__itemActions}>
                  <div className={styles.cart__itemCounter}>
                    <button onClick={() => handleMinus(item.id)}>-</button>
                    <p>{getCounter(item.id)}</p>
                    <button onClick={() => handlePlus(item.id)}>+</button>
                  </div>
                    <h4>{calculatePrice(parseFloat(item.price), item.id).toFixed(2)}</h4>
                    <Button>Заказать</Button>
                    <Button onClick={() => handleRemoveFromCart(item.id)}>
                      Удалить
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
                    <div className={styles.price}>
                    <h2>К оплате: <span>{`${totalPrice} ₽`}</span></h2>
                    <Button>Оформить заказ</Button>
                  </div>
                  </>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};