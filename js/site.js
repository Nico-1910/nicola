/* Navigazione sito personale Nicola: menu mobile + barra "Indietro · Sezione · Menu" */
(function () {
  "use strict";

  /* Menu mobile */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Marchio «Foto AI» sulle immagini con data-ai */
  document.querySelectorAll("img[data-ai]").forEach(function (img) {
    if (img.closest(".ai-photo-wrap")) return;
    var wrap = document.createElement("span");
    wrap.className = "ai-photo-wrap";
    var mark = document.createElement("span");
    mark.className = "ai-photo-mark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = "Foto AI";
    var parent = img.parentNode;
    parent.insertBefore(wrap, img);
    wrap.appendChild(img);
    wrap.appendChild(mark);
  });

  /* Barra mobile: Indietro · Sezione · Menu (pagine interne, solo telefono) */
  var base = window.ND_BASE || "";
  var path = location.pathname.replace(/index\.html$/, "");
  var rel = base && path.indexOf(base) === 0 ? path.slice(base.length) : path;
  if (rel === "/" || rel === "") return;
  if (document.querySelector(".nd-backbar")) return;

  function parentOf(p) {
    var parts = p.split("/").filter(Boolean);
    parts.pop();
    return parts.length ? "/" + parts.join("/") + "/" : "/";
  }
  var labels = {
    "/diario/": "Diario",
    "/allenamenti/": "Allenamenti",
    "/sessioni/": "Sessioni",
    "/schede/": "Schede",
    "/trasparenza-ai/": "Trasparenza AI"
  };
  var up = parentOf(rel);
  var upLabel = labels[up] || (up === "/" ? "Home" : "Su");
  var upHref = (window.ndUrl ? window.ndUrl(up) : up);

  var bar = document.createElement("nav");
  bar.className = "nd-backbar";
  bar.setAttribute("aria-label", "Navigazione rapida");

  var back = document.createElement("button");
  back.type = "button";
  back.innerHTML = '<span aria-hidden="true">\u2190</span> Indietro';
  back.addEventListener("click", function () {
    var sameSite = document.referrer && document.referrer.indexOf(location.origin) === 0;
    if (sameSite && history.length > 1) history.back();
    else location.href = upHref;
  });
  bar.appendChild(back);

  var upLink = document.createElement("a");
  upLink.href = upHref;
  upLink.innerHTML = '<span aria-hidden="true">\u2191</span> ' + upLabel;
  bar.appendChild(upLink);

  var menu = document.createElement("button");
  menu.type = "button";
  menu.innerHTML = '<span aria-hidden="true">\u2630</span> Menu';
  menu.addEventListener("click", function () {
    var t = document.querySelector(".nav-toggle");
    if (t) t.click();
  });
  bar.appendChild(menu);

  document.body.appendChild(bar);
  document.body.classList.add("has-backbar");
})();
