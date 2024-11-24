import React, { useState, useEffect } from "react";
import api from "../service/index";

return (
    <div class="orders-section">
    <h2>Histórico e Status de Pedidos</h2>
    <table class="orders-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Data</th>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Valor Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>24/11/2024</td>
          <td>Camisa Polo</td>
          <td>2</td>
          <td>R$ 150,00</td>
          <td class="status awaiting">Aguardando Pagamento</td>
        </tr>
        <tr>
          <td>2</td>
          <td>22/11/2024</td>
          <td>Calça Jeans</td>
          <td>1</td>
          <td>R$ 200,00</td>
          <td class="status shipped">Enviado</td>
        </tr>
        <tr>
          <td>3</td>
          <td>20/11/2024</td>
          <td>Vestido Casual</td>
          <td>1</td>
          <td>R$ 300,00</td>
          <td class="status delivered">Entregue</td>
        </tr>
      </tbody>
    </table>
  </div>

);
