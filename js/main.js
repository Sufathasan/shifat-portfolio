const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const projectGrid = document.getElementById('project-grid');
const repoGrid = document.getElementById('repo-grid');
const searchInput = document.getElementById('project-search');
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const backToTop = document.querySelector('.back-to-top');
const scrollBar = document.querySelector('.scroll-progress');
const yearEl = document.getElementById('year');

const projectData = [
  {
    name: 'E-Commerce Website',
    type: 'Full Stack',
    period: 'February 2025 – July 2025',
    overview: 'Full-stack e-commerce web application built for browsing products, secure checkout flow, and order management.',
    problem: 'Create a practical online shopping platform with authentication, product browsing, and order handling for a modern storefront.',
    features: [
      'User authentication',
      'Secure payment gateway integration',
      'Inventory management',
      'Order management',
      'Responsive mobile and desktop layout',
      'Performance-oriented frontend and API design'
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    repo: null,
    live: null,
    team: 'Personal project',
    previewClass: 'default',
    image: 'assets/images/projects/ecommerce-store.svg',
    imageAlt: 'Illustrated storefront preview with product cards and a shopping bag',
    details: 'This project is represented as a full-stack e-commerce platform based on the CV documentation, but no public repository URL was clearly verified for the live website version. The description is kept to the documented functionality rather than claiming a repository or deployment that could not be confirmed.'
  },
  {
    name: 'Health Is Wealth',
    type: 'Full Stack',
    period: 'September 2024 – January 2025',
    overview: 'Healthcare-focused web application for users to review health information, manage prescriptions, and interact with a responsive patient portal.',
    problem: 'Provide a healthcare platform with disease information, prescription management, and essential patient-facing features in a user-friendly interface.',
    features: [
      'Healthcare platform with prescription management',
      'Disease information',
      'User authentication',
      'Image uploads using Cloudinary',
      'RESTful API-based architecture',
      'Responsive interface'
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
    repo: 'https://github.com/Sufathasan/health_is_wealth',
    live: null,
    team: 'Team project',
    previewClass: 'data',
    image: 'assets/images/projects/health-is-wealth.svg',
    imageAlt: 'Illustrated healthcare dashboard with a medical cross and health metrics',
    details: 'This is a team project and a fork of a shared healthcare app. The available repository structure shows server and client folders, which supports the documented healthcare and prescription workflow. Cloudinary is used for image handling, and the project is clearly presented as a frontend-backend application rather than a solo-built system.'
  },
  {
    name: 'E-Commerce Mobile App',
    type: 'Mobile',
    period: 'November 2023 – February 2024',
    overview: 'Cross-platform mobile shopping application with product browsing, cart flow, and checkout experience.',
    problem: 'Build a mobile-first e-commerce experience for browsing products, managing purchases, and handling authentication on both Android and iOS.',
    features: [
      'Product listings',
      'Shopping cart',
      'Checkout',
      'User authentication',
      'Responsive user interface',
      'Smooth navigation',
      'Real-time data handling'
    ],
    stack: ['Flutter', 'Dart'],
    repo: 'https://github.com/Sufathasan/ecommarce-app-dart',
    live: null,
    team: 'Personal project',
    previewClass: 'mobile',
    image: 'assets/images/projects/ecommerce-mobile.svg',
    imageAlt: 'Illustrated mobile shopping app screen with product tiles and a cart',
    details: 'This mobile app is distinct from the web-based e-commerce project and is documented as a Flutter and Dart application. The repository description highlights a shopping experience with secure transactions and a polished interface, which aligns with the project’s listed mobile shopping requirements.'
  },
  {
    name: 'Tank Battle Game',
    type: 'C++',
    period: 'February 2023 – August 2023',
    overview: 'A 2D tank battle game built in C++ with competitive gameplay loop and a simple battlefield UI.',
    problem: 'Explore game development by creating a playable tank shooter that includes movement, shooting, collisions, and score tracking.',
    features: [
      'Shooting mechanics',
      'Collision handling',
      'Scoring system',
      'Game logic and UI development'
    ],
    stack: ['C++'],
    repo: 'https://github.com/Sufathasan/TANK-GAME-',
    live: null,
    team: 'Team project',
    previewClass: 'game',
    image: 'assets/images/projects/tank-battle.svg',
    imageAlt: 'Illustrated top-down tank on a green battlefield',
    details: 'The repository and README describe a C++ 2D game project with a tank-based battlefield concept. The documented contribution is best framed as game logic and UI work, while avoiding unverified claims about networking or an architecture beyond what the repo demonstrates.'
  },
  {
    name: 'Calculator App',
    type: 'Frontend',
    period: 'June 2023',
    overview: 'Responsive calculator app with a clean interface and essential arithmetic operations.',
    problem: 'Build a simple calculator interface that supports everyday arithmetic in a responsive browser layout.',
    features: [
      'Responsive calculator interface',
      'Basic arithmetic operations',
      'Simple, accessible browser UI'
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    repo: null,
    live: null,
    team: 'Personal project',
    previewClass: 'default',
    image: 'assets/images/projects/calculator.svg',
    imageAlt: 'Illustrated calculator interface with arithmetic keys and a result display',
    details: 'This project is described as a simple calculator app built with HTML, CSS, and JavaScript. There was no clearly verified public repository tied to the specific calculator project, so the description stays limited to the CV-supported functionality rather than claiming a repository URL.'
  },
  {
    name: 'ToDo App',
    type: 'Backend',
    period: 'February 2023 – April 2023',
    overview: 'Task management app focused on creating, reading, updating, and deleting tasks with backend persistence.',
    problem: 'Create a practical task-tracking workflow with CRUD operations and basic authentication. The repository indicates a connected database-backed app.',
    features: [
      'CRUD operations for tasks',
      'Authentication',
      'Database-backed task storage',
      'Responsive interface'
    ],
    stack: ['React', 'Node.js', 'MongoDB'],
    repo: 'https://github.com/Sufathasan/TODO.database',
    live: null,
    team: 'Personal project',
    previewClass: 'data',
    image: 'assets/images/projects/todo-app.svg',
    imageAlt: 'Illustrated task board with a completed task and a weekly progress chart',
    details: 'The repo is titled “TO DO app with using database” and includes connection.js, index.js, and package.json files, which supports the description of a database-backed task management app. The description is intentionally limited to CRUD, authentication, and responsive task management without overstating collaboration or notifications.'
  },
  {
    name: 'Snake Game',
    type: 'C++',
    period: 'December 2022',
    overview: 'Classic Snake game implemented in C++ with a simple arcade loop and game layout.',
    problem: 'Develop a beginner-friendly arcade game to practice C++ logic, input handling, and game state updates.',
    features: [
      'Snake movement and gameplay loop',
      'C++ implementation',
      'Basic game state handling'
    ],
    stack: ['C++'],
    repo: 'https://github.com/Sufathasan/snakegame2020831014sifat',
    live: null,
    team: 'Personal project',
    previewClass: 'game',
    image: 'assets/images/projects/snake-game.svg',
    imageAlt: 'Illustrated retro snake game board with a green snake and food pixel',
    details: 'The repository identifies this as a C++ Snake game project and the development environment is recorded as Code::Blocks in the CV. The description remains grounded in the project’s verified type and architecture without inventing additional mechanics.'
  }
];

const repoData = [
  { name: 'Portfolio', url: 'https://github.com/Sufathasan/Portfolio', type: 'Frontend', summary: 'Repository for the current personal portfolio website and related static assets.', tags: ['HTML', 'CSS'] },
  { name: 'ecommarce-app-dart', url: 'https://github.com/Sufathasan/ecommarce-app-dart', type: 'Mobile', summary: 'Flutter and Dart e-commerce app for mobile shopping experiences.', tags: ['Flutter', 'Dart'] },
  { name: 'health_is_wealth', url: 'https://github.com/Sufathasan/health_is_wealth', type: 'Full Stack', summary: 'Healthcare-focused application with client and server folders and prescription workflows.', tags: ['React', 'Node.js', 'MongoDB'] },
  { name: 'TANK-GAME-', url: 'https://github.com/Sufathasan/TANK-GAME-', type: 'C++', summary: '2D tank game project built with C++, focusing on gameplay and interface logic.', tags: ['C++'] },
  { name: 'TODO.database', url: 'https://github.com/Sufathasan/TODO.database', type: 'Backend', summary: 'Database-backed to-do application built with JavaScript and server integration.', tags: ['JavaScript', 'MongoDB'] },
  { name: 'snakegame2020831014sifat', url: 'https://github.com/Sufathasan/snakegame2020831014sifat', type: 'C++', summary: 'Classic Snake game project created in C++, showcasing basic game logic and input handling.', tags: ['C++'] },
  { name: 'bank-management-system', url: 'https://github.com/Sufathasan/bank-management-system', type: 'Other', summary: 'Banking system project showing practical software logic and application structure.', tags: ['C++', 'Java', 'Python'] },
  { name: 'Nemurical-Analysis', url: 'https://github.com/Sufathasan/Nemurical-Analysis', type: 'Other', summary: 'Numerical analysis work implemented in MATLAB.', tags: ['MATLAB'] },
  { name: 'Data-Science', url: 'https://github.com/Sufathasan/Data-Science', type: 'Other', summary: 'Data science learning repository with notebooks and analysis projects.', tags: ['Python', 'Jupyter'] },
  { name: 'chat-application', url: 'https://github.com/Sufathasan/chat-application', type: 'Full Stack', summary: 'Simple chat application for communication between users.', tags: ['Java'] },
  { name: 'Pizza-topping', url: 'https://github.com/Sufathasan/Pizza-topping', type: 'Other', summary: 'Repository related to a pizza ordering feature or academic exercise.', tags: ['Java'] },
  { name: 'amar-rannaghor', url: 'https://github.com/Sufathasan/amar-rannaghor', type: 'Frontend', summary: 'Repository for a web project linked to a restaurant or food concept.', tags: ['HTML'] },
  { name: 'cafe', url: 'https://github.com/Sufathasan/cafe', type: 'Frontend', summary: 'Cafe-related project with TypeScript and web front-end implementation.', tags: ['TypeScript'] },
  { name: 'INS_lab_task', url: 'https://github.com/Sufathasan/INS_lab_task', type: 'Other', summary: 'Lab task repository for a networking or systems assignment.', tags: ['Python'] },
  { name: 'potato-disease-classification-main', url: 'https://github.com/Sufathasan/potato-disease-classification-main', type: 'Other', summary: 'Machine learning project focused on potato disease classification.', tags: ['Python', 'Jupyter'] },
  { name: 'CV-shifat', url: 'https://github.com/Sufathasan/CV-shifat', type: 'Other', summary: 'Repository containing CV-related material and profile resources.', tags: ['Jupyter', 'Python'] },
  { name: 'matrix-addition-matrix-subtraction-matrix-multiplication', url: 'https://github.com/Sufathasan/matrix-addition-matrix-subtraction-matrix-multiplication', type: 'Other', summary: 'Matrix computation and algorithm practice repository.', tags: ['C++'] }
];

let currentFilter = 'all';

function renderProjects() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = projectData.filter((project) => {
    const matchFilter = currentFilter === 'all' || project.type === currentFilter;
    const searchable = [project.name, project.overview, project.problem, project.stack.join(' '), project.team]
      .join(' ')
      .toLowerCase();
    const matchSearch = !query || searchable.includes(query);
    return matchFilter && matchSearch;
  });

  if (!filtered.length) {
    projectGrid.innerHTML = '<article class="project-card"><div class="project-body"><h3>No projects match</h3><p>Try a different keyword or filter.</p></div></article>';
    return;
  }

  projectGrid.innerHTML = filtered
    .map(
      (project) => `
        <article class="project-card">
          <div class="preview" data-theme="${project.previewClass}">
            <img src="${project.image}" alt="${project.imageAlt}" loading="lazy" />
          </div>
          <div class="project-body">
            <div class="project-header">
              <h3>${project.name}</h3>
              <span class="project-type">${project.type}</span>
            </div>
            <p>${project.overview}</p>
            <div class="project-tags">
              ${project.stack.map((tag) => `<span>${tag}</span>`).join('')}
            </div>
            <div class="project-actions">
              <button class="link-button primary" type="button" data-project="${project.name}">View details</button>
              ${project.repo ? `<a class="link-button" href="${project.repo}" target="_blank" rel="noreferrer">Repo</a>` : '<span class="link-button" aria-disabled="true">Repo not verified</span>'}
            </div>
          </div>
        </article>
      `
    )
    .join('');

  projectGrid.querySelectorAll('[data-project]').forEach((btn) => {
    btn.addEventListener('click', () => openProjectModal(btn.dataset.project));
  });
}

function renderRepos() {
  repoGrid.innerHTML = repoData
    .map(
      (item) => `
        <article class="repo-card">
          <div class="repo-body">
            <div class="repo-header">
              <h3>${item.name}</h3>
              <span class="repo-type">${item.type}</span>
            </div>
            <p>${item.summary}</p>
            <div class="repo-tags">
              ${item.tags.map((tag) => `<span>${tag}</span>`).join('')}
            </div>
            <div class="repo-actions">
              <a class="link-button primary" href="${item.url}" target="_blank" rel="noreferrer">Open repo</a>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function openProjectModal(name) {
  const project = projectData.find((item) => item.name === name);
  if (!project) return;

  modalContent.innerHTML = `
    <div class="modal-details">
      <div class="project-header">
        <h3 id="modal-title">${project.name}</h3>
        <span class="project-type">${project.type}</span>
      </div>
      <p><strong>Period:</strong> ${project.period}</p>
      <p><strong>Project type:</strong> ${project.team}</p>
      <p><strong>Overview:</strong> ${project.problem}</p>
      <p><strong>Use case:</strong> ${project.details}</p>
      <div class="project-tags">
        ${project.stack.map((tag) => `<span>${tag}</span>`).join('')}
      </div>
      <ul>
        ${project.features.map((feature) => `<li>${feature}</li>`).join('')}
      </ul>
      <div class="project-actions">
        ${project.repo ? `<a class="link-button primary" href="${project.repo}" target="_blank" rel="noreferrer">View repository</a>` : '<span class="link-button" aria-disabled="true">No verified repository link available</span>'}
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProjectModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = themeToggle.querySelector('.theme-icon');
  icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('portfolio-theme', theme);
}

function initializeTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme(theme);
}

function setActiveNav() {
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const offset = 130;
  let current = '#home';

  sections.forEach((section) => {
    const top = section.offsetTop - offset;
    const bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      current = '#' + section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === current;
    link.classList.toggle('active', isActive);
  });
}

function updateProgress() {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  scrollBar.style.width = `${percent}%`;

  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function setupEvents() {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
      currentFilter = button.dataset.filter;
      renderProjects();
    });
  });

  searchInput.addEventListener('input', renderProjects);

  modal.addEventListener('click', (event) => {
    if (event.target.dataset.close === 'true' || event.target === modal) {
      closeProjectModal();
    }
  });

  document.querySelector('.modal-close').addEventListener('click', closeProjectModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeProjectModal();
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    setActiveNav();
    updateProgress();
  });

  window.addEventListener('load', () => {
    setActiveNav();
    updateProgress();
  });
}

function initializePortfolio() {
  yearEl.textContent = new Date().getFullYear();
  initializeTheme();
  renderProjects();
  renderRepos();
  revealOnScroll();
  setupEvents();
  setActiveNav();
  updateProgress();
}

initializePortfolio();
