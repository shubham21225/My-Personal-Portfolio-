// // Sample project data
// const projects = [
//   {
//     id: 1,
//     title: "Weather App",
//     image: "piece.jpg",
//     description: "Real-time weather application with 5-day forecast",
//     technologies: ["JavaScript", "API", "CSS"],
//     demoUrl: "https://weatherapp.example.com",
//     codeUrl: "https://github.com/username/weather-app"
//   },
//   {
//     id: 2,
//     title: "Task Manager",
//     image: "taskmanager.jpg",
//     description: "Productivity app for organizing daily tasks",
//     technologies: ["React", "Node.js", "MongoDB"],
//     demoUrl: "https://taskmanager.example.com",
//     codeUrl: "https://github.com/username/task-manager"
//   }
// ];

// // Get the template and container
// const template = document.getElementById('project-template');
// const container = document.getElementById('projects-container');

// // Function to render projects
// function renderProjects() {
//   projects.forEach(project => {
//     // Clone the template content
//     const clone = template.content.cloneNode(true);
    
//     // Fill in the data
//     const card = clone.querySelector('.project-card');
//     card.querySelector('.project-image').src = project.image;
//     card.querySelector('.project-image').alt = project.title;
//     card.querySelector('.project-title').textContent = project.title;
//     card.querySelector('.project-description').textContent = project.description;
    
//     // Add technologies
//     const techContainer = clone.querySelector('.project-tech');
//     project.technologies.forEach(tech => {
//       const span = document.createElement('span');
//       span.className = 'tech-tag';
//       span.textContent = tech;
//       techContainer.appendChild(span);
//     });
    
//     // Add links
//     clone.querySelector('.demo-link').href = project.demoUrl;
//     clone.querySelector('.code-link').href = project.codeUrl;
    
//     // Append to container
//     container.appendChild(clone);
//   });
// }

// // Call the function when page loads
// document.addEventListener('DOMContentLoaded', renderProjects);