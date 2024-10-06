import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
          <div className="flex justify-center mt-4">
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
          </div>
        </div>
      </footer>
    );
  };

export default Footer;