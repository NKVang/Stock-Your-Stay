
var items = [
    { title: "aItem", price: "10", dateAdded: "1"},
    { title: "bItem", price: "11", dateAdded: "2"},
    { title: "cItem", price: "12", dateAdded: "3"},
    { title: "dItem", price: "13", dateAdded: "4"},
];

function sortAZ(items) {
    items.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
}

function sortZA(items) {
    items.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1);
}

// Smallest value = lowest price
function sortPriceLow(items) {
    items.sort((a, b) => a.price - b.price);
}

// Largest value = highest price
function sortPriceHigh(items) {
    items.sort((a, b) => b.price - a.price);
}

// Largest value = most recent
function sortDateNew(items) {
    items.sort((a, b) => b.dateAdded - a.dateAdded);
}

// Smallest value = oldest
function sortDateOld(items) {
    items.sort((a, b) => a.dateAdded - b.dateAdded);
}