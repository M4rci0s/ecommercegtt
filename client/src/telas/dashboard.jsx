import React, { useState, useEffect } from "react";
import api from "../service/index";

return (
  <div class="dashboard">
    <aside class="sidebar">
      <h1 class="logo">GTT</h1>
      <nav class="menu">
        <ul>
          <li>
            <a href="#" class="active">
              Visão Geral
            </a>
          </li>
          <li>
            <a href="#">Produtos</a>
          </li>
          <li>
            <a href="#">Vendas</a>
          </li>
          <li>
            <a href="#">Clientes</a>
          </li>
          <li>
            <a href="#">Relatórios</a>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="content">
      <header class="header">
        <h2>Bem-vindo(a), Gerente</h2>
        <input type="search" placeholder="Pesquisar..." />
      </header>
      <section class="stats">
        <div class="card">
          <h3>Total de Produtos</h3>
          <p>150</p>
        </div>
        <div class="card">
          <h3>Vendas Hoje</h3>
          <p>R$ 3.000</p>
        </div>
        <div class="card">
          <h3>Clientes</h3>
          <p>320</p>
        </div>
      </section>
      <section class="recent-activity">
        <h3>Atividades Recentes</h3>
        <ul>
          <li>Nova venda registrada: R$ 250 - Cliente: Maria Silva</li>
          <li>Produto "Camiseta Branca" adicionado ao estoque.</li>
          <li>Cliente João Souza fez uma nova compra.</li>
        </ul>
      </section>
    </main>
  </div>
);
