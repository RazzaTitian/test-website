const tools = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Three.js",
  "WebGL",
  "Figma",
  "Design Tokens",
  "GraphQL",
  "CI/CD",
  "Playwright",
  "Rust",
];

const services = [
  {
    title: "Product Engineering",
    text: "Build resilient, scalable web products with strong architecture and maintainability.",
  },
  {
    title: "Design Systems",
    text: "Create token-driven, accessible systems that accelerate teams and increase consistency.",
  },
  {
    title: "AI Product UX",
    text: "Shape trustworthy AI workflows with human-centered interactions and safeguards.",
  },
  {
    title: "Performance Audits",
    text: "Find and fix bottlenecks across rendering, loading, and runtime user experience.",
  },
];

const testimonials = [
  {
    quote:
      "Nova transformed our messy product into a delightful, high-performance experience in weeks.",
    author: "Elena M.",
    role: "VP Product, Orbit Labs",
  },
  {
    quote:
      "The combination of technical depth and UX polish was unlike anyone else we've worked with.",
    author: "Jordan C.",
    role: "Head of Engineering, PixelFoundry",
  },
  {
    quote:
      "From strategy to execution, every decision was clear, data-backed, and beautifully implemented.",
    author: "Aarav P.",
    role: "Founder, Helio Commerce",
  },
];

const projects = [
  {
    title: "Aurora Commerce OS",
    category: "Web",
    description:
      "Composable commerce suite with realtime personalization and resilient checkout.",
    tags: ["React", "Node", "GraphQL", "Performance"],
    impact: 95,
    link: "https://example.com/aurora",
  },
  {
    title: "Helix AI Workbench",
    category: "AI",
    description:
      "Enterprise prompt-flow platform with multimodal evaluation and guardrails.",
    tags: ["Python", "LLM", "UX", "Observability"],
    impact: 93,
    link: "https://example.com/helix",
  },
  {
    title: "Pulse Design System",
    category: "Design",
    description:
      "Cross-platform system powering consistent UX across 40+ product surfaces.",
    tags: ["Figma", "Tokens", "Accessibility", "Storybook"],
    impact: 90,
    link: "https://example.com/pulse",
  },
  {
    title: "Orbit Ops Console",
    category: "Web",
    description:
      "Mission-control dashboard for distributed operations and anomaly detection.",
    tags: ["Next.js", "Realtime", "Maps", "Data Viz"],
    impact: 89,
    link: "https://example.com/orbit",
  },
  {
    title: "Lumen Learning Engine",
    category: "AI",
    description:
      "Adaptive learning environment with reinforcement-driven path optimization.",
    tags: ["AI", "Experimentation", "Data", "Mobile"],
    impact: 92,
    link: "https://example.com/lumen",
  },
  {
    title: "Prism Brand Portal",
    category: "Design",
    description:
      "Living styleguide with motion specs, semantic color systems, and governance.",
    tags: ["Brand", "Motion", "WCAG", "DesignOps"],
    impact: 87,
    link: "https://example.com/prism",
  },
];

const milestones = [
  {
    year: "2016",
    text: "Started crafting interfaces and contributing to open-source UI kits.",
  },
  {
    year: "2019",
    text: "Led first design system adoption across multi-product organization.",
  },
  {
    year: "2021",
    text: "Shipped AI-assisted features to production for high-scale customer workflows.",
  },
  {
    year: "2023",
    text: "Built reliability playbooks cutting incident recovery time by 63%.",
  },
  {
    year: "2025",
    text: "Designed interactive web experiences combining motion, data, and narrative.",
  },
];

const skillData = [
  { label: "Frontend", value: 96 },
  { label: "Backend", value: 88 },
  { label: "UX", value: 92 },
  { label: "DevOps", value: 81 },
  { label: "AI", value: 86 },
  { label: "Leadership", value: 90 },
];

const commandItems = [
  { label: "Go to Home", action: () => jumpTo("hero") },
  { label: "Go to Services", action: () => jumpTo("services") },
  { label: "Go to Projects", action: () => jumpTo("projects") },
  { label: "Go to Contact", action: () => jumpTo("contact") },
  { label: "Toggle Theme", action: () => themeToggle.click() },
  { label: "Open Resume (placeholder)", action: () => showToast("Attach your resume link here.") },
];

const state = {
  filter: "All",
  query: "",
  theme: localStorage.getItem("theme") || "dark",
  sort: "featured",
  testimonial: 0,
};

const cursorDot = document.getElementById("cursor-dot");
const cursorRing = document.getElementById("cursor-ring");
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");
const projectGrid = document.getElementById("project-grid");
const projectFilters = document.getElementById("project-filters");
const projectSearch = document.getElementById("project-search");
const projectSort = document.getElementById("project-sort");
const timelineTrack = document.getElementById("timeline-track");
const toolbox = document.getElementById("toolbox");
const serviceGrid = document.getElementById("service-grid");
const themeToggle = document.getElementById("theme-toggle");
const commandToggle = document.getElementById("command-toggle");
const progress = document.getElementById("scroll-progress");
const toast = document.getElementById("toast");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImpact = document.getElementById("modal-impact");
const modalTags = document.getElementById("modal-tags");
const modalLink = document.getElementById("modal-link");
const modalClose = document.getElementById("modal-close");
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const typingLine = document.getElementById("typing-line");
const quoteEl = document.getElementById("testimonial-quote");
const authorEl = document.getElementById("testimonial-author");
const roleEl = document.getElementById("testimonial-role");
const prevTestimonial = document.getElementById("testimonial-prev");
const nextTestimonial = document.getElementById("testimonial-next");
const commandPalette = document.getElementById("command-palette");
const commandClose = document.getElementById("command-close");
const commandInput = document.getElementById("command-input");
const commandResults = document.getElementById("command-results");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1900);
}

function jumpTo(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  if (commandPalette.open) commandPalette.close();
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.18 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-count]");
  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 50));

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      counter.textContent = String(current);
    }, 20);
  });
}

function initTypingLine() {
  const phrases = [
    "Shipping delightful interfaces at startup speed.",
    "Designing systems teams actually love to use.",
    "Blending product strategy, code, and motion.",
  ];
  let phraseIndex = 0;
  let charIndex = 0;

  function tick() {
    const text = phrases[phraseIndex];
    typingLine.textContent = text.slice(0, charIndex);
    charIndex += 1;

    if (charIndex > text.length + 6) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      charIndex = 0;
    }
  }

  tick();
  setInterval(tick, 80);
}

function initTheme() {
  if (state.theme === "light") {
    document.documentElement.classList.add("light");
    themeToggle.textContent = "🌙";
  }

  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    const isLight = document.documentElement.classList.contains("light");
    themeToggle.textContent = isLight ? "🌙" : "☀️";
    state.theme = isLight ? "light" : "dark";
    localStorage.setItem("theme", state.theme);
    showToast(`${isLight ? "Light" : "Dark"} theme enabled`);
  });
}

function initCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  window.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    cursorDot.style.left = `${clientX}px`;
    cursorDot.style.top = `${clientY}px`;
    cursorRing.style.left = `${clientX}px`;
    cursorRing.style.top = `${clientY}px`;
  });

  document.querySelectorAll("a,button,.project").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorRing.style.transform = "translate(-50%, -50%) scale(1.6)";
    });
    el.addEventListener("mouseleave", () => {
      cursorRing.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });
}

function initProgressBar() {
  window.addEventListener("scroll", () => {
    const top = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${(top / height) * 100}%`;
  });
}

function initActiveNav() {
  const links = [...document.querySelectorAll("#nav-list a")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((section) => observer.observe(section));
}

function renderServices() {
  serviceGrid.innerHTML = "";
  services.forEach((service) => {
    const card = document.createElement("article");
    card.className = "card reveal visible";
    card.innerHTML = `<h3>${service.title}</h3><p>${service.text}</p>`;
    serviceGrid.appendChild(card);
  });
}

function renderToolbox() {
  toolbox.innerHTML = "";
  tools.forEach((tool) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = tool;
    toolbox.appendChild(chip);
  });
}

function categories() {
  return ["All", ...new Set(projects.map((project) => project.category))];
}

function renderFilters() {
  projectFilters.innerHTML = "";
  categories().forEach((category) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `chip ${state.filter === category ? "active" : ""}`;
    chip.textContent = category;
    chip.addEventListener("click", () => {
      state.filter = category;
      renderFilters();
      renderProjects();
    });
    projectFilters.appendChild(chip);
  });
}

function openProject(project) {
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalImpact.textContent = `Impact score: ${project.impact}/100`;
  modalTags.innerHTML = "";
  project.tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.className = "chip";
    tagEl.textContent = tag;
    modalTags.appendChild(tagEl);
  });
  modalLink.href = project.link;
  modal.showModal();
}

function sortProjects(list) {
  if (state.sort === "az") {
    return [...list].sort((a, b) => a.title.localeCompare(b.title));
  }
  if (state.sort === "impact") {
    return [...list].sort((a, b) => b.impact - a.impact);
  }
  return list;
}

function renderProjects() {
  const query = state.query.toLowerCase();
  const filtered = projects.filter((project) => {
    const matchesCategory = state.filter === "All" || project.category === state.filter;
    const text = `${project.title} ${project.description} ${project.tags.join(" ")}`.toLowerCase();
    return matchesCategory && text.includes(query);
  });

  const list = sortProjects(filtered);
  projectGrid.innerHTML = "";

  list.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project reveal visible";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p>Impact score: <strong>${project.impact}</strong></p>
      <div class="chip-wrap">
        ${project.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
      </div>
    `;
    card.addEventListener("click", () => openProject(project));
    projectGrid.appendChild(card);
  });
}

function initProjectControls() {
  projectSearch.addEventListener("input", (event) => {
    state.query = event.target.value || "";
    renderProjects();
  });

  projectSort.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderProjects();
  });
}

function renderTimeline() {
  timelineTrack.innerHTML = "";
  milestones.forEach((milestone) => {
    const entry = document.createElement("article");
    entry.className = "milestone card reveal visible";
    entry.innerHTML = `<h3>${milestone.year}</h3><p>${milestone.text}</p>`;
    timelineTrack.appendChild(entry);
  });
}

function drawSkillRadar() {
  const canvas = document.getElementById("skill-canvas");
  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 160;
  const points = skillData.length;
  const angleStep = (Math.PI * 2) / points;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let layer = 1; layer <= 5; layer += 1) {
    ctx.beginPath();
    for (let i = 0; i < points; i += 1) {
      const angle = -Math.PI / 2 + i * angleStep;
      const r = (radius / 5) * layer;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = "rgba(127, 107, 255, 0.22)";
    ctx.stroke();
  }

  skillData.forEach((skill, i) => {
    const angle = -Math.PI / 2 + i * angleStep;
    const axisX = centerX + Math.cos(angle) * radius;
    const axisY = centerY + Math.sin(angle) * radius;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(axisX, axisY);
    ctx.strokeStyle = "rgba(99, 245, 255, 0.35)";
    ctx.stroke();

    ctx.fillStyle = "rgba(236, 241, 255, 0.9)";
    ctx.font = "14px Inter";
    ctx.fillText(skill.label, centerX + Math.cos(angle) * (radius + 12) - 25, centerY + Math.sin(angle) * (radius + 12));
  });

  ctx.beginPath();
  skillData.forEach((skill, i) => {
    const angle = -Math.PI / 2 + i * angleStep;
    const valueRadius = (skill.value / 100) * radius;
    const x = centerX + Math.cos(angle) * valueRadius;
    const y = centerY + Math.sin(angle) * valueRadius;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(99, 245, 255, 0.3)";
  ctx.strokeStyle = "rgba(99, 245, 255, 0.95)";
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();
}

function renderTestimonial() {
  const current = testimonials[state.testimonial];
  quoteEl.textContent = `“${current.quote}”`;
  authorEl.textContent = current.author;
  roleEl.textContent = current.role;
}

function initTestimonials() {
  renderTestimonial();
  prevTestimonial.addEventListener("click", () => {
    state.testimonial = (state.testimonial - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
  });
  nextTestimonial.addEventListener("click", () => {
    state.testimonial = (state.testimonial + 1) % testimonials.length;
    renderTestimonial();
  });

  setInterval(() => {
    state.testimonial = (state.testimonial + 1) % testimonials.length;
    renderTestimonial();
  }, 6500);
}

function initContactForm() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const payload = new FormData(form);
    const name = String(payload.get("name") || "").trim();
    const email = String(payload.get("email") || "").trim();
    const message = String(payload.get("message") || "").trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please complete every field.";
      return;
    }

    formStatus.textContent = `Thanks ${name}! Your message has been captured locally for this demo.`;
    showToast("Message captured locally");
    form.reset();
  });
}

function initModal() {
  modalClose.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
    const outside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;
    if (outside) modal.close();
  });
}

function initCommandPalette() {
  function renderCommands(query = "") {
    const q = query.toLowerCase().trim();
    const items = commandItems.filter((item) => item.label.toLowerCase().includes(q));
    commandResults.innerHTML = "";
    items.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ghost command-result";
      button.textContent = item.label;
      button.addEventListener("click", item.action);
      commandResults.appendChild(button);
    });
  }

  function openPalette() {
    renderCommands();
    commandPalette.showModal();
    commandInput.value = "";
    commandInput.focus();
  }

  commandToggle.addEventListener("click", openPalette);
  commandClose.addEventListener("click", () => commandPalette.close());
  commandInput.addEventListener("input", (event) => renderCommands(event.target.value));

  window.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openPalette();
    }
  });
}

function initMobileNav() {
  navToggle.addEventListener("click", () => navList.classList.toggle("open"));
  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navList.classList.remove("open"));
  });
}

function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  const particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticles(count = 70) {
    particles.length = 0;
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: rand(0, canvas.width),
        y: rand(0, canvas.height),
        r: rand(1, 2.8),
        vx: rand(-0.35, 0.35),
        vy: rand(-0.35, 0.35),
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(99,245,255,0.45)";
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(127,107,255,${1 - d / 120})`;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  resize();
  createParticles();
  animate();
  window.addEventListener("resize", () => {
    resize();
    createParticles();
    drawSkillRadar();
  });
}

function initYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

function init() {
  revealOnScroll();
  animateCounters();
  initTheme();
  initTypingLine();
  initCursor();
  initProgressBar();
  initActiveNav();
  renderServices();
  renderToolbox();
  renderFilters();
  renderProjects();
  initProjectControls();
  renderTimeline();
  drawSkillRadar();
  initTestimonials();
  initContactForm();
  initModal();
  initCommandPalette();
  initMobileNav();
  initBackgroundCanvas();
  initYear();
}

init();
