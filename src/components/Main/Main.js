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

const Education = () =>{
  return `
  <h1>EDUCATION</h1>
  <p>${data.education.relevantCourses}<p/>
  <p>${data.education.degree}</p>
  `
};

const Experience = () =>{
  return `
      <h1>EXPERIENCE</h1>
      ${data.workExperience.map((d) => `
        <h2>${d.position}</h2>
        <h3>${d.company}</h3>
        <p>${d.startDate}${d.endDate}</p>
        <p>${d.description}</p>
      `).join("")}
  `
};

export const Projects = () =>{
  return `
  <div id="gallery">
  ${data.projects.map((p) =>
    `<div>
      <h1>${p.title}</h1>
      <img src="${p.preview}" alt="My projects"/>
      <p>${p.description}</p>
      <a href=${p.link} target="_blank">
      <img src="public/images/vercel-dark.png" alt="Link icon" />
      </a>
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

  // explicar para que sirve
  setTimeout(() => {
    window.scrollTo(0, 0);
    changeTheme();
    ButtonListeners();
  }, 50);
};


export default Main;