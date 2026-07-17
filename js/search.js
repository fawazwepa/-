function advancedSearch(query, filters = {}) {
    let results = allMedicines;
    
    if (query) {
        const q = query.toLowerCase().trim();
        results = results.filter(medicine => 
            medicine.name_ar.includes(q) ||
            medicine.name_en.toLowerCase().includes(q) ||
            medicine.description.includes(q) ||
            medicine.manufacturer.toLowerCase().includes(q)
        );
    }
    
    if (filters.manufacturer && filters.manufacturer !== 'all') {
        results = results.filter(m => m.manufacturer === filters.manufacturer);
    }
    
    return results;
}

window.searchFunctions = {
    advancedSearch: advancedSearch
};
