import chocolate from "../img/chocolate.png";
import chocolateBox from "../img/chocolateBox.png";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [showChocolate, setShowChocolate] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;
      const triggerPoint = pageHeight - 200;

      if (scrollPosition >= triggerPoint) {
        setShowChocolate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_name: user,
      message: textArea,
      email: email,
    };

    emailjs
      .send(
        "service_ju0bppc",
        "template_vskkrah",
        templateParams,
        "fsuXQ3jcG5tYdh1Tg"
      )
      .then(
        (response) => {
          console.log("Email enviado");
          setUser("");
          setEmail("");
          setTextArea("");
        },
        (error) => {
          console.log(error);
        }
      );
  }

  return (
    <div className="flex flex-col items-center justify-center  relative">
      <div className="self-end">
        <img
          src={chocolate}
          alt="..."
          className={`self-endtransition-opacity duration-500 w-[500px] h-[200px] ${
            showChocolate ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <h1 className="text-4xl font-bold text-center">
        🍫 Entre em <span className="text-pink-500">Contato</span>
      </h1>
      <div className="bg-white p-8 rounded shadow-md hover:shadow-pink-500 w-full max-w-md border border-pink-500 lg:mb-36">
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-sm font-semibold mb-1"
            >
              Nome
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-sm font-semibold mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-1"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded outline-none"
              onChange={(e) => setTextArea(e.target.value)}
              value={textArea}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-200"
            value="submit"
          >
            Enviar
          </button>
        </form>
      </div>
      <div className="transition-opacity duration-500 lg:absolute bottom-10 left-10">
        <img
          src={chocolateBox}
          alt="..."
          className={`${showChocolate ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
};

export default Contact;
