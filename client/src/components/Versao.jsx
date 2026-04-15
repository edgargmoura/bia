import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";

const Versao = () => {
  const [version, setVersion] = useState(null);
  const [ambiente, setAmbiente] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}/api/versao`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        setVersion(data.versao);
        setAmbiente(data.ambiente);
        setCliente(data.cliente);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="about-page">
      <div className="about-content">
        <div className="feature-grid">
          <div className="feature-card highlight">
            <h3>Versão da Aplicação</h3>
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>Erro: {error}</p>}
            {version && <h4>{version}</h4>}
          </div>
          <div className="feature-card">
            <h3>Ambiente</h3>
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>Erro: {error}</p>}
            {ambiente && <h4>{ambiente}</h4>}
          </div>
          <div className="feature-card">
            <h3>Cliente</h3>
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>Erro: {error}</p>}
            {cliente && <h4>{cliente}</h4>}
          </div>
        </div>
      </div>

      <div className="about-footer">
        <Link to="/" className="back-button">
          ← Voltar
        </Link>
      </div>
    </div>
  );
};

export default Versao;
