/* FARO — landing interactions */
(function () {
  "use strict";

  /* ---------- theme switcher ---------- */
  var root = document.documentElement;
  var THEMES = ["lighthouse", "aurora", "terminal"];
  var KEY = "faro-theme";
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".switch button"));

  function applyTheme(name, save) {
    if (THEMES.indexOf(name) === -1) name = "lighthouse";
    root.setAttribute("data-theme", name);
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.set === name ? "true" : "false");
    });
    if (save) {
      try { localStorage.setItem(KEY, name); } catch (e) {}
    }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { applyTheme(b.dataset.set, true); });
  });

  var saved = "lighthouse";
  try { saved = localStorage.getItem(KEY) || "lighthouse"; } catch (e) {}
  applyTheme(saved, false);

  /* ---------- nav shadow on scroll ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 12) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- scroll reveal ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  function reveal(el) { el.classList.add("in"); }
  function snapReveal(el) { el.classList.add("snap", "in"); }

  // 1) reveal anything already in (or near) the viewport on load — instant, no transition
  function initialPass() {
    var vh = window.innerHeight || 800;
    reveals.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.95) snapReveal(el);
    });
  }
  initialPass();

  // 2) progressive enhancement for the rest as they scroll in
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var el = en.target;
          var sibs = Array.prototype.slice.call(el.parentNode.children).filter(function (c) {
            return c.classList && c.classList.contains("reveal");
          });
          var idx = sibs.indexOf(el);
          el.style.transitionDelay = (Math.min(idx, 6) * 70) + "ms";
          reveal(el);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach(function (el) { if (!el.classList.contains("in")) io.observe(el); });
  } else {
    reveals.forEach(reveal);
  }

  // 3) failsafe — never leave content hidden
  window.addEventListener("load", initialPass);
  setTimeout(function () { reveals.forEach(snapReveal); }, 2600);

  /* ---------- copy command ---------- */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var label = btn.querySelector(".cl");
      var done = function () {
        if (label) {
          var prev = label.textContent;
          label.textContent = "¡Copiado!";
          btn.style.color = "var(--accent-2)";
          btn.style.borderColor = "var(--accent-2)";
          setTimeout(function () {
            label.textContent = prev;
            btn.style.color = "";
            btn.style.borderColor = "";
          }, 1600);
        }
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = text; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta); done();
      }
    });
  });

  /* ---------- subtle parallax on hero scene ---------- */
  var scene = document.querySelector(".scene");
  if (scene && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      if (y < 700) scene.style.transform = "translateY(" + (y * 0.06) + "px)";
    }, { passive: true });
  }
})();
