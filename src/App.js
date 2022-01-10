import "./styles.css";
import DisplayCards from "./features/loadCards/displayCards";
import Cart from "./features/shoppingCart/cart";
import Header from "./components/header";
export default function App() {
  return (
    <main className="main-app">
      <Header />
      <DisplayCards />
    </main>
  );
}
