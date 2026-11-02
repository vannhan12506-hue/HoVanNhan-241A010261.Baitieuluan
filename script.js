// ===== Danh mục =====
const categories = [
  { key: 'all', label: 'Tất cả' },
  { key: 'bd-quanao', label: 'Quần áo bóng đá' },
  { key: 'bd-giay', label: 'Giày bóng đá' },
  { key: 'bd-bong', label: 'Bóng đá' },
  { key: 'bc-giay', label: 'Giày bóng chuyền' },
  { key: 'dungcu', label: 'Dụng cụ tập luyện' },
  { key: 'bc-quanao', label: 'Quần áo bóng chuyền' }
];

// ===== Sản phẩm =====
// Muốn dùng ảnh thật: thêm thuộc tính img: 'images/ten-file.jpg'
const products = [
  { id: 1,  name: 'Áo đấu bóng đá Pro 2026',          cat: 'bd-quanao', price: 289000,  icon: 'jersey', color: '#e63946' },
  { id: 2,  name: 'Bộ quần áo bóng đá trẻ em',        cat: 'bd-quanao', price: 245000,  icon: 'jersey', color: '#1d4ed8' },
  { id: 3,  name: 'Giày đinh TF Striker',             cat: 'bd-giay',   price: 890000,  icon: 'boot',   color: '#111827' },
  { id: 4,  name: 'Giày đinh FG Speed Pro',           cat: 'bd-giay',   price: 1250000, icon: 'boot',   color: '#f59e0b' },
  { id: 5,  name: 'Bóng đá số 5 thi đấu',             cat: 'bd-bong',   price: 320000,  icon: 'ball' },
  { id: 6,  name: 'Bóng đá số 4 tập luyện',           cat: 'bd-bong',   price: 210000,  icon: 'ball' },
  { id: 7,  name: 'Giày bóng chuyền Court Lite',      cat: 'bc-giay',   price: 720000,  icon: 'vshoe',  color: '#facc15' },
  { id: 8,  name: 'Giày bóng chuyền chống trượt Pro', cat: 'bc-giay',   price: 980000,  icon: 'vshoe',  color: '#374151' },
  { id: 9,  name: 'Bộ nón tập 20 chiếc',              cat: 'dungcu',    price: 120000,  icon: 'cone',   color: '#f97316' },
  { id: 10, name: 'Thang tốc độ & rào nhảy',          cat: 'dungcu',    price: 350000,  icon: 'ladder', color: '#22c55e' },
  { id: 11, name: 'Bộ quần áo bóng chuyền nữ',        cat: 'bc-quanao', price: 390000,  icon: 'vjersey', color: '#ec4899' },
  { id: 12, name: 'Bộ quần áo bóng chuyền nam',       cat: 'bc-quanao', price: 390000,  icon: 'vjersey', color: '#1e3a8a' }
];


// ===== Ảnh sản phẩm =====
// Lưu ảnh vào thư mục images/ cạnh index.html đúng tên dưới đây.
// Chưa có ảnh thì sản phẩm tự hiện hình minh họa.
const PHOTOS = {
  1: 'images/ao-dau-pro-2026.jpg',
  2: 'images/bo-ao-bong-da-tre-em.jpg',
  3: 'images/giay-tf-striker.jpg',
  4: 'images/giay-fg-speed-pro.jpg',
  5: 'images/bong-so-5.jpg',
  6: 'images/bong-so-4.jpg',
  7: 'images/giay-bong-chuyen-court-lite.jpg',
  8: 'images/giay-bong-chuyen-chong-truot.jpg',
  9: 'images/non-tap-20-chiec.jpg',
  10: 'images/thang-toc-do.jpg',
  11: 'images/ao-bong-chuyen-so-7.jpg',
  12: 'images/bo-the-thao-do-do.jpg'
};
products.forEach(p => { p.img = PHOTOS[p.id]; });

// ===== Hình minh họa SVG =====
const ICONS = {
  jersey: c => `<svg viewBox="0 0 120 100"><path d="M42 8 Q60 24 78 8 L108 26 L96 46 L86 40 L86 94 L34 94 L34 40 L24 46 L12 26 Z" fill="${c}"/><path d="M42 8 Q60 24 78 8" fill="none" stroke="#fff" stroke-width="3"/><text x="60" y="66" font-size="18" font-weight="bold" text-anchor="middle" fill="#fff">10</text></svg>`,
  vjersey: c => `<svg viewBox="0 0 120 100"><path d="M42 8 L60 30 L78 8 L108 26 L96 46 L86 40 L86 94 L34 94 L34 40 L24 46 L12 26 Z" fill="${c}"/><rect x="34" y="62" width="52" height="8" fill="#fff"/></svg>`,
  boot: c => `<svg viewBox="0 0 120 100"><path d="M14 22 L40 22 L50 56 L98 62 Q112 66 112 78 L112 84 L14 84 Z" fill="${c}"/><rect x="14" y="84" width="98" height="8" rx="3" fill="#e5e7eb"/><rect x="22" y="92" width="8" height="4" fill="#374151"/><rect x="60" y="92" width="8" height="4" fill="#374151"/><rect x="94" y="92" width="8" height="4" fill="#374151"/></svg>`,
  vshoe: c => `<svg viewBox="0 0 120 100"><path d="M14 22 L40 22 L50 56 L98 62 Q112 66 112 78 L112 84 L14 84 Z" fill="${c}"/><path d="M30 50 L92 60" stroke="#fff" stroke-width="4"/><rect x="14" y="84" width="98" height="8" rx="3" fill="#f3f4f6"/></svg>`,
  ball: () => `<svg viewBox="0 0 120 100"><circle cx="60" cy="50" r="42" fill="#fff" stroke="#374151" stroke-width="3"/><polygon points="60,30 74,40 69,57 51,57 46,40" fill="#111827"/><path d="M60 30 L60 10 M74 40 L94 33 M69 57 L82 76 M51 57 L38 76 M46 40 L26 33" stroke="#111827" stroke-width="3"/></svg>`,
  cone: c => `<svg viewBox="0 0 120 100"><polygon points="60,12 84,84 36,84" fill="${c}"/><rect x="26" y="84" width="68" height="8" rx="3" fill="#374151"/></svg>`,
  ladder: c => `<svg viewBox="0 0 120 100"><g fill="none" stroke="${c}" stroke-width="5"><rect x="12" y="20" width="96" height="60" rx="4"/><path d="M12 40 H108 M12 60 H108 M45 20 V80 M75 20 V80"/></g></svg>`
};

const visual = p => `<span class="pic">${ICONS[p.icon](p.color)}${p.img ? `<img src="${p.img}" alt="${p.name}" onerror="this.remove()">` : ''}</span>`;
const BADGES = { 1: 'Hot', 4: 'Mới', 7: 'Bán chạy', 11: 'Mới' };
const fmt = n => n.toLocaleString('vi-VN') + ' đ';

// ===== Trạng thái =====
let currentCat = 'all';
let keyword = '';
const cart = []; // [{ id, qty }]

// ===== Phần tử DOM =====
const chips = document.getElementById('chips');
const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

// ===== Hiển thị =====
function renderChips() {
  chips.innerHTML = categories.map(c =>
    `<button class="chip ${c.key === currentCat ? 'active' : ''}" data-cat="${c.key}">${c.label}</button>`
  ).join('');
}

function renderProducts() {
  const list = products.filter(p =>
    (currentCat === 'all' || p.cat === currentCat) &&
    p.name.toLowerCase().includes(keyword)
  );
  grid.innerHTML = list.length
    ? list.map(p => `
      <div class="card">
        ${BADGES[p.id] ? `<span class="badge">${BADGES[p.id]}</span>` : ''}
        <div class="thumb" style="--glow:${p.color || '#0E3B2E'}2e">${visual(p)}</div>
        <div class="info">
          <h3>${p.name}</h3>
          <div class="price">${fmt(p.price)}</div>
          <button class="add" data-id="${p.id}">Thêm vào giỏ</button>
        </div>
      </div>`).join('')
    : '<p class="empty">Không tìm thấy sản phẩm phù hợp.</p>';
}

function renderCart() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCount.textContent = count;

  let total = 0;
  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty">Giỏ hàng đang trống.</p>';
  } else {
    cartItems.innerHTML = cart.map(i => {
      const p = products.find(x => x.id === i.id);
      total += p.price * i.qty;
      return `
        <div class="cart-item">
          <div class="ci-visual">${visual(p)}</div>
          <div class="ci-info">
            <p>${p.name}</p>
            <small>${fmt(p.price)}</small>
            <div class="qty">
              <button data-id="${p.id}" data-d="-1">−</button>
              <span>${i.qty}</span>
              <button data-id="${p.id}" data-d="1">+</button>
            </div>
          </div>
        </div>`;
    }).join('');
  }
  cartTotal.textContent = fmt(total);
}

// ===== Giỏ hàng =====
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart.splice(cart.indexOf(item), 1);
  renderCart();
}

// ===== Sự kiện =====
chips.addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  currentCat = btn.dataset.cat;
  renderChips();
  renderProducts();
});

grid.addEventListener('click', e => {
  const btn = e.target.closest('.add');
  if (btn) addToCart(Number(btn.dataset.id));
});

searchInput.addEventListener('input', e => {
  keyword = e.target.value.trim().toLowerCase();
  renderProducts();
});

cartItems.addEventListener('click', e => {
  const btn = e.target.closest('button[data-d]');
  if (btn) changeQty(Number(btn.dataset.id), Number(btn.dataset.d));
});

cartBtn.addEventListener('click', () => cartOverlay.classList.add('show'));
closeCart.addEventListener('click', () => cartOverlay.classList.remove('show'));
cartOverlay.addEventListener('click', e => {
  if (e.target === cartOverlay) cartOverlay.classList.remove('show');
});

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Giỏ hàng đang trống!');
    return;
  }
  alert(`Cảm ơn bạn đã đặt hàng tại SportZone!\nTổng tiền: ${cartTotal.textContent}`);
  cart.length = 0;
  renderCart();
  cartOverlay.classList.remove('show');
});

// ===== Chế độ sáng / tối =====
const themeBtn = document.getElementById('themeBtn');

function applyTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  themeBtn.textContent = mode === 'dark' ? '☀️' : '🌙';
}

let savedTheme = 'light';
try { savedTheme = localStorage.getItem('sportzone-theme') || 'light'; } catch (e) {}
applyTheme(savedTheme);

themeBtn.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('sportzone-theme', next); } catch (e) {}
});

// ===== Khởi tạo =====
renderChips();
renderProducts();
renderCart();
