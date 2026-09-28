/* SW Lingerie — cart store (localStorage) */
const CART_KEY = "swl_cart_v1";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}
function addToCart(productId, size, qty) {
  qty = Math.max(1, parseInt(qty, 10) || 1);
  const cart = getCart();
  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) {
    existing.qty = Math.min(10, existing.qty + qty);
  } else {
    cart.push({ id: productId, size: size, qty: qty });
  }
  saveCart(cart);
}
function setCartQty(productId, size, qty) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId && i.size === size);
  if (!item) return;
  item.qty = Math.max(1, Math.min(10, qty));
  saveCart(cart);
}
function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter(i => !(i.id === productId && i.size === size));
  saveCart(cart);
}
function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartBadge();
}
function cartCount() {
  return getCart().reduce((n, i) => n + i.qty, 0);
}
function cartSubtotal() {
  return getCart().reduce((sum, i) => {
    const p = getProduct(i.id);
    return p ? sum + p.price * i.qty : sum;
  }, 0);
}
function cartShipping(subtotal) {
  if (subtotal <= 0) return 0;
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
}
function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cartCount();
  });
}
document.addEventListener("DOMContentLoaded", updateCartBadge);
