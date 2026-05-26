document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const backToTop = document.getElementById("backToTop");
  const popupOverlay = document.getElementById("popupOverlay");
  const openAdmissionPopup = document.getElementById("openAdmissionPopup");
  const closePopup = document.getElementById("closePopup");
  const inquiryForm = document.getElementById("inquiryForm");
  const loaderOverlay = document.getElementById("loaderOverlay");
  const counters = document.querySelectorAll("[data-target]");
  const noticeTicker = document.getElementById("noticeTicker");

  setTimeout(() => {
    loaderOverlay.style.opacity = "0";
    loaderOverlay.style.pointerEvents = "none";
    setTimeout(() => loaderOverlay.remove(), 400);
  }, 800);

  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

  openAdmissionPopup.addEventListener("click", () => {
    popupOverlay.classList.add("active");
  });

  closePopup.addEventListener("click", () => {
    popupOverlay.classList.remove("active");
  });

  popupOverlay.addEventListener("click", (event) => {
    if (event.target === popupOverlay) {
      popupOverlay.classList.remove("active");
    }
  });

  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert(
      "Thank you! Your admission enquiry has been received. We will contact you shortly.",
    );
    inquiryForm.reset();
    popupOverlay.classList.remove("active");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 320) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function animateCounters() {
    counters.forEach((counter) => {
      const target = +counter.dataset.target;
      const current = +counter.innerText;
      const increment = Math.ceil(target / 90);
      if (current < target) {
        counter.innerText = Math.min(current + increment, target);
        setTimeout(animateCounters, 25);
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.4 },
  );

  observer.observe(document.querySelector(".admission-panel"));

  const tickerElements = Array.from(noticeTicker.querySelectorAll("span"));
  let currentIndex = 0;

  function rotateTicker() {
    tickerElements.forEach((item, index) => {
      item.style.animationDelay = `${index * 3}s`;
    });
  }

  rotateTicker();
});
