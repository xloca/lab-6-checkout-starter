function Header({ shopName, itemCount }) {
  return (
    <div className="shop-header">
      <div className="name">{shopName}</div>
      <div className="count" data-testid="cart-count">🛒 {itemCount} ຊິ້ນ</div>
    </div>
  );
}

export default Header;
