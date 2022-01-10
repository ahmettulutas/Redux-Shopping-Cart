import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem } from "../shoppingCart/cartSlice";
import { selectSearchTerm } from "../searchBar/searchBarSlice";

import {
  loadAllCards,
  loadingSelector,
  successSelector,
  filteredCardsSelector
} from "./loadCardsSlice";

const DisplayCards = () => {
  const success = useSelector(successSelector);
  const loading = useSelector(loadingSelector);
  const allCards = useSelector(filteredCardsSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllCards());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (success) {
    return (
      <main className="display-main">
        <div className="products-main">
          {allCards.map((item) => (
            <div className="product-div">
              <img src={item.image} alt={item.name}></img>
              <p>{item.name}</p>
              <p>{item.price} $</p>
              <button onClick={() => dispatch(incrementItem(item))}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </main>
    );
  } else {
    return <h1>Hata</h1>;
  }
};

export default DisplayCards;
