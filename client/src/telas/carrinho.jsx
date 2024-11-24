import React, { useState, useEffect } from "react";
import api from "../service/index";

return (
  <header>
  <h1>Carrinho de Compras</h1>
</header>
<main>
  <section class="cart">
    <h2>Seu Carrinho</h2>
    <table class="cart-table">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody id="cart-items">
      </tbody>
    </table>
    <div class="cart-total">
      <h3>Total: R$ <span id="total">0.00</span></h3>
    </div>
  </section>
  <section class="checkout">
    <h2>Finalizar Compra</h2>
    <button id="checkout-button">Finalizar Compra</button>
  </section>
</main>

);
