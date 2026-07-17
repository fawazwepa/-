const AppSheetConnector = {
    init: function() {
        console.log('AppSheet Connector Initialized');
        this.exportData();
    },
    
    exportData: function() {
        const exportData = {
            app_name: 'Al-Fawaz Warehouse',
            app_version: '1.0.0',
            timestamp: new Date().toISOString(),
            medicines: Al_Fawaz.getMedicines(),
            manufacturers: Al_Fawaz.getManufacturers(),
            metadata: {
                total_medicines: Al_Fawaz.getMedicines().length,
                total_manufacturers: Al_Fawaz.getManufacturers().length,
                currency: 'OMR'
            }
        };
        
        window.AppSheetData = exportData;
        return exportData;
    },
    
    getAppSheetFormat: function() {
        const medicines = Al_Fawaz.getMedicines();
        return medicines.map(m => ({
            'كود المنتج': m.id,
            'اسم الدواء': m.name_ar,
            'Medicine Name': m.name_en,
            'التركيزة': m.dosage,
            'الكمية': m.quantity,
            'السعر': m.price,
            'الشركة المصنعة': m.manufacturer
        }));
    }
};

document.addEventListener('DOMContentLoaded', function() {
    AppSheetConnector.init();
    window.AppSheetConnector = AppSheetConnector;
});
