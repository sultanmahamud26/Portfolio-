/* =========================================================
   Nayeem — Portfolio Script
   Edit CONFIG below to update personal info & links quickly.
   ========================================================= */

const CONFIG = {
  name: "Nayeem",
  title: "Python Developer",
  secondaryTitle: "Telegram Bot Developer & Full-Stack Developer",
  email: "your.email@example.com",
  github: "https://github.com/sultanmahamud26",
  telegram: "https://t.me/your_telegram",
  facebook: "https://facebook.com/your_facebook",

  // Add / edit projects here — the grid below is also hand-written in
  // index.html as a no-JS fallback, so update both if you change these.
  projects: [
    {
      title: "Telegram Automation Bot",
      description: "A Python-based Telegram bot designed to automate tasks and provide a smooth, reliable user experience.",
      tech: ["Python", "Telegram Bot API", "SQLite", "API Integration"],
      github: "#",
      demo: "#"
    },
    {
      title: "Developer Dashboard",
      description: "A modern web dashboard for managing applications and automation systems from a single interface.",
      tech: ["Python", "HTML", "CSS", "JavaScript"],
      github: "#",
      demo: ""
    },
    {
      title: "API Automation System",
      description: "An automation system that connects different services together through APIs and webhooks.",
      tech: ["Python", "REST API", "JSON", "Webhooks"],
      github: "#",
      demo: ""
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initActiveSection();
  initScrollReveal();
  initBackToTop();
  initContactForm();
  initCvDownload();
});

/* ---------- Mobile nav toggle ---------- */
function initMobileNav(){
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Highlight active nav link on scroll ---------- */
function initActiveSection(){
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.toggle("active", link.dataset.section === id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

/* ---------- Scroll reveal animations ---------- */
function initScrollReveal(){
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced){
    revealEls.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
}

/* ---------- Back to top button ---------- */
function initBackToTop(){
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 600);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Contact form (frontend-only placeholder) ---------- */
function initContactForm(){
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()){
      status.textContent = "Please fill in every field before sending.";
      return;
    }

    // NOTE: no backend is connected yet. Replace this block with a
    // fetch() call to your API, form service (e.g. Formspree), or
    // serverless function to actually deliver messages.
    status.textContent = "Thanks! This form isn't connected to a backend yet — email me directly for now.";
    form.reset();
  });
}

/* ---------- Download CV placeholder ---------- */
function initCvDownload(){
  const link = document.getElementById("downloadCv");
  if (!link) return;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Add your CV file (e.g. assets/cv.pdf) and update the Download CV link's href in index.html.");
  });
}
