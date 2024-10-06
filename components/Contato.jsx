import { useRef } from "react";
import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CONTACT } from "../constants";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      message: form.current.message.value,
    };

    console.log("Dados do Formulário:", formData);

    form.current.reset();
  };

  return (
    <div className="min-h-screen max-w-5xl mx-auto mt-48 lg:mt-56 md:mt-52">
        <div className="text-center mb-20 md:mb-32">
        <h1 className="font-krona font-semibold text-fiap text-3xl mb-5 px-3">
          Minhas Informacoes
        </h1>
        <p className="text-lg font-montserrat text-white font-medium mb-6">
          Clique para se <span className="text-fiap font-semibold">conectar</span> comigo
        </p>
        <ul className="flex justify-center space-x-8">
          <li className="social-icons">
            <a
              href="https://github.com/lucasdias0812"
              target="_blank"
              rel="noreferrer"
              className="text-white text-3xl hover:text-[#c11b50] transition-all"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/lucas-catroppa-piratininga-dias-8a8641265/"
              target="_blank"
              rel="noreferrer"
              className="text-white text-3xl hover:text-[#c11b50] transition-all">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
        <div className="border-b border-neutral-900 pb-20">
            <div className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <p className="my-4">{CONTACT.email}</p>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-36">
        <div className="p-10 lg:p-8 md:p-20">
          <h1 className="font-krona font-semibold text-white text-2xl md:text-3xl mb-5">
            Entre em contato! 👇
          </h1>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <label className="text-lg font-montserrat text-white font-medium">
              Nome
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full p-2 px-3 border font-montserrat font-medium border-white rounded-md focus:ring-2 focus:ring-fiap outline-none"
            />
            <label className="text-lg font-montserrat font-medium text-white">
              E-mail
            </label>
            <input
              type="email"
              name="user_email"
              className="w-full p-2 px-3 border font-medium border-white rounded-md focus:ring-2 focus:ring-fiap outline-none"
            />
            <label className="text-lg font-montserrat font-medium text-white">
              Mensagem
            </label>
            <textarea
              name="message"
              className="font-montserrat font-medium w-full p-2 px-3 border border-white rounded-md focus:ring-2 focus:ring-fiap outline-none h-36 resize-none"
            />
            <input
              type="submit"
              value="Enviar"
              className="font-krona w-full p-3 mt-4 bg-fiap text-white rounded-md cursor-pointer hover:bg-black transition-all duration-200 hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-black"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;