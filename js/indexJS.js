/* ============================================================

   ELEMENTS

============================================================ */

const heroLogoWrap = document.querySelector(".heroLogoWrap");

const heroSection = document.querySelector(".heroSection");

const siteHeader = document.querySelector(".siteHeader");

const requestCtaBtn = document.getElementById("requestCtaBtn");

const closeModalBtn = document.getElementById("closeModalBtn");

const requestModal = document.getElementById("requestModal");

const requestForm = document.getElementById("requestForm");

const formSubmitBtn = document.getElementById("formSubmitBtn");

const successToast = document.getElementById("successToast");

const newsletterTab = document.getElementById("newsletterTab");

const newsletterPanel = document.getElementById("newsletterPanel");

const newsletterInner = document.querySelector(

  "#newsletterPanel .newsletterInner",

);

const openNewsletterFormBtn = document.getElementById("openNewsletterForm");

const newsletterModal = document.getElementById("newsletterModal");

const closeNewsletterModalBtn = document.getElementById("closeNewsletterModal");

const closeNewsletterPanelBtn = document.getElementById("closeNewsletterPanel");

const newsletterFormEl = document.getElementById("newsletterFormEl");

const buildUpdatesPanel = document.getElementById("buildUpdatesPanel");

const buildUpdatesInner = document.querySelector(

  "#buildUpdatesPanel .newsletterInner",

);

const closeBuildUpdatesPanelBtn = document.getElementById(

  "closeBuildUpdatesPanel",

);

const buildUpdatesFormEl = document.getElementById("buildUpdatesFormEl");

const banner = document.querySelector(".scrollBanner");

const track = document.querySelector(".scrollTrack");

const newsletterCtas = document.querySelectorAll(".newsletterCta");

/* ============================================================

   LOGO ANIMATION — UTILITY

============================================================ */

function getPathLength(el) {

  if (typeof el.getTotalLength === "function") return el.getTotalLength();

  if (el.tagName.toLowerCase() === "circle") {

    return 2 * Math.PI * parseFloat(el.getAttribute("r"));

  }

  if (el.tagName.toLowerCase() === "line") {

    const dx = el.x2.baseVal.value - el.x1.baseVal.value;

    const dy = el.y2.baseVal.value - el.y1.baseVal.value;

    return Math.sqrt(dx * dx + dy * dy);

  }

  return 2000;

}

/* ============================================================

   LOGO ANIMATION — STAGE 1: SEQUENTIAL DRAW-IN

   Exact same timing and sequencing as original.

============================================================ */

function runLogoAnimation() {

  const STAGE1_DELAY = 350;

  const DRAW_DUR = 650;

  const OVERLAP = 0.3;

  const STAGE2_DELAY = 250;

  const FILL_DUR = 800;

  const STROKE_FADE = 400;

  const drawSequence = ["nDraw", "uDraw", "lDraw", "oDrawOuter", "oDrawInner"];

  drawSequence.forEach((id) => {

    const el = document.getElementById(id);

    if (!el) return;

    const len = getPathLength(el);

    el.style.strokeDasharray = len;

    el.style.strokeDashoffset = len;

    el.style.opacity = "0";

    el.style.transition = "none";

  });

  let cursor = STAGE1_DELAY;

  drawSequence.forEach((id) => {

    const el = document.getElementById(id);

    if (!el) return;

    window.setTimeout(() => {

      el.style.opacity = "1";

      el.style.transition = `stroke-dashoffset ${DRAW_DUR}ms cubic-bezier(0.4, 0, 0.2, 1)`;

      el.style.strokeDashoffset = "0";

    }, cursor);

    cursor += DRAW_DUR - DRAW_DUR * OVERLAP;

  });

  const stage2Start = cursor + STAGE2_DELAY;

  const fillEls = document.querySelectorAll(".logoFill, .logoFillRing");

  const drawEls = document.querySelectorAll(".logoDraw");

  window.setTimeout(() => {

    fillEls.forEach((el, i) => {

      el.style.transition = `opacity ${FILL_DUR}ms ease ${i * 60}ms`;

      el.style.opacity = "1";

    });

    const rimLight = document.getElementById("oRimLight");

    if (rimLight) {

      rimLight.style.transition = `opacity ${FILL_DUR * 1.2}ms ease 200ms`;

      rimLight.style.opacity = "1";

    }

    window.setTimeout(() => {

      drawEls.forEach((el) => {

        el.style.transition = `opacity ${STROKE_FADE}ms ease`;

        el.style.opacity = "0";

      });

    }, FILL_DUR * 0.5);

    window.setTimeout(() => {

      const studioText = document.getElementById("studioText");

      const studioLines = document.querySelectorAll(".studioLine");

      if (studioText) {

        studioText.style.transition = `opacity ${FILL_DUR * 0.8}ms ease`;

        studioText.style.opacity = "1";

      }

      studioLines.forEach((line, i) => {

        const len = getPathLength(line);

        line.style.strokeDasharray = len;

        line.style.strokeDashoffset = len;

        line.style.opacity = "1";

        window.setTimeout(() => {

          line.style.transition = `stroke-dashoffset ${FILL_DUR * 0.9}ms ease`;

          line.style.strokeDashoffset = "0";

        }, i * 120);

      });

    }, FILL_DUR * 0.4);

  }, stage2Start);

  // Fire hero reveal after logo animation fully completes
  window.setTimeout(() => {

    revealSequence();

  }, stage2Start + FILL_DUR + 200);

}

/* ============================================================

   MODAL — OPEN / CLOSE

============================================================ */

function initScrollBanner() {

  const content = document.getElementById("scrollContent");

  if (!content || !track) return;

  /* Clone the content block once — CSS animates -50% for seamless loop */

  const trackWidth = track.offsetWidth;

  let contentWidth = content.offsetWidth;

  /* Clone until we overflow viewport */

  while (contentWidth < window.innerWidth * 2) {

    const clone = content.cloneNode(true);

    clone.removeAttribute("id");

    track.appendChild(clone);

    contentWidth += clone.offsetWidth;

  }

  requestAnimationFrame(() => {

    track.classList.add("isAnimating");

  });

}

function syncNewsletterPanelPosition() {

  if (!newsletterTab) return;

  const tabRect          = newsletterTab.getBoundingClientRect();
  const bottomFromScreen = window.innerHeight - tabRect.bottom;

  [newsletterInner, buildUpdatesInner].forEach((el) => {
    if (!el) return;
    el.style.top       = "auto";
    el.style.bottom    = `${bottomFromScreen}px`;
    el.style.maxHeight = "";
    el.style.overflowY = "";
  });

}

function openModal() {

  requestModal.removeAttribute("hidden");

  requestModal.setAttribute("aria-hidden", "false");

  window.requestAnimationFrame(() => {

    requestModal.classList.add("isOpen");

  });

  document.body.style.overflow = "hidden";

  /* Focus first input */

  const firstInput = requestModal.querySelector("input");

  if (firstInput) {

    window.setTimeout(() => {

      firstInput.focus();

    }, 360);

  }

}

function closeModal() {

  requestModal.classList.remove("isOpen");

  requestModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  if (requestForm) {

    requestForm.reset();

  }

  window.setTimeout(() => {

    requestModal.setAttribute("hidden", "");

  }, 380);

}

/* ============================================================

   MODAL — EVENT LISTENERS

============================================================ */

function initModal() {

  if (!requestModal) return;

  if (requestCtaBtn) {

    requestCtaBtn.addEventListener("click", openModal);

  }

  if (closeModalBtn) closeModalBtn.addEventListener("click", () => {

    closeModal();

  });

  requestModal.addEventListener("click", (e) => {

    if (e.target === requestModal) {

      closeModal();

    }

  });

  document.addEventListener("keydown", (e) => {

    if (e.key === "Escape" && requestModal.classList.contains("isOpen")) {

      closeModal();

    }

  });

}

/* ============================================================

   FORM — SUBMISSION

============================================================ */

function showSuccessToast() {

  successToast.removeAttribute("hidden");

  window.requestAnimationFrame(() => {

    successToast.classList.add("isVisible");

  });

  window.setTimeout(() => {

    successToast.classList.remove("isVisible");

    window.setTimeout(() => {

      successToast.setAttribute("hidden", "");

    }, 450);

  }, 5000);

}

function setFormLoading(isLoading) {

  if (!formSubmitBtn) return;

  if (isLoading) {

    formSubmitBtn.classList.add("isLoading");

    formSubmitBtn.disabled = true;

  } else {

    formSubmitBtn.classList.remove("isLoading");

    formSubmitBtn.disabled = false;

  }

}

/* ============================================================

   FORM — CUSTOM VALIDATION ENGINE

============================================================ */

function validateField(input) {

  const value = input.value.trim();

  const name = input.name;

  let error = "";

  if (input.hasAttribute("required") && !value) {

    error = "This field is required";

  }

  if (name === "email" && value) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {

      error = "Enter a valid email address";

    }

  }

  if (name === "phone" && value) {

    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

    if (!phoneRegex.test(value)) {

      error = "Format: (555) 000-0000";

    }

  }

  showFieldState(input, error);

  return !error;

}

function showFieldState(input, error) {

  const errorEl = input.parentElement.querySelector(".formError");

  input.classList.remove("isError", "isValid");

  if (error) {

    input.classList.add("isError");

    if (errorEl) {

      errorEl.textContent = error;

      errorEl.classList.add("isVisible");

    }

  } else {

    input.classList.add("isValid");

    if (errorEl) {

      errorEl.textContent = "";

      errorEl.classList.remove("isVisible");

    }

  }

}

function initLiveValidation() {

  const inputs = document.querySelectorAll(".formInput");

  inputs.forEach((input) => {

    input.addEventListener("input", () => {

      validateField(input);

    });

    input.addEventListener("blur", () => {

      validateField(input);

    });

  });

}

function initPhoneMask() {

  const phoneInput = document.querySelector("input[name='phone']");

  if (!phoneInput) return;

  phoneInput.addEventListener("input", (e) => {

    let value = e.target.value.replace(/\D/g, "").slice(0, 10);

    if (value.length >= 6) {

      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;

    } else if (value.length >= 3) {

      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;

    }

    e.target.value = value;

  });

}

function initFormSubmit() {

  if (!requestForm) return;

  const successMsg = document.getElementById("formSuccessMessage");

  requestForm.addEventListener("submit", async (e) => {

    let isValid = true;

    const inputs = requestForm.querySelectorAll(".formInput");

    inputs.forEach((input) => {

      if (!validateField(input)) {

        isValid = false;

      }

    });

    if (!isValid) {

      e.preventDefault();

      return;

    }

    e.preventDefault();

    setFormLoading(true);

    if (successMsg) successMsg.classList.remove("show");

    const formData = new FormData(requestForm);

    try {

      const response = await fetch(requestForm.action, {

        method: "POST",

        body: formData,

        headers: { Accept: "application/json" },

      });

      if (response.ok) {

        const emailInput = requestForm.querySelector("input[name='email']");

        const nameInput = requestForm.querySelector("input[name='name']");

        sessionStorage.setItem("nuloUserEmail", emailInput?.value ?? "");

        sessionStorage.setItem("nuloUserName", nameInput?.value ?? "");

        requestForm.reset();

        if (requestModal) {

          requestModal.classList.remove("isOpen");

          requestModal.setAttribute("aria-hidden", "true");

          document.body.style.overflow = "";

          window.setTimeout(() => {

            requestModal.setAttribute("hidden", "");

          }, 380);

        }

        showSuccessToast();

        window.setTimeout(() => {

          syncNewsletterPanelPosition();

          if (newsletterPanel) {

            newsletterPanel.classList.add("open");

          }

        }, 1000);

      } else {

        console.error("Form submission failed");

      }

    } catch (err) {

      console.error("Form submission error:", err);

    } finally {

      setFormLoading(false);

    }

  });

}

/* ============================================================

   SUCCESS TOAST — INIT

============================================================ */

function initSuccessToast() {

  successToast.setAttribute("hidden", "");

}

/* ============================================================

   NEWSLETTER SYSTEM

============================================================ */

function prefillNewsletterFields() {

  const savedEmail = sessionStorage.getItem("nuloUserEmail");

  const savedName = sessionStorage.getItem("nuloUserName");

  const newsletterInput = document.querySelector(

    "#newsletterFormEl input[name='email']",

  );

  const nameInput = document.querySelector(

    "#newsletterFormEl input[name='name']",

  );

  if (newsletterInput && savedEmail && !newsletterInput.value) {

    newsletterInput.value = savedEmail;

  }

  if (nameInput && savedName && !nameInput.value) {

    nameInput.value = savedName;

  }

}

function prefillBuildUpdates() {

  const savedEmail = sessionStorage.getItem("nuloUserEmail");

  const savedName = sessionStorage.getItem("nuloUserName");

  const emailInput = document.querySelector(

    "#buildUpdatesFormEl input[name='email']",

  );

  const nameInput = document.querySelector(

    "#buildUpdatesFormEl input[name='name']",

  );

  if (emailInput && savedEmail) {

    emailInput.value = savedEmail;

  }

  if (nameInput && savedName) {

    nameInput.value = savedName;

  }

  sessionStorage.removeItem("nuloUserEmail");

  sessionStorage.removeItem("nuloUserName");

}

function openNewsletterPopup() {

  if (!newsletterPanel) return;

  prefillNewsletterFields();

  newsletterPanel.classList.add("open");

}

function closeNewsletterPopup() {

  if (!newsletterPanel) return;

  newsletterPanel.classList.remove("open");

  if (newsletterModal) {

    newsletterModal.classList.remove("open");

    if (newsletterFormEl) {

      newsletterFormEl.reset();

    }

  }

}

function closeBuildUpdatesPopup() {

  if (!buildUpdatesPanel) return;

  buildUpdatesPanel.classList.remove("open");

  if (buildUpdatesFormEl) {

    buildUpdatesFormEl.reset();

  }

}

function initNewsletter() {

  newsletterCtas.forEach((cta) => {

    cta.addEventListener("mousemove", (e) => {

      const rect = cta.getBoundingClientRect();

      const x = e.clientX - rect.left;

      const y = e.clientY - rect.top;

      cta.style.setProperty("--spotlight-x", `${x}px`);

      cta.style.setProperty("--spotlight-y", `${y}px`);

    });

    cta.addEventListener("mouseleave", () => {

      cta.style.setProperty("--spotlight-x", "50%");

      cta.style.setProperty("--spotlight-y", "50%");

    });

  });

  if (newsletterTab) {

    newsletterTab.addEventListener("click", () => {

      syncNewsletterPanelPosition();

      prefillNewsletterFields();

      if (newsletterPanel) newsletterPanel.classList.add("open");

    });

  }

  if (closeNewsletterPanelBtn) {

    closeNewsletterPanelBtn.addEventListener("click", () => {

      closeNewsletterPopup();

    });

  }

  if (newsletterPanel && newsletterInner) {

    newsletterPanel.addEventListener("click", (e) => {

      if (!newsletterInner.contains(e.target)) {

        closeNewsletterPopup();

      }

    });

  }

  if (closeBuildUpdatesPanelBtn) {

    closeBuildUpdatesPanelBtn.addEventListener("click", () => {

      closeBuildUpdatesPopup();

    });

  }

  if (buildUpdatesPanel && buildUpdatesInner) {

    buildUpdatesPanel.addEventListener("click", (e) => {

      if (!buildUpdatesInner.contains(e.target)) {

        closeBuildUpdatesPopup();

      }

    });

  }

  document.addEventListener("keydown", (e) => {

    if (e.key !== "Escape") return;

    if (newsletterModal && newsletterModal.classList.contains("open")) {

      newsletterModal.classList.remove("open");

      if (newsletterFormEl) {

        newsletterFormEl.reset();

      }

    }

    if (newsletterPanel && newsletterPanel.classList.contains("open")) {

      closeNewsletterPopup();

    }

    if (buildUpdatesPanel && buildUpdatesPanel.classList.contains("open")) {

      closeBuildUpdatesPopup();

    }

  });

  if (openNewsletterFormBtn) {

    openNewsletterFormBtn.addEventListener("click", () => {

      if (!newsletterModal) return;

      newsletterModal.classList.add("open");

      const firstInput = newsletterModal.querySelector("input");

      if (firstInput) {

        window.setTimeout(() => {

          firstInput.focus();

        }, 80);

      }

    });

  }

  if (closeNewsletterModalBtn) {

    closeNewsletterModalBtn.addEventListener("click", () => {

      if (newsletterModal) {

        newsletterModal.classList.remove("open");

        if (newsletterFormEl) {

          newsletterFormEl.reset();

        }

      }

    });

  }

  if (newsletterModal) {

    newsletterModal.addEventListener("click", (e) => {

      if (e.target === newsletterModal) {

        newsletterModal.classList.remove("open");

        newsletterFormEl?.reset();

      }

    });

  }

  if (newsletterFormEl) {

    newsletterFormEl.addEventListener("submit", async (e) => {

      e.preventDefault();

      const formData = new FormData(newsletterFormEl);

      try {

        const response = await fetch(newsletterFormEl.action, {

          method: "POST",

          body: formData,

          headers: {

            Accept: "application/json",

          },

        });

        if (response.ok) {

          newsletterFormEl.reset();

          if (newsletterModal) {

            newsletterModal.classList.remove("open");

          }

          if (newsletterPanel) {

            newsletterPanel.classList.remove("open");

          }

          showSuccessToast();

        } else {

          console.error("Newsletter submission failed");

        }

      } catch (err) {

        console.error("Newsletter error:", err);

      }

    });

  }

  if (buildUpdatesFormEl) {

    buildUpdatesFormEl.addEventListener("submit", async (e) => {

      e.preventDefault();

      const formData = new FormData(buildUpdatesFormEl);

      try {

        const response = await fetch(buildUpdatesFormEl.action, {

          method: "POST",

          body: formData,

          headers: { Accept: "application/json" },

        });

        if (response.ok) {

          buildUpdatesFormEl.reset();

          closeBuildUpdatesPopup();

          showSuccessToast();

          sessionStorage.removeItem("nuloUserEmail");

          sessionStorage.removeItem("nuloUserName");

        } else {

          console.error("Build updates submission failed");

        }

      } catch (err) {

        console.error("Build updates error:", err);

      }

    });

  }

}

/* ============================================================

   REVEAL SEQUENCE — fires after logo animation completes

============================================================ */

function revealSequence() {

  const ctaWrap   = document.querySelector(".heroCtaWrap");
  const title     = document.querySelector(".heroValueTitle");
  const subtext   = document.querySelector(".heroValueText");
  const microText = document.querySelector(".heroMicroText");

  const show = (el) => {
    if (!el) return;
    el.style.opacity    = "1";
    el.style.visibility = "visible";
    el.style.transform  = "translateY(0)";
  };

  // NAV
  if (siteHeader) { siteHeader.classList.add("heroLoaded"); }

  // HOOK
  setTimeout(() => show(title),   200);

  // SUBTEXT
  setTimeout(() => show(subtext), 450);

  // CTA + MICRO
  setTimeout(() => {
    ctaWrap?.classList.add("isVisible");
    show(microText);
  }, 700);

  // BANNER + TAB
  setTimeout(() => {
    banner?.classList.add("isVisible");
    newsletterTab?.classList.add("isVisible");
    syncNewsletterPanelPosition();
  }, 1000);

}

/* ============================================================

   INIT

============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  initScrollBanner();

  syncNewsletterPanelPosition();

  /* Logo wrap fade-in */

  if (heroLogoWrap) {

    window.requestAnimationFrame(() => {

      heroLogoWrap.classList.add("isVisible");

    });

  }

  initModal();

  initLiveValidation();

  initPhoneMask();

  initFormSubmit();

  initSuccessToast();

  initNewsletter();

});

window.addEventListener("resize", syncNewsletterPanelPosition);

window.addEventListener("load", runLogoAnimation);
