import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container flex justify-between items-center">
        <div>
          <Link to="/" className="block w-40 h-12 bg-red-500">
            <img
              src="/images/texto_logo.png"
              alt="Logo COAP"
              style={{
                width: "200px",
                height: "40px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <Link
              to="/"
              className="hover:text-blue-200 transition-colors font-bold"
            >
              Início
            </Link>
            <a
              href="#contato"
              className="hover:text-blue-200 transition-colors font-bold"
            >
              Contato
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
