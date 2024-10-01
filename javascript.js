// Mendapatkan elemen yang dibutuhkan
const slider = document.querySelector(".slider .item");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

// Mendapatkan daftar gambar dan menentukan jumlah gambar
const images = slider.querySelectorAll("img");
const totalImages = images.length;
let currentIndex = 0;

// Fungsi untuk mendapatkan lebar gambar yang sesuai dengan layar saat ini
function getImageWidth() {
  return images[0].clientWidth; // Mendapatkan lebar gambar berdasarkan ukuran layar saat ini
}

// Fungsi untuk mengupdate posisi slider
function updateSliderPosition() {
  const translateXValue = -currentIndex * getImageWidth();
  slider.style.transform = `translateX(${translateXValue}px)`;
  slider.style.transition = "transform 0.5s ease"; // Menambahkan animasi saat pergerakan
}

// Event listener untuk tombol kanan (geser ke gambar berikutnya)
rightArrow.addEventListener("click", () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

// Event listener untuk tombol kiri (geser ke gambar sebelumnya)
leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

// Pastikan slider berfungsi saat jendela diubah ukurannya
window.addEventListener("resize", () => {
  updateSliderPosition(); // Update posisi slider ketika ukuran layar berubah
});
