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
    name: "CV",
    path: "/cv/cv.html",
  },

];

const Header = () =>
    `
      <h1>Alberto Peinado</h1>
      ${Nav(links)}
    `

export default Header;
