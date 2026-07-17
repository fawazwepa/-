let allMedicines = [];
let allManufacturers = [];
let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    loadMedicines();
    loadManufacturers();
    renderMedicines();
    renderManufacturerFilter();
    setupEventListeners();
});

function loadMedicines() {
    allMedicines = [
        { id: 1, name_ar: 'باراسيتامول', manufacturer: 'Domina', dosage: '500 ملغ', quantity: 150, price: 2.50, expiry_date: '2026-12-31', description: 'مسكن ألم وخافض حرارة', bonus: '20%' },
        { id: 2, name_ar: 'أموكسيسيلين', manufacturer: 'Medico', dosage: '250 ملغ', quantity: 80, price: 3.75, expiry_date: '2026-10-15', description: 'مضاد حيوي واسع الطيف', bonus: '15%' },
        { id: 3, name_ar: 'فيتامين سي', manufacturer: 'Celia', dosage: '1000 ملغ', quantity: 200, price: 1.25, expiry_date: '2027-06-30', description: 'مكمل غذائي - تقوية المناعة', bonus: '25%' },
        { id: 4, name_ar: 'أسبرين', manufacturer: 'Barakat', dosage: '500 ملغ', quantity: 120, price: 1.80, expiry_date: '2026-11-20', description: 'مسكن ألم - مميع الدم', bonus: '10%' },
        { id: 5, name_ar: 'ميتفورمين', manufacturer: 'Lama Pharma', dosage: '500 ملغ', quantity: 100, price: 4.50, expiry_date: '2026-09-10', description: 'لعلاج السكري من النوع الثاني', bonus: '18%' }
    ];
}

function loadManufacturers() {
    allManufacturers = [
        { name: 'Domina', name_ar: 'دومينا', color: '#1E90FF' },
        { name: 'Medico', name_ar: 'ميديكو', color: '#FF6B6B' },
        { name: 'Celia', name_ar: 'سيليا', color: '#51CF66' },
        { name: 'Barakat', name_ar: 'بركات', color: '#FFD700' },
        { name: 'Lama Pharma', name_ar: 'لاما فارما', color: '#9370DB' }
    ];
}

function renderMedicines(medicinesToRender = allMedicines) {
    const medicinesGrid = document.getElementById('medicinesGrid');
    medicinesGrid.innerHTML = '';

    if (medicinesToRender.length === 0) {
        medicinesGrid.innerHTML = '<div class="no-results" style="grid-column: 1 / -1;"><i class="fas fa-search"></i><p>لم يتم العثور على أدوية</p></div>';
        return;
    }

    medicinesToRender.forEach(medicine => {
        const manufacturerClass = getManufacturerClass(medicine.manufacturer);
        const isOutOfStock = medicine.quantity === 0;
        const stockStatus = isOutOfStock ? 'out-of-stock' : medicine.quantity <= 20 ? 'low-stock' : 'in-stock';
        const stockText = isOutOfStock ? 'غير متوفر' : medicine.quantity <= 20 ? 'مخزون منخفض' : 'متوفر';

        const card = document.createElement('div');
        card.className = `medicine-card ${manufacturerClass}`;
        card.innerHTML = `
            <div class="card-content">
                <div class="card-header">
                    <span class="card-brand">${medicine.manufacturer}</span>
                    <span class="card-bonus">${medicine.bonus}</span>
                </div>
                <h3 class="medicine-name">${medicine.name_ar}</h3>
                <p class="medicine-description">${medicine.description}</p>
                <div class="medicine-details">
                    <div class="detail-item"><span class="detail-label">التركيزة:</span><span>${medicine.dosage}</span></div>
                    <div class="detail-item"><span class="detail-label">الكمية:</span><span>${medicine.quantity} وحدة</span></div>
                </div>
                <div class="quantity-status ${stockStatus}">
                    <i class="fas ${stockStatus === 'in-stock' ? 'fa-check-circle' : stockStatus === 'low-stock' ? 'fa-exclamation-circle' : 'fa-times-circle'}"></i>
                    <span>${stockText}</span>
                </div>
                <div class="card-footer">
                    <div class="medicine-price">${medicine.price.toFixed(2)} <span style="font-size: 0.875rem;">ر.ي</span></div>
                    <button class="add-to-cart-btn" onclick="addToCart(${medicine.id})" ${isOutOfStock ? 'disabled' : ''}>
                        <i class="fas fa-shopping-cart"></i>
                        <span>${isOutOfStock ? 'غير متوفر' : 'أضف'}</span>
                    </button>
                </div>
            </div>
        `;
        medicinesGrid.appendChild(card);
    });
}

function getManufacturerClass(manufacturer) {
    const classMap = { 'Domina': 'domina', 'Medico': 'medico', 'Celia': 'celia', 'Barakat': 'barakat', 'Lama Pharma': 'lama' };
    return classMap[manufacturer] || '';
}

function addToCart(medicineId) {
    const medicine = allMedicines.find(m => m.id === medicineId);
    if (medicine) showNotification(`${medicine.name_ar} تمت إضافته إلى السلة`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = 'position: fixed; top: 20px; right: 20px; background: linear-gradient(135deg, #1E90FF, #FF6B6B); color: white; padding: 1rem 1.5rem; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); z-index: 1000; font-family: "Cairo", Arial, sans-serif;';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('input', handleSearch);
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    if (!searchTerm) {
        renderMedicines();
        return;
    }
    const filtered = allMedicines.filter(medicine => 
        medicine.name_ar.includes(searchTerm) || medicine.description.includes(searchTerm) || medicine.manufacturer.toLowerCase().includes(searchTerm)
    );
    renderMedicines(filtered);
}

function filterByManufacturer(manufacturer) {
    if (manufacturer === 'all') {
        renderMedicines();
    } else {
        const filtered = allMedicines.filter(m => m.manufacturer === manufacturer);
        renderMedicines(filtered);
    }
}

function renderManufacturerFilter() {
    const filterContainer = document.getElementById('manufacturerFilter');
    if (!filterContainer) return;
    filterContainer.innerHTML = '';
    
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.textContent = 'الكل';
    allBtn.onclick = () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        allBtn.classList.add('active');
        filterByManufacturer('all');
    };
    filterContainer.appendChild(allBtn);
    
    allManufacturers.forEach(manufacturer => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.style.borderColor = manufacturer.color;
        btn.style.color = manufacturer.color;
        btn.textContent = manufacturer.name_ar;
        btn.onclick = () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByManufacturer(manufacturer.name);
        };
        filterContainer.appendChild(btn);
    });
}
