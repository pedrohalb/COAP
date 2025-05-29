import React from "react";
import { redesSociais } from "../data/notebooks";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container">
        <h1 className="section-title mt-8">Entre em Contato</h1>

        <div className="card p-8 max-w-3xl mx-auto">
          <p className="mb-8 text-lg">
            Estamos à disposição para esclarecer suas dúvidas sobre nossos
            notebooks seminovos. Entre em contato através de um dos canais
            abaixo e responderemos o mais breve possível.
          </p>

          <div
            className="grid"
            style={{ gridTemplateColumns: "repeat(1, 1fr)", gap: "2rem" }}
          >
            <div>
              <h2 className="text-xl font-bold mb-4">Redes Sociais</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="mr-3"
                    style={{ width: "24px", height: "24px", color: "#E1306C" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <a
                    href={redesSociais.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3"
                    style={{ width: "24px", height: "24px", color: "#1877F2" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z" />
                  </svg>
                  <a
                    href={redesSociais.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3"
                    style={{ width: "24px", height: "24px", color: "#25D366" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <a
                    href={redesSociais.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Contato Direto</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="mr-3"
                    style={{ width: "24px", height: "24px", color: "#D44638" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                  <a
                    href={`mailto:${redesSociais.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {redesSociais.email}
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3"
                    style={{ width: "24px", height: "24px", color: "#25D366" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>(11) 99999-9999</span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="font-bold mb-2">Horário de Atendimento:</h3>
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>Sábado: 9h às 13h</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Envie uma Mensagem</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="nome" className="block mb-1 font-bold">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Seu nome"
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Seu email"
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                  }}
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block mb-1 font-bold">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows="4"
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Digite sua mensagem"
                  style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                  }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-gradient ">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContatoPage;
