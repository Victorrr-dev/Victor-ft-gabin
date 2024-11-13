import Image from "next/image";
import Logo from "./public/images/Logo.png";
import phone from "./public/images/bxs-phone.svg";
import mail from "./public/images/bxs-envelope.svg";
import bg_st from "./public/images/BG/bg-st.jpg";
import { lora, pacifico, playfairDisplay } from "./layout";
import bg_blue from "./public/images/card-bg-blue.png";
import chevron from "./public/images/bxs-chevrons-down.svg";
import next from "next";
import bg_next from "./public/images/BG/bg-next.js.png";
import bg_nest from "./public/images/BG/Nest.js.png";
import bg_tailwind from "./public/images/BG/bg-tailwind.png"
import bg_javascript from "./public/images/BG/bg-javascript.png"
import bg_typescript from "./public/images/BG/bg-typescript.png"






export default function Home() {
  return (
    <main className="background">
      <header className="header bg-blue-900 h-40">
        <div className="box-icons space-x-72 justify-center h-16 flex items-center px-4">
          <div className="flex items-center space-x-2">
            <Image
              src={phone}
              alt="Téléphone"
              width={30}
              height={30}
              className="phone"
            />
            <span className="text-white font-serif">+06 99 41 56 37</span>
          </div>

          <div className="flex items-center space-x-2">
            <Image
              src={mail}
              alt="Email"
              width={30}
              height={30}
              className="mail"
            />
            <span className="text-white font-serif">contact@serenia.com</span>
          </div>

          <div className="text-white font-serif">
            26 Rte de Calais, 62280 Saint-Martin-Boulogne
          </div>
        </div>
        <nav className="navbar ml-20  h-24 flex">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={30}
            className="Logo"
          />
          <ul className="flex w-full mr-20 font-extralight   justify-end space-x-16 items-center">
            <li className="font-serif font-bold cursor-pointer">Accueil</li>
            <li className="cursor-pointer">Nos prestations</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>
      <article className="hero relative h-svh bg-blue-950">
        <div className="bg-st">
          <Image
            src={bg_st}
            alt="Téléphone"
            width={1920}
            height={300}
            className="backgroundst filter brightness-50 "
          />

          <p className="absolute inset-0 flex mt-20 justify-center  text-white text-4xl font-serif font-semibold">
            Votre Agence Serenia
          </p>
          <p className="absolute inset-0 flex mt-40 justify-center  underline">
            Spécialiste dans la création et le développement de site web.
          </p>
          <div className="absolute inset-0  flex items-center justify-center  ">
            <button className="btn p-2 h-6 flex rounded-full font-serif font-bold    border-white justify-center items-center absolute">
              Comencer avec nous
            </button>
          </div>
        </div>
      </article>
      <section className="qui-somme-nous h-svh bg-blue-950 relative">
        <div className=" title text-white font-serif text-4xl flex justify-center ">
          Qui Somme Nous ?{" "}
        </div>
        <Image
          src={Logo}
          alt="Téléphone"
          width={300}
          height={30}
          className="Logo absolute ml-20"
        />
        <p
          className={`flex justify-end mt-24 text-center font-serif ${lora.className}`}
        >
          Chez Serenia, nous sommes passionnés par la création de sites web et
          le développement sur mesure. <br /> Notre mission : transformer vos
          idées en expériences numériques uniques et performantes. <br /> Nous
          concevons des solutions sur mesure, qu'il s'agisse de sites vitrines,
          de plateformes e-commerce, ou d’applications spécifiques. <br /> Notre
          approche repose sur l'écoute, la transparence et un accompagnement de
          qualité pour assurer la réussite de chaque projet. <br /> Faites
          confiance à Serenia pour un développement web qui vous ressemble !
        </p>
        <hr className="mt-20" />
        <div className="title text-white font-serif text-4xl flex justify-center pt-8">
          Nos prestations
        </div>
        <div className="box-carte bg-blue-950 font-serif flex justify-between pt-20 px-8">
          <div className="card bg-blue-700 h-80 w-80 flex flex-col justify-center items-center text-white font-bold rounded-2xl text-2xl p-4">
            <h2 className="mb-2">Création de site web</h2>
            <p className="text-center text-base font-normal">
              Nous créons des sites modernes et adaptés pour mettre en valeur
              votre entreprise et attirer vos clients.
            </p>
          </div>

          <div className="card bg-blue-700 h-80 w-80 flex flex-col justify-center items-center text-white font-bold rounded-2xl text-2xl p-4">
            <h2 className="mb-2">Refonte de site</h2>
            <p className="text-center text-base font-normal">
              Améliorez votre site existant avec un design moderne et des
              fonctionnalités optimisées pour une meilleure expérience
              utilisateur.
            </p>
          </div>
          <div className="card bg-blue-700 h-80 w-80 flex flex-col justify-center items-center text-white font-bold text-center rounded-2xl text-2xl p-4">
            <h2 className="mb-2">Maintenance et support</h2>
            <p className="text-center text-base font-normal">
              Bénéficiez d'un suivi technique régulier pour assurer la sécurité,
              les mises à jour et la fiabilité de votre site web.
            </p>
          </div>
        </div>
        <div className="box-bg-language flex justify-between mt-20">
            <Image
          src={bg_next}
          alt="logo next"
          width={300}
          height={30}
          className="bg-next "
        />
          <Image
          src={bg_nest}
          alt="logo next"
          width={300}
          height={30}
          className="bg_nest"
        />
           <Image
          src={bg_tailwind}
          alt="logo next"
          width={300}
          height={30}
          className="bg-tailwind"
        />
          <Image
          src={bg_javascript}
          alt="logo next"
          width={300}
          height={30}
          className="bg-javasccript h-40"
        />
          <Image
          src={bg_typescript}
          alt="logo next"
          width={300}
          height={30}
          className="bg-typescript h-40"
        />
        </div>
      
      </section>
      <section className="layout h-svh bg-blue-950"></section>
      <hr />
      <section className="layout h-svh bg-blue-950">
        <h2 className="flex justify-center font-serif pt-12 text-4xl">Contactez-nous</h2>
        
      </section>
    </main>
  );
}
