console.log('utils service');

<<<<<<< HEAD
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
=======
export default {
    saveToStorage,
    loadFromStorage,
    makeid
}


function saveToStorage(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}
  
function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function makeid(length=8) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
>>>>>>> bdf5ee91f534c4377c4696a116f80a78ea8af67b
}