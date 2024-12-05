// Data mobil (contoh)
const cars = [
  ///SUV Car
  {
    id: 1,
    name: "Lamborghini Urus",
    price: 7000000000,
    year: 2012,
    capacity: 5,
    fuel_consumption: 7.8,
    type: ["SUV", "Sport"],
    url: "/Car Slide/Urus/index.html",
  },

  {
    id: 3,
    name: "Mazda CX-3",
    price: 430000000,
    year: 2016,
    capacity: 5,
    fuel_consumption: 13,
    type: "SUV",
    url: "/Car Slide/Mazda CX3/index.html",
  },

  {
    id: 4,
    name: "Nissan Juke",
    price: 192000000,
    year: 2021,
    capacity: 5,
    fuel_consumption: 20,
    type: "SUV",
  },

  {
    id: 5,
    name: "Nissan Terra",
    price: 769800000,
    year: 2024,
    capacity: 7,
    fuel_consumption: 15,
    type: "SUV",
  },

  {
    id: 6,
    name: "Nissan X-Trail",
    price: 306000000,
    year: 2021,
    capacity: 7,
    fuel_consumption: 9.8,
    type: "SUV",
  },

  {
    id: 7,
    name: "Toyota Fortuner Legender",
    price: 3050000000,
    year: 2018,
    capacity: 7,
    fuel_consumption: 14.3,
    type: ["SUV", "Sport"],
  },

  {
    id: 8,
    name: "Toyota Highlander",
    price: 650000000,
    year: 2024,
    capacity: 7,
    fuel_consumption: 15.1,
    type: "SUV",
    url: "/Car Slide/Toyota Highlander/index.html",
  },

  {
    id: 9,
    name: "Toyota Raize",
    price: 238000000,
    year: 2023,
    capacity: 5,
    fuel_consumption: 15.2,
    type: "SUV",
  },

  ////Sport car
  {
    id: 11,
    name: "BMW-I8 Coupe",
    price: 4560000000,
    year: 2014,
    capacity: 4,
    fuel_consumption: 14.45,
    type: ["Sport", "Coupe"],
    url: "/Car Slide/BMW I8/index.html",
  },

  {
    id: 12,
    name: "Honda Civic Type-R",
    price: 1480000000,
    year: 2018,
    capacity: 4,
    fuel_consumption: 13.8,
    type: ["Sport", "Hatchback"],
    url: "/Car Slide/HondaCivicTypeR/index.html",
  },

  {
    id: 13,
    name: "Lamborghini Aventador SVJ",
    price: 22300000000,
    year: 2012,
    capacity: 2,
    fuel_consumption: 4.25,
    type: ["Sport", "Coupe"],
    url: "/Car Slide/L.aventador/index.html",
  },

  {
    id: 14,
    name: "Lamborghini Huracan",
    price: 8560000000,
    year: 2012,
    capacity: 5,
    fuel_consumption: 7.53,
    type: ["Sport", "Coupe"],
    url: "/Car Slide/Huracan/index.html",
  },

  {
    id: 15,
    name: "Mazda MX-5 RF",
    price: 935500000,
    year: 2017,
    capacity: 2,
    fuel_consumption: 9.6,
    type: ["Sport", "Coupe"],
    url: "/Car Slide/Mazda RX3/index.html",
  },

  {
    id: 16,
    name: "Mercedes-Benz CLA Class 200",
    price: 1255000000,
    year: 2021,
    capacity: 5,
    fuel_consumption: 9.6,
    type: ["Hatchback"],
  },

  ///Sedan Car ///
  {
    id: 17,
    name: "Chevrolet Cobalt SS",
    price: 85000000,
    year: 2006,
    capacity: 5,
    fuel_consumption: 7.8,
    type: ["Sedan", "Coupe"],
    url: "/Car Slide/Cherolet Cobalt SS/index.html",
  },

  {
    id: 18,
    name: "Toyota Camry",
    price: 887000000,
    year: 2004,
    capacity: 5,
    fuel_consumption: 24,
    type: "Sedan",
  },

  ///MPV Cars///
  {
    id: 19,
    name: "Toyota Avanza",
    price: 298400000,
    year: 2022,
    capacity: 7,
    fuel_consumption: 13.5,
    type: "MPV",
  },

  {
    id: 20,
    name: "Toyota Alphard",
    price: 1470000000,
    year: 2022,
    capacity: 7,
    fuel_consumption: 8,
    type: "MPV",
    url: "/Car Slide/Toyota Alphard/index.html",
  },

  ///Hatchback Cars///
  {
    id: 21,
    name: "Audi A3",
    price: 680200000,
    year: 2014,
    capacity: 5,
    fuel_consumption: 12.5,
    type: "Hatchback",
    url: "/Car Slide/Audi/index.html",
  },

  {
    id: 22,
    name: "Daihatsu Ayla",
    price: 189000000,
    year: 2021,
    capacity: 5,
    fuel_consumption: 16.7,
    type: "Hatchback",
    url: "/Car Slide/Daihatsu Ayla/index.html",
  },

  {
    id: 23,
    name: "Honda Brio",
    price: 152100000,
    year: 2014,
    capacity: 5,
    fuel_consumption: 15,
    type: "Hatchback",
    url: "/Car Slide/Honda Brio/index.html",
  },
  {
    id: 24,
    name: "Mini Cooper",
    price: 1030000000,
    year: 2018,
    capacity: 4,
    fuel_consumption: 16.7,
    type: "Hatchback",
  },
];

const selectedCarType = localStorage.getItem("selectedCarType");

// Filter mobil berdasarkan jenis yang dipilih
const filteredCars = cars.filter((car) => car.type.includes(selectedCarType));

// Menampilkan jenis mobil yang dipilih
document.getElementById("selectedCarType").textContent = selectedCarType;

// Fungsi untuk menghitung skor Weighted Product
function calculateWP(car, weights) {
  // Normalisasi bobot
  const totalWeight =
    weights.price + weights.year + weights.capacity + weights.fuelConsumption;
  const normalizedWeights = {
    price: weights.price / totalWeight, // cost
    year: weights.year / totalWeight, // benefit
    capacity: weights.capacity / totalWeight, // benefit
    fuelConsumption: weights.fuelConsumption / totalWeight, // cost
  };

  const normalizedValues = {
    price: car.price / getMinPrice(), // cost (mobil dibagi dengan harga terendah)
    year: car.year / getMaxYear(), // benefit (tahun dibagi dengan tahun tertinggi)
    capacity: car.capacity, // benefit (kapasitas langsung digunakan)
    fuelConsumption: car.fuel_consumption / getMinFuelConsumption(), // cost (konsumsi bahan bakar dibagi dengan yang terendah)
  };

  // Hitung WP score berdasarkan normalisasi nilai dan bobot
  return (
    Math.pow(normalizedValues.price, -normalizedWeights.price) * // cost
    Math.pow(normalizedValues.year, normalizedWeights.year) * // benefit
    Math.pow(normalizedValues.capacity, normalizedWeights.capacity) * // benefit
    Math.pow(
      normalizedValues.fuelConsumption,
      normalizedWeights.fuelConsumption
    ) // cost
  );
}

function getMinPrice() {
  // Fungsi untuk mendapatkan harga terendah dari data mobil
  return Math.min(...cars.map((car) => car.price));
}

function getMaxYear() {
  // Fungsi untuk mendapatkan tahun tertinggi dari data mobil
  return Math.max(...cars.map((car) => car.year));
}

function getMinFuelConsumption() {
  // Fungsi untuk mendapatkan konsumsi bahan bakar terendah dari data mobil
  return Math.min(...cars.map((car) => car.fuel_consumption));
}

function increaseValue(id) {
  const element = document.getElementById(id);
  let currentValue = parseInt(element.textContent);
  if (currentValue < 5) {
    currentValue += 1;
    element.textContent = currentValue;
  }
}

function decreaseValue(id) {
  const element = document.getElementById(id);
  let currentValue = parseInt(element.textContent);
  if (currentValue > 1) {
    currentValue -= 1;
    element.textContent = currentValue;
  }
}

function calculateDecision() {
  const priceWeight = parseInt(document.getElementById("price").textContent);
  const yearWeight = parseInt(document.getElementById("year").textContent);
  const capacityWeight = parseInt(
    document.getElementById("capacity").textContent
  );
  const fuelWeight = parseInt(document.getElementById("fuel").textContent);

  if (
    isNaN(priceWeight) ||
    isNaN(yearWeight) ||
    isNaN(capacityWeight) ||
    isNaN(fuelWeight)
  ) {
    alert("Please fill all weights before calculating.");
    return;
  }

  const weights = {
    price: priceWeight,
    year: yearWeight,
    capacity: capacityWeight,
    fuelConsumption: fuelWeight,
  };

  filteredCars.forEach((car) => {
    car.wp_score = calculateWP(car, weights);
  });

  filteredCars.sort((a, b) => b.wp_score - a.wp_score);

  const rankingTableBody = document.querySelector("#rankingTable tbody");
  rankingTableBody.innerHTML = "";

  filteredCars.slice(0, 5).forEach((car, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${car.name}</td>
      <td>${car.price}</td>
      <td>${car.year}</td>
      <td>${car.capacity}</td>
      <td>${car.fuel_consumption}</td>
      <td>${car.wp_score.toFixed(6)}</td>
      <td>
      ${
        car.url && car.url.trim() !== ""
          ? `<button class="pilih-btn" onclick="goToDetails('${car.url}')">Discover</button>`
          : "N/A"
      } 
      </td>
    `;

    rankingTableBody.appendChild(row);
  });

  // Tampilkan jenis mobil yang dipilih
  document.getElementById("resultCarType").textContent = selectedCarType;
  document.getElementById("inputPage").style.display = "none";
  document.getElementById("resultPage").style.display = "block";
}

function goToDetails(url) {
  if (url && url.trim() !== "") {
    console.log("Redirecting to:", url); // Untuk memastikan URL yang benar dikirim
    window.location.href = url; // Arahkan ke halaman yang sesuai
  } else {
    alert("Halaman detail belum tersedia untuk mobil ini.");
  }
}

function goBack() {
  document.getElementById("inputPage").style.display = "block";
  document.getElementById("resultPage").style.display = "none";
}

const outerCircle = document.querySelector(".outer-circle");
const needle = document.querySelector(".needle");
const label = document.querySelector(".label span");
const radioButtons = document.querySelectorAll('input[name="level"]');

function base() {
  outerCircle.style.backgroundImage = "none";
  needle.style.transform = "translate(-50%, -50%) rotate(-100deg)";
  label.textContent = "Not Too Important";
}
function beginner() {
  outerCircle.style.backgroundImage =
    "linear-gradient(to right, rgba(4, 161, 214, 0.8) 10%, rgba(4, 161, 214, 0.8) 20%, transparent 32%)";
  needle.style.transform = "translate(-50%, -50%) rotate(-50deg)";
  label.textContent = "Less Important";
}
function intermediate() {
  outerCircle.style.backgroundImage =
    "linear-gradient(to right, rgba(4, 161, 214, 0.8)  38%, rgba(4, 161, 214, 0.8)  40%, transparent 50%)";
  needle.style.transform = "translate(-50%, -50%) rotate(0deg)";
  label.textContent = "Important";
}

function expert() {
  outerCircle.style.backgroundImage =
    "linear-gradient(to right, rgba(4, 161, 214, 0.8) 48%, rgba(4, 161, 214, 0.8)  70%, transparent 80%)";
  needle.style.transform = "translate(-50%, -50%) rotate(50deg)";
  label.textContent = "Fairly Important";
}

function very() {
  outerCircle.style.backgroundImage =
    "linear-gradient(to right, rgba(4, 161, 214, 0.8)  100%, rgba(4, 161, 214, 0.8)  100%)";
  needle.style.transform = "translate(-50%, -50%) rotate(100deg)";
  label.textContent = "Very Important";
}

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    changeLevel(radioButton.value);
  });
});

function changeLevel(value) {
  if (value === "1") {
    base();
  } else if (value === "2") {
    beginner();
  } else if (value === "3") {
    intermediate();
  } else if (value === "4") {
    expert();
  } else if (value === "5") {
    very();
  }
}

const terraButton = document.querySelector(".terra");
const contain = document.querySelector(".contain");
const overlay = document.querySelector(".overlay");

terraButton.addEventListener("click", () => {
  contain.classList.add("active");
  overlay.classList.add("active");
});

function closeContain() {
  contain.classList.remove("active");
  overlay.classList.remove("active");
}

// Close modal when clicking on the overlay
overlay.addEventListener("click", closeContain);
