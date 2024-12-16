const display = document.getElementById('display');

// Menambahkan nilai ke layar
function appendValue(value) {
    display.value += value;
}

// Menghapus layar
function clearDisplay() {
    display.value = '';
}

// Melakukan perhitungan
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Input tidak valid');
        clearDisplay();
    }
}
