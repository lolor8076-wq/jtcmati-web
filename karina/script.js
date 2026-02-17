const canvas = document.getElementById("particlesCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let particles = [];

if (canvas && ctx) {
  const config = {
    density: 9000,
    maxParticles: 130,
    minSize: 1.2,
    maxSize: 3.2
  };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
    }

    reset() {
      this.size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
      this.vx = (Math.random() - 0.5) * 0.22;
      this.vy = (Math.random() - 0.5) * 0.22;
      this.alpha = Math.random() * 0.45 + 0.22;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x > canvas.width + 10) this.x = -10;
      if (this.x < -10) this.x = canvas.width + 10;
      if (this.y > canvas.height + 10) this.y = -10;
      if (this.y < -10) this.y = canvas.height + 10;

      if (Math.random() < 0.002) {
        this.vx = (Math.random() - 0.5) * 0.22;
        this.vy = (Math.random() - 0.5) * 0.22;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.fillStyle = `rgba(231, 190, 98, ${this.alpha})`;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / config.density), config.maxParticles);
    for (let i = 0; i < count; i += 1) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }

  resizeCanvas();
  initParticles();
  animate();

  window.addEventListener("resize", () => {
    resizeCanvas();
    initParticles();
  });
}
