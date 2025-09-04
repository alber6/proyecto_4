import './style.css'
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { Footer } from './components/footer/footer';

const header = document.createElement("header");
header.innerHTML = Header();
// con el prepend inserte el elemento header como el primer hijo del elemento donde le llamas, es decir, desde el document.body
document.body.prepend(header);

const footer = document.createElement("footer")
footer.innerHTML = Footer();
document.body.append(footer);

document.addEventListener("DOMContentLoaded", () => {
  Main();
});






