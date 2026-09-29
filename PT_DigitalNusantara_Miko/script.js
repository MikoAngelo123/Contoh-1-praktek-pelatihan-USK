// File: script.js (Validasi Form Kontak)
function validateForm(event) {
    event.preventDefault();

    let nama = document.getElementById('nama').value.trim();
    let email = document.getElementById('email').value.trim();
    let pesan = document.getElementById('pesan').value.trim();

    let isValid = true;

    // Reset pesan error
    document.getElementById('errorNama').innerText = '';
    document.getElementById('errorEmail').innerText = '';
    document.getElementById('errorPesan').innerText = '';
    document.getElementById('alertSukses').classList.add('d-none');

    // 1. Validasi Nama tidak boleh kosong
    if (nama === "") {
        document.getElementById('errorNama').innerText = "Nama tidak boleh kosong!";
        isValid = false;
    }

    // 2. Validasi Email harus valid
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById('errorEmail').innerText = "Email wajib diisi!";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('errorEmail').innerText = "Format email tidak valid!";
        isValid = false;
    }

    // 3. Validasi Pesan wajib diisi
    if (pesan === "") {
        document.getElementById('errorPesan').innerText = "Pesan wajib diisi!";
        isValid = false;
    }

    // Jika lolos semua validasi
    if (isValid) {
        document.getElementById('alertSukses').classList.remove('d-none');
        document.getElementById('formKontak').reset();
    }

    return false;
}