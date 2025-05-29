import React from "react";
import { avaliacoes } from "../data/notebooks";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NotebookCarousel from "../components/NotebookCarousel";
import AvaliacaoCarousel from "../components/AvaliacaoCarousel";
import {
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* NOTEBOOKS */}

        <NotebookCarousel />

        <section className="section bg-white text-center">
          <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Manutenção ou Venda de Notebook
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-10 rounded-xl shadow transition-transform hover:-translate-y-1">
                <WrenchScrewdriverIcon
                  style={{ width: "100px", height: "100px" }}
                  className="mx-auto text-blue-60 mb-4"
                />

                <h3 className="text-xl font-semibold mb-2">
                  Precisa de conserto?
                </h3>
                <p className="mb-4">
                  Formatamos, trocamos peças, limpamos e damos aquele upgrade!
                </p>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gradient"
                >
                  Agendar manutenção
                </a>
              </div>

              <div className="bg-gray-100 p-10 rounded-xl shadow transition-transform hover:-translate-y-1">
                <CurrencyDollarIcon
                  style={{ width: "100px", height: "100px" }}
                  className="mx-auto text-blue-60 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Quer vender seu notebook?
                </h3>
                <p className="mb-4">
                  Compramos notebooks usados e em bom estado. Envie fotos e
                  dados!
                </p>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gradient"
                >
                  Me faça uma oferta
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <AvaliacaoCarousel avaliacoes={avaliacoes} />
        <Footer id="contato"></Footer>
      </main>
    </div>
  );
}

export default HomePage;
