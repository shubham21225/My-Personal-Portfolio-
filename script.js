
  const projects = [
    {
      title: "AI Image Generator",
      imgSrc: "aiImage.png",
      alt: "AI Image Generator",
      desc: "A web app that generates images using AI prompts. Built using HTML, CSS, and JS.",
      link: "https://shubh-image-generate.netlify.app/"
    },
    {
      title: "Vdemy Clone",
      imgSrc: "Screenshot 2025-06-15 154435.png",
      alt: "Vdemy Clone",
      desc: "An online course platform UI clone made with HTML and CSS.",
      link: "https://vdemy-clone.netlify.app/"
    },
    {
      title: "Graphic Designer Portfolio",
      imgSrc: "portoli.png",
      alt: "Graphic Designer Portfolio",
      desc: "A modern portfolio website for showcasing graphic design work.",
      link: "https://shubh-dev-portfolio.netlify.app/"
    },
    {
      title: "Simple To-Do List",
      imgSrc: "to-do.png",
      alt: "To-Do List",
      desc: "A basic to-do list app built with JavaScript to manage tasks.",
      link: "https://shubh-to-do.netlify.app/"
    },
    {
      title: "Marketing Agency",
      imgSrc: "Marketing.png",
      alt: "Marketing Agency Website",
      desc: "A clean landing page for a fictional marketing agency.",
      link: "https://shubh-agency.netlify.app/"
    }
  ];

  const template = document.getElementById('project-card-template');
  const projectList = document.getElementById('projectList');

  projects.forEach(project => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('img').src = project.imgSrc;
    clone.querySelector('img').alt = project.alt;
    clone.querySelector('h3').textContent = project.title;
    clone.querySelector('p').textContent = project.desc;
    clone.querySelector('a').href = project.link;

    projectList.appendChild(clone);
  });

