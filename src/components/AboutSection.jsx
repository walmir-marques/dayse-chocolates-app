import DayseImg from "../img/dayse.jpeg";

export const AboutSection = () => {
  return (
    <section className="mx-auto container w-5/6 h-screen flex flex-col  mb-32 lg:mb-0">
      <h1 className="text-4xl mt-3 font-bold text-center">
        🍫 Sobre <span className="text-primary">Mim</span>
      </h1>
      <div className="flex-1 flex flex-col lg:flex-row items-center container mx-auto p-4">
        <div className="mx-auto mb-8 md:mb-0 h-48 md:h-96 w-48 md:w-96">
          <img
            src={DayseImg}
            alt="Uma Imagem de Dayse Maria Nogueira"
            className="rounded-md max-w-full"
          />
        </div>
        <div className="flex-1 ml-0 md:ml-20 flex flex-col text-center md:text-left max-w-[500px]">
          <h2 className="font-bold text-2xl">Dayse Maria Nogueira</h2>
          <h3 className="mt-1 text-xl font-semibold">
            Apaixonada em fazer e criar doces.
          </h3>
          <p className="mt-9">
            Sou doceira a mais de 20 anos, amo o que faço e dia após dia
            continuo estudando para aprimorar e trazer qualidade e doces
            inovadores e criativos para meus clientes. Atualmente resido na
            cidade de alfenas, aonde vendo para clientes na região. Para saber
            mais sobre meu trabalho, visite minhas redes sociais ou me mande um
            email.
          </p>
          <p className="mt-5">
            <span className="text-primary font-bold">📧 Email: </span>{" "}
            daysemarianogueira@gmail.com
          </p>
          <p className="mt-5">
            <span className="text-primary font-bold">📱 Telefone: </span> +55
            (35) 984297987
          </p>

          <a
            className="transition ease-in-out duration-700 w-40 text-center p-2 rounded-full mt-5 font-bold bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-primary mx-auto lg:mx-0"
            href="https://drive.google.com/uc?export=download&id=1tRTBhle9SA8lint24DyR0NF1nKTGyFIn"
            target="_blank"
            rel="noreferrer"
          >
            Baixe a lista para Páscoa 2024
          </a>
        </div>
      </div>
    </section>
  );
};
