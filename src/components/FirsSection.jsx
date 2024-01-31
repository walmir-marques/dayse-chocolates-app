import woman from "../img/woman.png";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const FirstSection = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>Doçuras Feitas
            com Carinho.
          </div>
          <h1 className="text-[70px] leading-[1.1] font-semibold mb-4 mt-5">
            DAYSE CHOCOLATES
            <br />
          </h1>
          <h2 className="text-xl">
            Para mais informações e orçamentos visite minhas redes sociais.
          </h2>
          <div className="flex gap-5 text-3xl mt-4">
            <a
              href="https://www.instagram.com/daysemaria.nogueira/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram />
            </a>
            <a
              href="https://wa.me/5535984297987"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={woman} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
