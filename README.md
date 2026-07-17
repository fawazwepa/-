# تطبيق مستودع الفواز للأدوية البشرية
# Al-Fawaz Pharmaceutical Warehouse Application

## 📱 نظرة عامة | Overview

تطبيق احترافي لإدارة مستودع الأدوية البشرية مع واجهة عربية كاملة وتصميم حديث.

A professional pharmaceutical warehouse management application with full Arabic interface and modern design.

---

## ✨ الميزات الرئيسية | Key Features

✅ **البحث السهل عن الأدوية** - Easy Medicine Search
✅ **تطلب الطلبيات بسهولة** - Streamlined Order Management
✅ **عرض بطاقات المنتجات الديناميكية** - Dynamic Product Cards with Watermark Effect
✅ **تصنيف حسب الشركة المصنعة** - Filter by Manufacturer
✅ **نظام الإضافات والخصومات** - Bonus & Discount System
✅ **واجهة عربية RTL متكاملة** - Complete Arabic RTL Interface
✅ **تصميم متجاوب** - Fully Responsive Design
✅ **التكامل مع Google Cloud** - Google Cloud Integration
✅ **دعم AppSheet** - AppSheet Compatible

---

## 🏢 الشركات المصنعة المدعومة | Supported Manufacturers

1. **دومينا** (Domina) - 🔵 أزرق
2. **ميديكو** (Medico) - 🔴 أحمر
3. **سيليا** (Celia) - 🟢 أخضر
4. **بركات** (Barakat) - 🟡 ذهبي
5. **لاما فارما** (Lama Pharma) - 🟣 بنفسجي

---

## 📂 هيكل المشروع | Project Structure

```
al-fawaz-warehouse/
├── index.html                 # الصفحة الرئيسية
├── css/
│   ├── styles.css             # الأنماط الأساسية
│   ├── cards.css              # تصاميم البطاقات الديناميكية
│   └── responsive.css         # التصميم المتجاوب
├── js/
│   ├── app.js                 # منطق التطبيق الأساسي
│   ├── search.js              # وظائف البحث
│   ├── manufacturers.js       # إدارة الشركات المصنعة
│   └── appsheet-connector.js  # تكامل AppSheet
├── data/
│   ├── medicines.json         # بيانات الأدوية
│   ├── manufacturers.json     # بيانات الشركات
│   └── appsheet-config.json   # إعدادات AppSheet
└── README.md                  # هذا الملف
```

---

## 🎯 المميزات المتقدمة | Advanced Features

### 1. بطاقات المنتجات ثلاثية الطبقات | 3-Layer Product Cards
- **الطبقة 1**: خلفية متدرجة (Base Background)
- **الطبقة 2**: علامة مائية شفافة للشركة (Watermark Logo)
- **الطبقة 3**: محتوى مقروء بالكامل (Foreground Content)

### 2. البحث المتقدم | Advanced Search
- البحث النصي الكامل
- تصفية حسب الشركة المصنعة
- تصفية حسب نطاق السعر
- تصفية حسب حالة المخزون
- اقتراحات البحث الذكية

### 3. إدارة المخزون | Inventory Management
- تنبيهات المخزون المنخفض
- تنبيهات انتهاء الصلاحية
- تتبع كمية المخزون
- حالة المخزون الحي

### 4. سلة التسوق | Shopping Cart
- إضافة الأدوية إلى السلة
- حساب الإجمالي التلقائي
- إدار�� الكميات
- معالجة الطلبيات

---

## 🚀 البدء السريع | Quick Start

### الخطوة 1: استنساخ المستودع
```bash
git clone https://github.com/fawazwepa/al-fawaz-warehouse.git
cd al-fawaz-warehouse
```

### الخطوة 2: فتح التطبيق
افتح `index.html` في متصفحك أو استخدم خادم محلي:
```bash
python -m http.server 8000
# أو
php -S localhost:8000
# أو
npx http-server
```

ثم توجه إلى `http://localhost:8000`

### الخطوة 3: تكوين AppSheet
1. انتقل إلى [AppSheet](https://www.appsheet.com)
2. أنشئ تطبيقًا جديدًا
3. استيراد البيانات من `data/medicines.json`
4. تطبيق الإعدادات من `data/appsheet-config.json`

---

## 🎨 التصميم ثلاثي الطبقات | 3-Layer Watermark Design

### البنية:

**الطبقة 1 - الخلفية الأساسية** (z-index: 1)
```css
background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 240, 240, 0.98));
```

**الطبقة 2 - علامة مائية للشركة** (z-index: 2)
- شعار الشركة المصنعة
- موضع مطلق (position: absolute)
- شفافية منخفضة (opacity: 0.12)
- تغطي معظم مساحة البطاقة

**الطبقة 3 - المحتوى الأمامي** (z-index: 3)
- اسم الدواء
- مؤشر الإضافة (أيقونة + نص)
- السعر
- أيقونة سلة التسوق
- قابل للقراءة بنسبة 100%

---

## 🔧 المتطلبات | Requirements

- ✅ متصفح حديث (Chrome, Firefox, Safari, Edge)
- ✅ Connection إلى Google Cloud (للعمل مع AppSheet)
- ✅ JavaScript مفعل
- ✅ دعم RTL (اللغات من اليمين إلى اليسار)
- ✅ الوصول إلى الإنترنت

---

## 📊 بيانات العينة | Sample Data

التطبيق يتضمن بيانات عينة للأدوية والشركات المصنعة:

### أمثلة الأدوية:
1. **باراسيتامول** (500 ملغ) - دومينا - 2.50 ر.ي - 20% إضافة
2. **أموكسيسيلين** (250 ملغ) - ميديكو - 3.75 ر.ي - 15% إضافة
3. **فيتامين سي** (1000 ملغ) - سيليا - 1.25 ر.ي - 25% إضافة
4. **أسبرين** (500 ملغ) - بركات - 1.80 ر.ي - 10% إضافة
5. **ميتفورمين** (500 ملغ) - لاما فارما - 4.50 ر.ي - 18% إضافة

---

## 🔐 الأمان | Security

- ✅ البيانات محفوظة في Google Cloud
- ✅ الوصول محدود بالمستخدمين المصرح لهم
- ✅ تشفير البيانات أثناء النقل
- ✅ التحقق من البيانات على جانب العميل
- ✅ معايير GDPR المتوافقة

---

## 📱 التطبيق على الهاتف المحمول | Mobile App

يمكن تثبيت التطبيق كتطبيق محمول عبر AppSheet:

**رابط التطبيق:**
```
https://www.appsheet.com/newshortcut/6b612193-515c-4577-a61c-65b22b5e0dcc
```

---

## 🌐 دعم اللغات | Language Support

- ✅ **العربية** (الأساسية)
- ✅ **الإنجليزية** (البيانات)
- 🔄 إضافة لغات إضافية قريباً

---

## 📧 التواصل | Contact

**فواز البشير**
- 📱 WhatsApp: [https://wa.me/qr/2LF3PO7NH3PNF1](https://wa.me/qr/2LF3PO7NH3PNF1)
- 📘 Facebook: [https://www.facebook.com/share/1EKasNNroD/](https://www.facebook.com/share/1EKasNNroD/)
- 🌐 Google Cloud: al-fawaz-a-warehouse (Project ID: 406977991839)

---

## 📄 الترخيص | License

جميع الحقوق محفوظة لـ مستودع الفواز

All rights reserved © Al-Fawaz Warehouse

---

## 🙏 شكراً | Thank You

شكراً لاستخدام تطبيق مستودع الفواز. نتطلع لخدمتك!

Thank you for using Al-Fawaz Warehouse Application. We look forward to serving you!

---

**آخر تحديث | Last Updated:** 2026-07-17
