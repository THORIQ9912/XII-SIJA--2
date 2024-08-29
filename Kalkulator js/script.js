let metode = prompt('Pilih (+, -, *, /, %) \n + = Penjumlahan \n - = Pengurangan \n * = Perkalian \n / = Pembagian \n % = Pembagian Modulus');
let masukkanNilai1 = parseInt(prompt('Masukkan Nilai Pertama:'));
let masukkanNilai2 = parseInt(prompt('Masukkan Nilai Kedua:'));
let nilaiAkhir = '';

if (metode == '+') {
    nilaiAkhir = masukkanNilai1 + masukkanNilai2;
} else if (metode == '-') {
    nilaiAkhir = masukkanNilai1 - masukkanNilai2;
} else if (metode == '*') {
    nilaiAkhir = masukkanNilai1 * masukkanNilai2;
} else if (metode == '/') {
    nilaiAkhir = masukkanNilai1 / masukkanNilai2;
} else if (metode == '%') {
    nilaiAkhir = masukkanNilai1 % masukkanNilai2;
} else {
    alert('Anda salah memasukkan metode.');
}

if (nilaiAkhir !== '') {
    alert(`Nilai ${masukkanNilai1} ${metode} ${masukkanNilai2} hasilnya adalah ${nilaiAkhir}`);
}

alert('Terima kasih sudah menghitung');
