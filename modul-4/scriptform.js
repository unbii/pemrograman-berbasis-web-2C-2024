document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
  
    // Mengambil nilai input
    const productName = document.getElementById('productName').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;
  
    // Menampilkan data pemesanan
    alert(`Produk: ${productName}\nJumlah: ${quantity}\nAlamat Pengiriman: ${address}`);
  
    // Mengosongkan form setelah data ditampilkan
    document.getElementByIad('orderForm').reset();
  });
  const nextPageBtn = document.getElementById('nextPageBtn');

nextPageBtn.addEventListener('click', () => {
    // Ganti 'halaman-selanjutnya.html' dengan nama file halaman selanjutnya yang ingin di buka
    window.location.href = 'terimkasih.html';
});