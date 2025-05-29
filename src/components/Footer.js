import React from "react";

function Footer({ id }) {
  return (
    <section id={id} className="section bg-gray-50 text-center">
      <div className="container max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Fale com a gente</h2>
        <p className="text-lg mb-8">
          Dúvidas, orçamento ou sugestões? Estamos prontos para ajudar.
        </p>

        <div className="flex justify-center gap-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-circle"
            aria-label="WhatsApp"
          >
            <img
              src="/images/whatsapp.svg"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-circle"
            aria-label="Instagram"
          >
            <img
              src="/images/instagram.svg"
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>

          {/* E-mail */}
          <a
            href="mailto:contato@notebooksseminovos.com.br"
            className="icon-circle"
            aria-label="E-mail"
          >
            <img src="/images/email.svg" alt="E-mail" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
