document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const backToTop = document.getElementById("backToTop");
  const popupOverlay = document.getElementById("popupOverlay");
  const openAdmissionPopup = document.getElementById("openAdmissionPopup");
  const closePopup = document.getElementById("closePopup");
  const inquiryForm = document.getElementById("inquiryForm");
  const loaderOverlay = document.getElementById("loaderOverlay");
  const siteHeader = document.getElementById("siteHeader");

  setTimeout(() => {
    if (loaderOverlay) {
      loaderOverlay.style.opacity = "0";
      loaderOverlay.style.pointerEvents = "none";
      setTimeout(() => loaderOverlay.remove(), 400);
    }
  }, 850);

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      const expanded = mainNav.classList.contains("active");
      navToggle.setAttribute("aria-expanded", expanded);
    });
  }

  if (openAdmissionPopup && popupOverlay) {
    openAdmissionPopup.addEventListener("click", () => {
      popupOverlay.classList.add("active");
    });
  }

  if (closePopup && popupOverlay) {
    closePopup.addEventListener("click", () => {
      popupOverlay.classList.remove("active");
    });
  }

  if (popupOverlay) {
    popupOverlay.addEventListener("click", (event) => {
      if (event.target === popupOverlay) {
        popupOverlay.classList.remove("active");
      }
    });
  }

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert(
        "Thank you! Your admission enquiry has been received. We will contact you shortly.",
      );
      inquiryForm.reset();
      popupOverlay.classList.remove("active");
    });
  }

  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("show", window.scrollY > 320);
      siteHeader.classList.toggle("scrolled", window.scrollY > 20);
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
