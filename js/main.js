/* SW Lingerie — shared site behaviour */

/* ---------- Text size control (A- / A / A+) ---------- */
(function () {
  const KEY = "swl_textsize";
  function apply(level) {
    document.documentElement.classList.remove("text-large", "text-xlarge");
    if (level === "large") document.documentElement.classList.add("text-large");
    if (level === "xlarge") document.documentElement.classList.add("text-xlarge");
    document.querySelectorAll("[data-textsize]").forEach(b => {
      b.classList.toggle("active", b.dataset.textsize === level);
      b.setAttribute("aria-pressed", b.dataset.textsize === level ? "true" : "false");
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    apply(localStorage.getItem(KEY) || "normal");
    document.querySelectorAll("[data-textsize]").forEach(b => {
      b.addEventListener("click", function () {
        localStorage.setItem(KEY, b.dataset.textsize);
        apply(b.dataset.textsize);
      });
    });
  });
})();

/* ---------- Toast ---------- */
function showToast(html, withCartLink) {
  let t = document.getElementById("swl-toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "swl-toast";
    t.className = "toast";
    t.setAttribute("role", "status");
    document.body.appendChild(t);
  }
  t.innerHTML = html + (withCartLink ? ' &nbsp;<a href="cart.html">View cart</a>' : "");
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 4200);
}

/* ---------- Reveal on scroll ---------- */
document.addEventListener("DOMContentLoaded", function () {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach(e => e.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
});

/* ---------- FAQ accordion ---------- */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", function () {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (panel) panel.hidden = expanded;
    });
  });
});

/* ---------- Newsletter forms ---------- */
function wireNewsletter(formId, msgId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = form.querySelector("input[type=email]");
    const msg = document.getElementById(msgId);
    const val = (input.value || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) {
      msg.textContent = "Please enter a valid email address.";
      msg.className = "form-msg err";
      input.focus();
      return;
    }
    const subs = JSON.parse(localStorage.getItem("swl_newsletter") || "[]");
    if (!subs.includes(val)) { subs.push(val); localStorage.setItem("swl_newsletter", JSON.stringify(subs)); }
    msg.textContent = "Thank you! You're on the list — watch your inbox for 10% off your first order.";
    msg.className = "form-msg ok";
    form.reset();
  });
}
document.addEventListener("DOMContentLoaded", function () {
  wireNewsletter("nl-form", "nl-msg");
});

/* ---------- Shared header / footer injection ---------- */
function siteHeader(activePage) {
  const pages = [
    ["index.html", "Home", "home"],
    ["shop.html", "Shop", "shop"],
    ["about.html", "About Us", "about"],
    ["faq.html", "Help & FAQ", "faq"],
    ["contact.html", "Contact", "contact"]
  ];
  const nav = pages.map(([href, label, key]) =>
    `<li><a href="${href}"${key === activePage ? ' aria-current="page"' : ""}>${label}</a></li>`
  ).join("");
  return `
  <a class="skip-link" href="#main">Skip to main content</a>
  <div class="topbar">
    <div class="wrap">
      <span>Free U.S. shipping on orders over ${formatUSD(FREE_SHIPPING_THRESHOLD)} · 90-day easy returns</span>
      <span>Prefer to order by phone? Call <a class="phone" href="tel:+18005550142">1-800-555-0142</a> (Mon–Sat, 8am–8pm ET)</span>
    </div>
  </div>
  <header class="site-header">
    <div class="wrap">
      <a class="brand" href="index.html" aria-label="SW Lingerie home">
        <span class="brand-name">SW <em>Lingerie</em></span>
        <span class="brand-tag">swlingerie.shop</span>
      </a>
      <nav class="main-nav" aria-label="Main navigation">
        <ul>${nav}</ul>
      </nav>
      <div class="header-actions">
        <div class="text-size-control" role="group" aria-label="Adjust text size">
          <button type="button" data-textsize="normal" aria-pressed="true" title="Standard text size" aria-label="Standard text size">A</button>
          <button type="button" data-textsize="large" aria-pressed="false" title="Large text size" aria-label="Large text size" style="font-size:1.15rem">A</button>
          <button type="button" data-textsize="xlarge" aria-pressed="false" title="Extra large text size" aria-label="Extra large text size" style="font-size:1.3rem">A</button>
        </div>
        <a class="cart-link" href="cart.html" aria-label="Shopping cart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="9" cy="21" r="1.6"/><circle cx="19" cy="21" r="1.6"/><path d="M2.5 3h2l2.6 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21.5 7H6"/></svg>
          Cart <span class="cart-count" data-cart-count>0</span>
        </a>
      </div>
    </div>
  </header>`;
}

function siteFooter() {
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-main">
        <div class="footer-brand">
          <span class="brand-name">SW Lingerie</span>
          <p>Comfort-first intimate apparel designed with and for women over sixty. Family-owned, based in Portland, Oregon.</p>
          <p style="color:#cbb8a6">Questions? Call us toll-free<br><a href="tel:+18005550142" style="font-size:1.25rem;font-weight:800">1-800-555-0142</a></p>
        </div>
        <div>
          <h3>Shop</h3>
          <ul>
            <li><a href="shop.html">All Products</a></li>
            <li><a href="shop.html#bras">Wireless Bras</a></li>
            <li><a href="shop.html#sleepwear">Sleepwear & Robes</a></li>
            <li><a href="shop.html#panties">Panties</a></li>
            <li><a href="cart.html">Your Cart</a></li>
          </ul>
        </div>
        <div>
          <h3>Customer Care</h3>
          <ul>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="faq.html">Help & FAQ</a></li>
            <li><a href="shipping-returns.html">Shipping & Returns</a></li>
            <li><a href="size-guide.html">Size Guide</a></li>
            <li><a href="accessibility.html">Accessibility</a></li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="terms-of-service.html">Terms of Service</a></li>
            <li><a href="shipping-returns.html">Return Policy</a></li>
            <li><a href="accessibility.html">Accessibility Statement</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span id="yr"></span> SW Lingerie · swlingerie.shop · Portland, Oregon, USA. All rights reserved.</span>
        <div class="footer-pay" aria-label="Accepted payment methods">
          <span class="pay-chip">VISA</span>
          <span class="pay-chip">Mastercard</span>
          <span class="pay-chip">AMEX</span>
          <span class="pay-chip">Discover</span>
          <span class="pay-chip">PayPal</span>
          <span class="pay-chip">Apple Pay</span>
        </div>
      </div>
    </div>
  </footer>`;
}

document.addEventListener("DOMContentLoaded", function () {
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = siteHeader(headerEl.dataset.page || "");
  if (footerEl) {
    footerEl.innerHTML = siteFooter();
    const yr = footerEl.querySelector("#yr");
    if (yr) yr.textContent = new Date().getFullYear();
  }
  updateCartBadge();
});
