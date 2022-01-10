import { React } from "react";
import Cart from "../features/shoppingCart/cart";
import SearchBar from "../features/searchBar/searchBar";
const Header = () => {
  return (
    <header className="header">
      <h1>Ahmet's Grocery Store</h1>
      <SearchBar />
      <Cart />
    </header>
  );
};
export default Header;
