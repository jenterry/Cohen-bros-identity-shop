import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Dude from "./thedude.png"
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_JvkKQs2fABuOyzACsM9ysnK9");

export default function App() {
  return (
    <div className="App">
    <div className="Title">Be the Dude - $100</div>
      <p></p>
      <img src={Dude} alt="The dude"/>
      <p></p>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
