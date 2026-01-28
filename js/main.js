import { SOLAR_SYSTEM_DATA } from './data.js';

class SolarSystem {
    constructor() {
        this.canvas = document.getElementById('solar-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.bodies = [];
        this.stars = [];

        // State
        this.isRunning = true;
        this.selectedBody = null;
        this.hoveredBody = null;
        this.scale = 1;
        this.cameraOffset = { x: 0, y: 0 };
        this.dragStart = { x: 0, y: 0 };
        this.isDragging = false;
        this.time = 0;
        this.textureCache = {};

        // UI References
        this.ui = {
            tooltip: document.getElementById('tooltip'),
        };

        this.init();
    }

    init() {
        this.resize();
        this.initWelcomeScreen();
        this.initBodies();
        this.initStars();
        this.attachEventListeners();
        this.animate();
        this.loadTextures();
    }

    initWelcomeScreen() {
        const appContainer = document.getElementById('app-container');
        const welcomeScreen = document.getElementById('welcome-screen');
        const typewriterEl = document.getElementById('typewriter-text');

        if (!welcomeScreen || !appContainer) return;

        // Typewriter Effect
        const text = "Gravity weaves the cosmic dance.";
        let i = 0;
        const type = () => {
            if (typewriterEl && i < text.length) {
                typewriterEl.textContent += text.charAt(i);
                i++;
                setTimeout(type, 80);
            }
        };
        setTimeout(type, 800);

        let hasEntered = false;
        const enterSystem = () => {
            if (hasEntered) return;
            hasEntered = true;

            welcomeScreen.style.pointerEvents = 'none';
            appContainer.classList.remove('initial-hidden');
            appContainer.classList.add('active');

            // Recalculate dimensions once visible
            setTimeout(() => {
                this.resize();
            }, 100);

            window.removeEventListener('wheel', handleTrigger);
            window.removeEventListener('keydown', handleTrigger);
            window.removeEventListener('click', handleTrigger);

            setTimeout(() => {
                welcomeScreen.style.opacity = '0';
                setTimeout(() => {
                    welcomeScreen.style.display = 'none';
                }, 1200);
            }, 500);
        };

        const handleTrigger = (e) => {
            if (hasEntered) return;
            if (e.type === 'wheel') {
                if (Math.abs(e.deltaY) > 2) enterSystem();
            } else if (e.type === 'keydown') {
                if ([' ', 'Enter', 'ArrowDown', 'ArrowUp'].includes(e.key)) enterSystem();
            } else if (e.type === 'click') {
                if (e.target.tagName !== 'BUTTON') enterSystem();
            }
        };

        window.addEventListener('wheel', handleTrigger, { passive: true });
        window.addEventListener('keydown', handleTrigger);
        window.addEventListener('click', handleTrigger);
    }

    loadTextures() {
        SOLAR_SYSTEM_DATA.forEach(data => {
            if (!data.textureUrl) return;
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = data.textureUrl;
            img.onload = () => {
                this.textureCache[data.id] = img;
            };
        });
    }

    initBodies() {
        this.bodies = SOLAR_SYSTEM_DATA.map(data => ({
            ...data,
            angle: Math.random() * Math.PI * 2,
            x: 0,
            y: 0,
            zIdx: 0
        }));
    }

    initStars() {
        for (let i = 0; i < 400; i++) {
            this.stars.push({
                x: Math.random() * window.innerWidth * 2 - window.innerWidth / 2,
                y: Math.random() * window.innerHeight * 2 - window.innerHeight / 2,
                size: Math.random() * 2,
                alpha: Math.random(),
                pulseSpeed: 0.01 + Math.random() * 0.03
            });
        }
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.cameraOffset.x = this.canvas.width / 2;
        this.cameraOffset.y = this.canvas.height * 0.4;
    }

    attachEventListeners() {
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.canvas.addEventListener('mouseup', () => this.handleMouseUp());
        this.canvas.addEventListener('click', (e) => this.handleClick(e));

        const closeBtn = document.getElementById('close-detail-btn');
        const prevBtn = document.getElementById('prev-planet-btn');
        const nextBtn = document.getElementById('next-planet-btn');

        if (closeBtn) closeBtn.addEventListener('click', (e) => { e.preventDefault(); this.closeDetail(); });
        if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); this.navigatePlanet(-1); });
        if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); this.navigatePlanet(1); });
    }

    project(x, z) {
        const isoCos = 0.866;
        const isoSin = 0.5;
        const screenX = (x - z) * isoCos;
        const screenY = (x + z) * isoSin;
        return {
            x: screenX + this.cameraOffset.x,
            y: screenY + this.cameraOffset.y
        };
    }

    animate() {
        this.update();
        this.render();
        requestAnimationFrame(() => this.animate());
    }

    update() {
        if (!this.selectedBody) {
            this.time += 0.01;
        }

        this.stars.forEach(star => {
            star.alpha += star.pulseSpeed;
            if (star.alpha > 1 || star.alpha < 0.2) star.pulseSpeed *= -1;
        });

        this.bodies.forEach(body => {
            if (!this.selectedBody) {
                const speedFactor = 0.005;
                body.angle += body.orbitSpeed * speedFactor;
            }
            const lx = Math.cos(body.angle) * body.orbitRadius;
            const lz = Math.sin(body.angle) * body.orbitRadius;
            const proj = this.project(lx, lz);
            body.x = proj.x;
            body.y = proj.y;
            body.zIdx = body.y;
        });

        this.bodies.sort((a, b) => a.zIdx - b.zIdx);
    }

    render() {
        if (!this.ctx) return;

        this.ctx.globalAlpha = 1.0;
        this.ctx.globalCompositeOperation = 'source-over';
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);

        // Clear
        this.ctx.fillStyle = '#050505';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Stars
        this.stars.forEach(star => {
            this.ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fill();
        });

        this.drawOrbits();

        this.bodies.forEach(body => {
            this.drawBody(body);
        });
    }

    drawOrbits() {
        this.ctx.lineWidth = 1;
        this.bodies.forEach(body => {
            if (body.type === 'Star') return;
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
            for (let i = 0; i <= 100; i++) {
                const theta = (i / 100) * Math.PI * 2;
                const lx = Math.cos(theta) * body.orbitRadius;
                const lz = Math.sin(theta) * body.orbitRadius;
                const proj = this.project(lx, lz);
                if (i === 0) this.ctx.moveTo(proj.x, proj.y);
                else this.ctx.lineTo(proj.x, proj.y);
            }
            this.ctx.stroke();
        });
    }

    drawBody(body) {
        if (!body) return;
        const isSelected = this.selectedBody && this.selectedBody.id === body.id;
        const isHovered = this.hoveredBody && this.hoveredBody.id === body.id;
        const isDimmed = this.selectedBody && !isSelected;

        this.ctx.save();
        this.ctx.globalAlpha = isDimmed ? 0.3 : 1.0;

        if (body.hasRings) this.drawPlanetaryRings(body, 'back');

        const x = body.x;
        const y = body.y;
        const r = body.visualRadius;

        // Core
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, Math.PI * 2);

        if (body.id === 'sun') {
            this.ctx.save();
            this.ctx.shadowBlur = isDimmed ? 10 : 40;
            this.ctx.shadowColor = body.glowColor;
            this.ctx.fillStyle = body.color;
            this.ctx.fill();
            this.ctx.restore();
        } else {
            const grad = this.ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
            grad.addColorStop(0, body.color);
            grad.addColorStop(1, '#000000');
            this.ctx.fillStyle = grad;
            this.ctx.fill();
        }

        // Texture
        const texture = this.textureCache[body.id];
        if (texture && texture.complete && texture.naturalWidth !== 0) {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.arc(x, y, r, 0, Math.PI * 2);
            this.ctx.clip();
            this.ctx.drawImage(texture, x - r, y - r, r * 2, r * 2);

            if (body.id !== 'sun') {
                const overlay = this.ctx.createLinearGradient(x - r, y - r, x + r, y + r);
                overlay.addColorStop(0, 'rgba(255,255,255,0.1)');
                overlay.addColorStop(1, 'rgba(0,0,0,0.7)');
                this.ctx.fillStyle = overlay;
                this.ctx.fill();
            }
            this.ctx.restore();
        }

        if (isSelected || isHovered) {
            this.ctx.beginPath();
            this.ctx.arc(x, y, r + 5, 0, Math.PI * 2);
            this.ctx.strokeStyle = isSelected ? '#00f0ff' : 'rgba(255,255,255,0.4)';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        }

        if (body.hasRings) this.drawPlanetaryRings(body, 'front');
        this.ctx.restore();
    }

    drawPlanetaryRings(body, layer) {
        const startAngle = layer === 'back' ? Math.PI : 0;
        const endAngle = layer === 'back' ? Math.PI * 2 : Math.PI;

        this.ctx.save();
        this.ctx.translate(body.x, body.y);
        this.ctx.scale(1, 0.5);

        const ringWidth = body.ringOuter - body.ringInner;
        const bands = 6;
        const step = ringWidth / bands;

        for (let i = 0; i < bands; i++) {
            const radius = body.ringInner + (step * i);
            this.ctx.beginPath();
            this.ctx.strokeStyle = body.ringColor.replace(/[\d.]+\)$/g, `${0.5 - (i * 0.05)})`);
            this.ctx.lineWidth = step;
            this.ctx.arc(0, 0, radius, startAngle, endAngle);
            this.ctx.stroke();
        }
        this.ctx.restore();
    }

    handleMouseMove(e) {
        const r = this.canvas.getBoundingClientRect();
        const mx = e.clientX - r.left;
        const my = e.clientY - r.top;

        if (this.isDragging) {
            this.cameraOffset.x = e.clientX - this.dragStart.x;
            this.cameraOffset.y = e.clientY - this.dragStart.y;
            return;
        }

        let hit = null;
        [...this.bodies].reverse().forEach(body => {
            const dist = Math.sqrt((mx - body.x) ** 2 + (my - body.y) ** 2);
            if (!hit && dist < Math.max(body.visualRadius * 1.5, 20)) hit = body;
        });

        this.hoveredBody = hit;
        if (hit) {
            this.canvas.style.cursor = 'pointer';
            this.ui.tooltip.classList.remove('hidden');
            this.ui.tooltip.textContent = hit.name;
            this.ui.tooltip.style.left = `${hit.x}px`;
            this.ui.tooltip.style.top = `${hit.y - hit.visualRadius - 10}px`;
        } else {
            this.canvas.style.cursor = this.isDragging ? 'grabbing' : 'grab';
            this.ui.tooltip.classList.add('hidden');
        }
    }

    handleMouseDown(e) {
        if (this.selectedBody) return;
        this.isDragging = true;
        this.dragStart.x = e.clientX - this.cameraOffset.x;
        this.dragStart.y = e.clientY - this.cameraOffset.y;
    }

    handleMouseUp() {
        this.isDragging = false;
    }

    handleClick(e) {
        if (this.hoveredBody) {
            this.selectBody(this.hoveredBody);
        }
    }

    selectBody(body) {
        this.selectedBody = body;
        document.getElementById('detail-title').textContent = body.name;
        document.getElementById('detail-desc').textContent = body.description;
        const video = document.getElementById('detail-bg-video');
        if (body.backgroundVideo) {
            video.src = body.backgroundVideo;
            video.load();
            video.play().catch(err => {
                console.warn(`Failed to play video for ${body.name}:`, err);
            });
        }
        document.getElementById('detail-section').classList.add('visible');
    }

    navigatePlanet(direction) {
        const order = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
        const index = order.indexOf(this.selectedBody?.id || 'sun');
        let nextIndex = (index + direction + order.length) % order.length;
        const nextBody = this.bodies.find(b => b.id === order[nextIndex]);
        if (nextBody) this.selectBody(nextBody);
    }

    closeDetail() {
        this.selectedBody = null;
        document.getElementById('detail-section').classList.remove('visible');
    }
}

new SolarSystem();
