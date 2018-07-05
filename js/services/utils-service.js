console.log('utils service');

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function loadFromStorage(key) {
    var str = localStorage.getItem(key);
    return JSON.parse(str);
}

export default {
    saveToStorage,
    loadFromStorage
}