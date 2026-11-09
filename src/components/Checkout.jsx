import { DELIVERY_FEE, formatKip, provinces } from "../data.js";
// ↑ provinces and DELIVERY_FEE are ready for you to use in Checkpoints 2–3.

function Checkout({ cart, total, onBack, onPlaceOrder }) {
  // ─────────────────────────────────────────────────────────────
  // CHECKPOINT 1 — controlled inputs
  //   • add ONE useState for the whole form: formData = { fullName: "", phone: "" }
  //   • write ONE handleChange that works for every field (use e.target.name)
  //   • make the two inputs below controlled: value + onChange
  //
  // CHECKPOINT 2 — add the other fields
  //   email, province (select), delivery (radio), address (only when
  //   delivery is "home"), payment (select), note (textarea), agree (checkbox)
  //
  // CHECKPOINT 3 — validation on submit
  //   write validate(formData) → returns an object of error messages,
  //   show each error under its field, and DON'T submit while there are errors
  //
  // CHECKPOINT 4 — success
  //   when valid, call onPlaceOrder(formData) — then finish OrderSummary.jsx
  // ─────────────────────────────────────────────────────────────

  function handleSubmit(e) {
    e.preventDefault();
    // TODO (Checkpoint 3 and 4)
  }

  // TODO (Checkpoint 2): make this depend on the chosen delivery option
  const deliveryFee = 0;
  const grandTotal = total + deliveryFee;

  return (
    <div className="checkout">
      <button type="button" className="back-link" onClick={onBack}>
        ← ກັບໄປຮ້ານ
      </button>
      <h2 className="checkout-title">ຂໍ້ມູນການສັ່ງຊື້ · Checkout</h2>

      <div className="checkout-layout">
        <form onSubmit={handleSubmit} noValidate className="form-card">
          <div className="field">
            <label htmlFor="fullName">ຊື່ ແລະ ນາມສະກຸນ *</label>
            {/* This input is NOT controlled yet — React doesn't know what's typed in it */}
            <input id="fullName" name="fullName" type="text" />
          </div>

          <div className="field">
            <label htmlFor="phone">ເບີໂທ * <span className="hint">(ຕົວເລກເທົ່ານັ້ນ ເຊັ່ນ 02055512345)</span></label>
            <input id="phone" name="phone" type="tel" />
          </div>

          {/* TODO (Checkpoint 2): the other fields go here */}

          <button type="submit" className="submit-btn">ຢືນຢັນການສັ່ງຊື້</button>
        </form>

        <aside className="recap">
          <div className="cart-title">ສິ່ງທີ່ສັ່ງ</div>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <span className="emoji">{item.emoji}</span>
                <div className="info">
                  <div className="name">{item.name} × {item.qty}</div>
                  <div className="line">{formatKip(item.price * item.qty)}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="recap-row"><span>ສິນຄ້າ</span><span>{formatKip(total)}</span></div>
          <div className="recap-row"><span>ຄ່າສົ່ງ</span><span>{formatKip(deliveryFee)}</span></div>
          <div className="total">
            <span>ລວມທັງໝົດ</span>
            <b data-testid="grand-total">{formatKip(grandTotal)}</b>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Checkout;
