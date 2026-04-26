import './Header.css';
import Nav from '../Nav/Nav';


const links = [
  {
    name: "About Me",
    path: "#aboutme",
  },
  {
    name: "Education",
    path: "#button",
  },
  {
    name: "Experience",
    path: "#button",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "C.V.  ",
    path: "/public/cv/CV_Alberto_Peinado_WebDev.pdf",
  },

];

const Header = () =>
    `
      <h1>Alberto Peinado</h1>
      ${Nav(links)}
    `

export default Header;
