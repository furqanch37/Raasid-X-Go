import "./styles.css";

export default function OrderSummary() {
  return (
    <aside className="order-summary">
      <h3>Order summary</h3>
      <div className="item">
        <div className="image-wrapper">
          <img src="/assets/chaat_masala.png" alt="Sweet Candy" />
          <span className="item-qty">2</span>
        </div>
        <div className="item-details">
          <div className="item-row">
            <strong>Chaat Masala</strong>
            <strong>130.00PKR</strong>
          </div>
          <p className="desc">
            Et veniam commodi. Quam aliquam massa volutpat consectetur explicabo,
            lorem, sagittis hymenaeos magnis quod maiores...
          </p>
        </div>
      </div>

      

      <div className="price">
        <p>Subtotal<strong>130.00PKR</strong></p>
        <p className="total-p">Total<strong>130.00PKR</strong></p>
      </div>
    </aside>
  );
}
