import React, { useState, useEffect } from "react";
import api from "../service/index";

return (
  <main class="auth-container">
  <div class="auth-box">
      <h1 id="form-title">Login</h1>
      <form id="auth-form">
          <div id="register-fields" class="hidden">
              <label for="name">Nome:</label>
              <input type="text" id="name" placeholder="Seu nome">
          </div>
          <label for="email">E-mail:</label>
          <input type="email" id="email" placeholder="Seu e-mail">
          
          <label for="password">Senha:</label>
          <input type="password" id="password" placeholder="Sua senha">
          
          <div id="user-role" class="hidden">
              <label for="role">Tipo de Usuário:</label>
              <select id="role">
                  <option value="cliente">Cliente</option>
                  <option value="admin">Administrador</option>
              </select>
          </div>
          
          <button type="submit">Entrar</button>
      </form>
      <p id="toggle-form">Não tem conta? <a href="#">Registre-se</a></p>
  </div>
</main>
    </main>
  </div>
);
