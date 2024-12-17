// Event listener untuk formulir
document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah submit form default

    // Ambil nilai dari form
    const name = document.getElementById("name").value.trim();
    const menuItem = document.getElementById("menu-item").value;
    const quantity = document.getElementById("quantity").value;

    // Validasi input (opsional, tapi disarankan)
    if (!name || !menuItem || quantity <= 0) {
        alert("Mohon isi semua kolom dengan benar.");
        return;
    }

    // Format pesan untuk WhatsApp
    const message = `Halo, saya ingin memesan:\n- Nama: ${name}\n- Menu: ${menuItem}\n- Jumlah: ${quantity}`;

    // Nomor WhatsApp tujuan (format internasional tanpa "+")
    const phoneNumber = "6288223881917";

    // Buat URL WhatsApp
    const whatsappURL = `https://wa.me/${6288223881917}?text=${encodeURIComponent(message)}`;

    // Buka URL di tab baru
    window.open(whatsappURL, "_blank");
});
