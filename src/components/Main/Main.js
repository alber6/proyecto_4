import './Main.css';
import data from '../../data/data';
import { changeTheme } from '../Nav/Nav';
import { Button } from '../button/button';
import { ButtonListeners } from '../button/button';

const AboutMe = () =>{
  return `
  <h1>ABOUT ME</h1>
  <div>
    <p>${data.aboutMe}</p>
    <img src="${data.avatar}" alt="My avatar"/>
    <ul>
      ${data.skills.map(skill => `<li>${skill}</li>`).join("")}
    </ul>
  </div>
  `
};

const ChangeImg = () => {
  const img = document.querySelector("img");
  
  img.addEventListener("click", () => {
    img.classList.add("flipping");
    
    // Cambiar la imagen en el momento exacto de la media vuelta
    setTimeout(() => {
      if(img.src.includes("jedi.avif")){
        img.src = data.avatar;
      } else {
        img.src = "/images/jedi.avif";
      }
    }, 600); // el tiempo que tarde en el cambio de foto 
    
    // Quitar la clase después de completar la animación
    setTimeout(() => {
      img.classList.remove("flipping");
    }, 600); // Tiempo total de tu transición
  });
};
const Education = () =>{
  return `
  <h1>EDUCATION</h1>
    ${data.education.map((d) => `
      <h3>${d.degree} - ${d.university}</h3>
      <p>${d.graduationYear}</p>
      <p>${d.Courses}</p>
    `).join("")}
  `
};

const Experience = () =>{
  return `
      <h1>EXPERIENCE</h1>
      ${data.workExperience.map((d) => `
        <h3>${d.position} - ${d.company}</h3>
        <p>${d.startDate} -- ${d.endDate}</p>
        <p>${d.description}</p>
      `).join("")}
  `
};

export const Projects = () =>{
  return `
  <div id="gallery">
  ${data.projects.map((p) =>
    `<div id="project-card">
      <h1>${p.title}</h1>
      <img src="${p.preview}" alt="My projects"/>
      <p>${p.description}</p>
      <div id="link">
      <a href=${p.linkVercel} target="_blank">
      <img src="/images/vercel-dark.avif" alt="Link vercel" />
      </a>
      <a href=${p.linkGit} target="_blank">
      <img src="/images/github.avif" alt="Link github" />
       </a>
       </div>
    </div>
      `).join("")}
    </div>
   `
};

const Main = () =>{
  const div = document.querySelector("#app");
  div.innerHTML = `
  <section id="aboutme">
  ${AboutMe()}
  </section>
  <section id="button">
  ${Button("btnEducation", "Show education", "")}
  ${Button("btnExperience", "Show experience", "")}
  </section>
  <section id="education" class="hidden">
  ${Education()}
  </section>
  <section id="experience" class="hidden">
  ${Experience()}
  </section>
  <section id="projects">
  <h1>PROJECTS</h1>
  ${Projects()}
  </section>`

  // setTimeout(..., 50) espera esos milisegundos antes de ejecutar el código, respiro al navegador y evita errores al cargar la página. Garantiza que se pinta todo el contenido para que despues de eso, vuelva al inicio de la pagina, aplica el tema y activa los eventos de los botones.
  setTimeout(() => {
    // window.scrollTo(0, 0); Asegura que cuando se cargue Main(), el usuario esté en la parte de arriba de la página.   
    window.scrollTo(0, 0);
    //changeTheme Se ejecuta después de que el contenido ya está en el DOM, así puede aplicar las clases o estilos correctamente.
    changeTheme();
    //funcion de los eventos de los botones, como fueron creados dinamicamente, hay que esperar a que existan antes de ponerles addEventListener
    ButtonListeners();
    ChangeImg();
  }, 50);
};


export default Main;