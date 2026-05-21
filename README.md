# 🚀 Bootstrap Responsive Portfolio Template

[![GitHub License](https://img.shields.io/github/license/EgeSoysal/bootstrap-portfolio-template?style=flat-square&color=orange)](LICENSE)
[![Bootstrap Version](https://img.shields.io/badge/Bootstrap-v5.3.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-blue?style=flat-square)](#-tech-stack)

A modern, clean, and fully responsive personal portfolio website template. Built using **Bootstrap 5** grid systems and components, it is finely optimized for software developers, digital creators, and photographers. It features full Dark/Light mode integration and custom JavaScript-driven credential preview modals.

---

## ✨ Features

* **🌓 Dynamic Dark / Light Mode:** Smooth theme toggling that adapts to user preference instantly with custom CSS variables.
* **📱 100% Responsive Design:** Flawless layout consistency across smartphones, tablets, and wide desktop screens powered by Bootstrap 5.
* **📷 Integrated Photography Gallery:** A beautifully structured minimal grid layout tailored to showcase photography portfolios (Portraits, Spaces, etc.).
* **📜 Certificate & Credentials Showcase:** A clean, grid-based layout equipped with standalone JavaScript lightbox triggers for 5 flexible certificate slots.
* **⚡ Lightweight & Optimized:** Crafted using vanilla CSS/JS and official Bootstrap bundles instead of heavy external dependencies to ensure fast loading speeds.

---

## 🗂️ Project Structure

```text
bootstrap-portfolio-template/
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── style.css            # Custom style overrides (Orange brand accent colors)
│   ├── images/                  # Core assets, logo files, and portfolio visuals
│   └── js/
│       └── main.js              # Theme logic & interface interactions
├── index.html                   # Home Page (Landing & Introduction)
├── about.html                   # About Page (Vision, Background, & Experience)
├── skills.html                  # Skills Page & 5 Certificate Modals
├── projects.html                # Software Engineering Projects Portfolio
├── photography.html             # Professional Photography Portfolio
├── blog.html                    # Technical & Creative Blog Layouts
└── contact.html                 # Contact Form & Categorized Social Network Anchors

git add . 
git commit -m "Initial commit"
git push origin main
git tag -a v1.0.0 -m "v1.0.0 sürümü" (Etiketi oluşturur - -m kullanırken -a eklemek daha sağlıklıdır)
git push origin main
git push origin v1.1.0