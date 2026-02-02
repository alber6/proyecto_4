const data = {
  name: "Peter Parker",
  address: "123 Main Street, New York, NY",
  email: "peter.parker@email.com",
  avatar: "/images/cara.avif",
  aboutMe:
    "I'm a passionate web development student currently finishing my first year of a master degree. This portfolio is a showcase of the projects and skills I’ve been developing during my studies. My goal is to continue growing as a web developer, taking on new challenges and applying creative solutions. I invite you to explore the projects I’ve worked on so far.",

  education: [{
    degree: "Professional Python Course",
    university: "AEPI. Spanish Association of Computer Programmers",
    graduationYear: 2024,
    Courses: ""
  }, {
    degree: "Higher Technician in Web Application Development",
    university: "ThePower Education",
    graduationYear: 2024,
    Courses: "Studying second year"
  }, {
    degree: "Master's Degree in Web Application Development",
    university: "ThePower Education",
    graduationYear: 2024,
    Courses: "Studying second year"
  },{
    degree: "Tech Certifications",
    university: "ThePower Education",
    graduationYear: "in progress",
    Courses: "Studying Microsoft Azure"
  },
  {
    degree: "Course Javascript",
    university: "Linkedin learning",
    graduationYear: "in progress",
    Courses: ""
  },
  {
    degree: "Course React",
    university: "Linkedin learning",
    graduationYear: "in progress",
    Courses: ""
  },
],
  workExperience: [
    {
    position: "Web Development Student",
    company: "Self-Learning & Courses",
    startDate: "2024",
    endDate: "Present",
    description:
      "Intensive training in full-stack web development. Working on real-world projects, learning industry best practices, and building a portfolio of applications.",
  },
    {
    position: "Aspiring Full Stack Developer",
    company: "Independent Study",
    startDate: "2024",
    endDate: "Present",
    description:
      "Actively building web applications and expanding technical expertise in JavaScript, React, Node.js, and database management. Completing hands-on projects to develop practical development skills.",
  },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Make",
    "n8n",
    "Express.js",
    // "Express.js",
    "MongoDB",
    // "RESTful API",
    "Git",
    // "Frontend and Backend Development",
  ],
projects: [
  {
    title: "Photos app",
    preview:"/images/photosApp.avif",
    description:"Interactive image search application using Unsplash API with dynamic filtering by name, colors, and orientation through JavaScript events.",
    linkVercel: "https://proyecto-3-iota.vercel.app/",
    linkGit: "https://github.com/alber6/proyecto_3"
  },
  {
    title: "My first portfolio",
    preview: "/images/myportfolio.avif",
    description: "Component-based portfolio built with Vite featuring dark/light theme toggle and smooth with several pages navigation.",
    linkVercel: "https://my-portfolio-bice-ten-73.vercel.app/",
    linkGit: "https://github.com/alber6/my-portfolio"
  },
  {
    title: "A.P.G",
    preview: "/images/apg.avif",
    description: "Enhanced portfolio with component architecture and AI chatbot integration (currently inactive - requires local n8n connection).",
    linkVercel: "https://apg-alpha.vercel.app/",
    linkGit: "https://github.com/alber6/APG"
  },
   {
    title: "Pokedex",
    preview: "/images/pokedex.png",
    description: "Interactive Pokémon card application with flip animations and dynamic type-based color styling using JavaScript events and API pokedex.",
    linkVercel: "https://pokedex-tawny-mu-97.vercel.app/",
    linkGit: "https://github.com/alber6/Pokedex"
  },
  {
    title: "Several Forms",
    preview: "/images/forms.png",
    description: "Multi-form application with Express.js backend for data persistence, featuring responsive and dynamic CSS design.",
    linkVercel: "https://forms-jade.vercel.app/",
    linkGit: "https://github.com/alber6/SeveralForms"
  },
   {
    title: "Aqua-Flow Plumbing",
    preview: "/images/aquaFlow.png",
    description: "Responsive landing page featuring a dynamic quote form integrated with Make and Gmail for real-time lead automation and urgency filtering.",
    linkVercel: "https://aqua-flow-plumbing.vercel.app/",
    linkGit: "https://github.com/alber6/AquaFlowPlumbing"
  },
     {
    title: "Gestión de usarios",
    preview: "/images/BackendArchi.png",
    description: "Secure Node.js & MongoDB API with RBAC and automated Cloudinary image sync.",
    linkGit: "https://github.com/alber6/Backend.git"
  },
     {
    title: "Sueños Valentí - Servidor",
    preview: "/images/SueServer.png",
    description: "Node.js & Express web app featuring authentication, session-based cart, and JSON data persistence.",
    linkVercel: "https://sue-valenti-server.vercel.app/",
    linkGit: "https://github.com/alber6/SueValenti-Server.git"
  },
       {
    title: "QuantumLeap",
    preview: "/images/quantumLeap.png",
    description: "Futuristic visual showcase demonstrating the power of modern CSS through neon aesthetics, fluid animations, and responsive design principles.",
    linkVercel: "https://quantum-leap-tau.vercel.app/",
    linkGit: "https://github.com/alber6/QuantumLeap.git"
  }
],
};

export default data;

