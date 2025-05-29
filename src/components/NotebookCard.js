import React from "react";
import { Link } from "react-router-dom";

function NotebookCard({ notebook }) {
  // Formatar o preço para o formato brasileiro
  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(notebook.preco);

  return (
    <div className="card">
      <div
        className="bg-gray-100"
        style={{ height: "200px", overflow: "hidden" }}
      >
        <img
          src={notebook.imagens[0] || "/placeholder-notebook.jpg"}
          alt={notebook.titulo}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="card-header">
        <h3 className="font-bold">{notebook.titulo}</h3>
        <p className="text-gray-500">
          {notebook.marca} {notebook.modelo}
        </p>
      </div>

      <div className="card-content">
        <div className="space-y-2">
          <p>
            <span className="font-bold">Processador:</span>{" "}
            {notebook.processador}
          </p>
          <p>
            <span className="font-bold">Memória:</span> {notebook.memoria}
          </p>
          <p>
            <span className="font-bold">Armazenamento:</span>{" "}
            {notebook.armazenamento}
          </p>
          <p>
            <span className="font-bold">Estado:</span> {notebook.estado}
          </p>
        </div>
      </div>

      <div className="card-footer">
        <span className="text-blue-600 font-bold">{precoFormatado}</span>
        <Link to={`/notebook/${notebook.id}`} className="btn btn-gradient">
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
}

export default NotebookCard;
