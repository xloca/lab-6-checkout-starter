import { formatKip } from "../data.js"; // use formatKip(n) for prices

// CHECKPOINT 4 — show the customer what they ordered.
// `order` looks like: { customer: { fullName, phone, ... }, items: [...], total }
// Show at least: a thank-you with the name, the items, delivery choice, and the grand total.
function OrderSummary({ order, onBackToShop }) {
  return (
    <div className="summary" data-testid="summary">
      <h2 className="checkout-title">ສັ່ງຊື້ສຳເລັດ · Order placed</h2>
      <p className="muted">TODO — build the summary here.</p>
      <button className="submit-btn" onClick={onBackToShop}>← ກັບໄປຮ້ານ</button>
    </div>
  );
}

export default OrderSummary;
