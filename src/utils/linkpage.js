export const linkPage = (id) => {
    const l = document.querySelector(id);
    l.addEventListener("click", () => l.scrollIntoView({behaviour: "smooth"}));
  };
