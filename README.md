# ORBITO 🌌
### Interactive Isometric Solar System Visualization

**ORBITO** is a premium, cinematic web-based visualization of our solar system. Built with high-performance HTML5 Canvas and advanced CSS animations, it offers an immersive journey from a striking landing page to the depths of interplanetary space.

![Orbito Preview](https://via.placeholder.com/1200x600?text=ORBITO+Solar+System+Visualization)

---

## ✨ Features

- **Cinematic Entry**: A high-impact landing page featuring a massive, glowing **ORBITO** title with animated gradients and a typewriter introduction.
- **Isometric Projection**: A unique 2:1 isometric view of the solar system, providing a structural yet artistic diagram of planetary orbits.
- **Interactive Exploration**: 
    - Smooth "One-Scroll/One-Click" transition from landing to space.
    - Hover over planets to reveal tooltips and highlight their orbits.
    - Drag to pan the camera and explore the vastness of the system.
- **Deep-Dive Overlays**: 
    - Clicking a planet opens a fullscreen immersive overlay.
    - Premium background videos tailored to each celestial body.
    - Rich, detailed narratives (~200 words) for every planet using modern typography.
- **Smart Navigation**: Easily cycle through the Sun and all eight planets using circular navigation arrows without leaving the detail view.

---

## 🚀 Technology Stack

- **Core**: Vanilla JavaScript (ES6+ Module Architecture)
- **Graphics**: HTML5 Canvas API for high-performance 2D rendering
- **Styling**: Modern CSS3 featuring:
  - Custom Design Tokens (Root Variables)
  - Advanced Keyframe Animations
  - Backdrop Blurs & Glassmorphism
  - Responsive Typography (Outfit & Space Mono fonts)
- **Data**: JSON-structured planetary model for easy extensibility.

---

## 🛠️ Installation & Usage

1. **Clone the project** to your local machine.
2. Ensure you have the following directory structure:
   ```text
   Orbito/
   ├── css/
   │   └── style.css
   ├── js/
   │   ├── main.js
   │   └── data.js
   ├── videos/
   │   └── [planet-name].mp4 (local video assets)
   └── index.html
   ```
3. **Open `index.html`** in any modern web browser (Chrome, Firefox, Safari, or Edge).
   - *Note: Some browsers may require a local server (like VS Code Live Server) to play the background videos due to CORS policies.*

---

## 📖 Control Guide

- **Scroll Down / Click**: Enter the system from the Welcome Screen.
- **Mouse Drag**: Pan the camera around the solar system.
- **Planet Click**: Open detailed view.
- **Arrows (‹ / ›)**: Navigate between planets in the detail view.
- **✕ Button**: Close the detail view and return to the map.

---

## 🎨 Design Philosophy

ORBITO was designed to be more than just a data tool; it's a visual experience. The use of **dark mode aesthetics**, **neon accents**, and **dynamic lighting** on the canvas ensures that the user is wowed at first glance. The transition from the minimalist landing page to the detailed simulation is designed to be seamless and satisfying.

---

*Designed and Developed with ❤️ for Space Enthusiasts.*
