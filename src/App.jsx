import { useState } from "react";
import { products } from "./data.js";
import Header from "./components/Header.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import CartPanel from "./components/CartPanel.jsx";
import Checkout from "./components/Checkout.jsx";
import OrderSummary from "./components/OrderSummary.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("all");
  const [view, setView] = useState("shop"); // "shop" | "checkout" | "done"
  const [order, setOrder] = useState(null);

  // updater form + spread/map: never mutate `cart`, never read a stale copy
  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((i) => i.id === product.id);
      if (existing) {
        return current.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...current, { ...product, qty: 1 }];
    });
  }

  function increase(id) {
    setCart((current) => current.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  }

  function decrease(id) {
    setCart((current) =>
      current.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0)
    );
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((i) => i.id !== id));
  }

  // derived at render — never its own useState
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  // called by <Checkout /> once the form is valid
  function placeOrder(customer) {
    setOrder({ customer, items: cart, total });
    setCart([]);
    setView("done");
  }

  const visible =
    category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <div className="wrap">
      <Header shopName="ຮ້ານ Lao Handmade" itemCount={itemCount} />
      {view === "shop" && (
        <div className="layout">
          <div>
            <FilterBar value={category} onChange={setCategory} />
            <ProductGrid products={visible} onAdd={addToCart} />
          </div>
          <CartPanel
            cart={cart}
            total={total}
            onIncrease={increase}
            onDecrease={decrease}
            onRemove={removeFromCart}
            onCheckout={() => setView("checkout")}
          />
        </div>
      )}

      {view === "checkout" && (
        <Checkout
          cart={cart}
          total={total}
          onBack={() => setView("shop")}
          onPlaceOrder={placeOrder}
        />
      )}

      {view === "done" && (
        <OrderSummary order={order} onBackToShop={() => setView("shop")} />
      )}
    </div>
  );
}

export default App;
