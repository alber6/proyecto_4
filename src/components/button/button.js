import "./button.css"

export const Button = (id, texto, bgColor) => {  
  return `<button id="${id}" style="background-color: ${bgColor}">${texto}</button>`;
};

export const ButtonListeners = () => {
  const btnEducation = document.getElementById("btnEducation");
  const infoEducation = document.getElementById("education");

  if (btnEducation && infoEducation) {
    btnEducation.addEventListener("click", () => {
      infoEducation.classList.toggle('hidden');
      //Cambiar el texto del botón
      if (infoEducation.classList.contains('hidden')) {
        btnEducation.textContent = "Show Education";
      } else {
        btnEducation.textContent = "Hide Education";
      }
    });
  }

  const btnExperience = document.getElementById("btnExperience");
  const infoExperience = document.getElementById("experience");

  if (btnExperience && infoExperience) {
    btnExperience.addEventListener("click", () => {
        infoExperience.classList.toggle("hidden");
        if (infoExperience.classList.contains("hidden")){
            btnExperience.textContent = "Show Experience"
        } else {
            btnExperience.textContent = "Hide Experience"
        }
    });
  }
};
