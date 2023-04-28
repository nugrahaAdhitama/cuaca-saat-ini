const apiKey = "30bdefe01f549a78258f0d4cad4f64af";
// a15670d05e86c954efc8a197ae095934
// 30bdefe01f549a78258f0d4cad4f64af

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
  } else {
    alert("Geolocation tidak didukung oleh browser ini.");
  }
}

function getWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  // Mengambil data cuaca dari API
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch((error) => console.error("Gagal mendapatkan data cuaca:", error));
}

function displayWeather(data) {
    if (data && data.name && data.sys && data.sys.country && data.main && data.wind) {
      document.getElementById("location").innerHTML = `Lokasi: ${data.name}, ${data.sys.country}`;
      document.getElementById("temperature").innerHTML = `Suhu: ${data.main.temp}°C`;
      document.getElementById("humidity").innerHTML = `Kelembapan: ${data.main.humidity}%`;
      document.getElementById("wind-speed").innerHTML = `Kecepatan Angin: ${data.wind.speed} m/s`;
    } else {
      console.error("Data cuaca tidak lengkap:", data);
    }
  }

getLocation();
