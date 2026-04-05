 // Navbar scroll
 window.addEventListener("scroll", () => {
    document
      .getElementById("navbar")
      .classList.toggle("scrolled", window.scrollY > 40);
  });

  // Scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.12 }
  );
  document
    .querySelectorAll(".reveal")
    .forEach((el) => observer.observe(el));

  // Hamburguesa
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", isOpen);
  });

  // Cerrar al hacer click en un enlace
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", false);
    });
  });

  // Cerrar al hacer click fuera
  document.addEventListener("click", (e) => {
    if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", false);
    }
  });

  let cur = 0;
  const total = 4;
  const track = document.getElementById("track");
  const dots = document.querySelectorAll(".dot");
  function update() {
    track.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === cur));
  }
  function move(dir) {
    cur = (cur + dir + total) % total;
    update();
  }
  function goTo(i) {
    cur = i;
    update();
  }
  setInterval(() => move(1), 3500);

 