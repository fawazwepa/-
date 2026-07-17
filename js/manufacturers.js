function getMedicinesByManufacturer(manufacturer) {
    return allMedicines.filter(m => m.manufacturer === manufacturer);
}

window.manufacturerFunctions = {
    getMedicinesByManufacturer: getMedicinesByManufacturer
};
