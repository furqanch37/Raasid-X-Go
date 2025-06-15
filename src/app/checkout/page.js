import Head from "next/head";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import "./styles.css"; // Make sure styles.css is in the same folder

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className="checkout-container">
        <h1>Checkout</h1>
        <div className="checkout-content">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </div>
    </>
  );
}
