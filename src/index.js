import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa o componente principal da aplicação
import './styles.css'; // Opcional: arquivo de estilos globais

// Renderiza o componente raiz <App /> no elemento com id "root" no index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
