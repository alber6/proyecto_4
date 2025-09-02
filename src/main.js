import './style.css'
import Main from './components/Main/Main';
import Header from './components/Header/Header';

const header = document.createElement("header");
header.innerHTML = Header();
document.body.prepend(header);

document.addEventListener("DOMContentLoaded", () => {
  Main();
});






