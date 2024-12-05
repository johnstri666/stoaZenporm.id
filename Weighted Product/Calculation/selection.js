// Menyimpan jenis mobil yang dipilih di Local Storage
function goToCarPage(carType) {
  // Menyimpan pilihan jenis mobil
  localStorage.setItem("selectedCarType", carType);

  // Arahkan pengguna ke halaman index.html
  window.location.href = "index.html";
}
