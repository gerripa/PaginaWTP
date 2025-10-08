console.log("Amélie Atelier – sitio cargado correctamente");
console.log("Amélie Atelier – sitio cargado correctamente");

//video y menu telefono
//video y menu telefono
const video = document.getElementById('heroVideo');
const soundBtn = document.getElementById('soundToggle');
const soundIcon = document.getElementById('soundIcon');
if (soundBtn && video) {
  soundBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    soundIcon.textContent = video.muted ? '🔇' : '🔊';
  });
}
if (soundBtn && video) {
  soundBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    soundIcon.textContent = video.muted ? '🔇' : '🔊';
  });
}

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('overlay');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
  });
}
if (overlay) {
  overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
  });
}

//carrito para comprar
let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartOverlay = document.getElementById('cartOverlay');
const openCart = document.getElementById('openCart');
const closeCart = document.getElementById('closeCart');
const cartContent = document.getElementById('cart-content');
const cartCount = document.getElementById('cart-count');

const bagIcon = document.querySelector('.fa-bag-shopping');
const badge = document.createElement('span');
badge.id = 'cart-count-badge';
bagIcon.parentElement.style.position = 'relative';
bagIcon.parentElement.appendChild(badge);
Object.assign(badge.style, {
  position: "absolute",
  top: "-6px",
  right: "-10px",
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "10px",
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function updateCart() {
  cartContent.innerHTML = '';
  if (cartItems.length === 0) {
    cartContent.innerHTML = '<p class="empty-cart">YOUR CART IS EMPTY</p>';
  } else {
    let total = 0;
    cartItems.forEach((item, index) => {
      total += item.price * item.quantity;
      const div = document.createElement('div');
      div.classList.add('cart-item');
      div.innerHTML = `
        <p><strong>${item.name}</strong></p>
        <div class="cart-controls">
          <button class="btn-qty minus" data-index="${index}">−</button>
          <span>${item.quantity}</span>
          <button class="btn-qty plus" data-index="${index}">+</button>
          <span class="item-price">$${(item.price * item.quantity).toLocaleString()}</span>
          <button class="remove-item" data-index="${index}">✕</button>
        </div>
      `;
      cartContent.appendChild(div);
    });

    const totalDiv = document.createElement('div');
    totalDiv.classList.add('cart-total');
    totalDiv.innerHTML = `<p><strong>Total:</strong> $${total.toLocaleString()}</p>`;
    cartContent.appendChild(totalDiv);

    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Empty Cart';
    clearBtn.classList.add('btn-clear');
    clearBtn.addEventListener('click', () => {
      cartItems = [];
      updateCart();
    });
    cartContent.appendChild(clearBtn);

    const buyBtn = document.createElement('button');
    buyBtn.textContent = 'Buy Now';
    buyBtn.classList.add('btn-buy');
    buyBtn.addEventListener('click', () => {
      window.location.href = 'checkout.html';
    });
    cartContent.appendChild(buyBtn);
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));
  cartCount.textContent = cartItems.length;
  badge.textContent = cartItems.length;
}

//catalogo con las dos fotos 
const productos = [
  { name: "Isolde Dress", price: 2450, image: "img/dress5a.webp", hover: "img/dress5b.webp" },
  { name: "Clarisse Dress", price: 2750, image: "img/dress8a.webp", hover: "img/dress8b.webp" },
  { name: "Elisabeth Gown", price: 7500, image: "img/dress9a.webp", hover: "img/dress9b.webp" },
  { name: "Aurora Gown", price: 6950, image: "img/dress6a.webp", hover: "img/dress6b.webp" },
  { name: "Josephine Gown", price: 5950, image: "img/dress7a.webp", hover: "img/dress7b.webp" },
  { name: "Magdalena Dress", price: 1950, image: "img/dress1a.webp", hover: "img/dress1b.webp" },
  { name: "Sophia Mini Dress", price: 1750, image: "img/dress2a.webp", hover: "img/dress2b.webp" },
  { name: "Alaia Dress", price: 2100, image: "img/dress3a.webp", hover: "img/dress3b.jpg" },
  { name: "Juliet Gown", price: 6950, image: "img/dress4a.webp", hover: "img/dress4b.webp" },
  { name: "Treasure Chest", price: 1250, image: "img/dress10a.webp", hover: "img/dress10b.webp" }
];

function renderCatalogo() {
  const contenedor = document.getElementById("catalogo");
  if (!contenedor) return;

  contenedor.innerHTML = productos.map(prod => `
    <div class="col-md-3 col-sm-6 text-center product">
      <div class="product-image">
        <img src="${prod.image}" class="img-fluid main-img" alt="${prod.name}">
        <img src="${prod.hover}" class="img-fluid hover-img" alt="${prod.name} alternate view">
      </div>
      <h6 class="product-name">${prod.name}</h6>
      <p class="price">$${prod.price.toLocaleString()}</p>
      <button class="btn btn-outline-dark btn-sm add-to-cart"
              data-name="${prod.name}"
              data-price="${prod.price}">
        Add to Bag
      </button>
    </div>
  `).join('');

  // Reasignar eventos "Add to Bag"
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const existing = cartItems.find(i => i.name === name);
      if (existing) {
        existing.quantity++;
      } else {
        cartItems.push({ name, price, quantity: 1 });
      }
      updateCart();
      Swal.fire({
        icon: 'success',
        title: 'Added to cart!',
        text: `${name} added successfully`,
        showConfirmButton: false,
        timer: 1500,
        toast: true,
        position: 'top-end'
      });
    });
  });
}

//eventos globales?//
cartContent.addEventListener('click', (e) => {
  const index = e.target.dataset.index;
  if (e.target.classList.contains('remove-item')) {
    cartItems.splice(index, 1);
  } else if (e.target.classList.contains('plus')) {
    cartItems[index].quantity++;
  } else if (e.target.classList.contains('minus')) {
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
    } else {
      cartItems.splice(index, 1);
    }
  }
  updateCart();
});

if (openCart) openCart.addEventListener('click', (e) => {
  e.preventDefault();
  cartOverlay.classList.add('active');
});
if (closeCart) closeCart.addEventListener('click', () => {
  cartOverlay.classList.remove('active');
});

// Inicializar todo
document.addEventListener("DOMContentLoaded", () => {
  renderCatalogo();
  updateCart();
});



