let type = 1; // mode konversi untuk Celcius ke Farenheit
document.querySelector(".about").innerHTML = `<p class="textAbout text-3">Masukan suhu derajat Celcius(&deg;C) ke kotak dibawah, lalu ketik tombol konversi untuk mendapat hasil konversi berupa Farenheit (&deg;F)</p>`;
const error = document.querySelector(".textError");
error.classList.add("hide");

// fungsi konversi
const convert = () => {
  const fromInput = document.getElementById("input1");
  const toInput = document.getElementById("input2");
  const elaborateInput = document.getElementById("elaborate");
  const elaborateValue1 = `<h2>Cara konversi Celcius ke Farenheit</h2>
          <br />
          <hr />
          <br />
          <p class="textElaborate text-2">
            Suhu <i>S</i> dalam derajat Celcius (&deg;C) sama dengan suhu <i>S</i> dalam derajat Farenheit (&deg;F) dikali 9/5 tambah 32. <br /><br />
            <i>S</i><sub>(&deg;F)</sub> = (<i>S</i><sub>(&deg;C)</sub> × 9/5) + 32 <br />
            atau<br />
            <i>S</i><sub>(&deg;F)</sub> = (<i>S</i><sub>(&deg;C)</sub> × 1.8) + 32
          </p>`;
  const elaborateValue2 = `<h2>Cara konversi Farenheit ke Celcius</h2>
          <br />
          <hr />
          <br />
          <p class="textElaborate text-2">
            Suhu <i>S</i> dalam derajat Farenheit (&deg;F) sama dengan suhu <i>S</i> dalam derajat Celcius (&deg;C) dikurang 32, lalu dikali 5/9 <br /><br />
            <i>S</i><sub>(&deg;C)</sub> = (<i>S</i><sub>(&deg;F)</sub> - 32 ) × 5/9 <br />
            atau<br />
            <i>S</i><sub>(&deg;C)</sub> = (<i>S</i><sub>(&deg;F)</sub> - 32 ) × 0.55
          </p>`;

  let from = parseFloat(fromInput.value);
  let to, formula;

  // jika pengguna belum input angka
  if (isNaN(from)) {
    toInput.value = "";
    error.classList.remove("hide");
    elaborateInput.value = "Masukkan angka yang valid.";
    return;
  }

  error.classList.add("hide");

  if (type === 1) {
    // Celcius ke Fahrenheit
    to = from * (9 / 5) + 32;
    formula = `${from}°C × 9/5 + 32 = ${to.toFixed(2)}°F`;
    document.querySelector(".boxElaborate").innerHTML = elaborateValue1;
  } else {
    // Fahrenheit ke Celcius
    to = (from - 32) * (5 / 9);
    formula = `(${from}°F - 32) × 5/9 = ${to.toFixed(2)}°C`;
    document.querySelector(".boxElaborate").innerHTML = elaborateValue2;
  }

  toInput.value = to.toFixed(2); // toFixed untuk ambil 2 angka dibelakang koma
  elaborateInput.value = formula;
};

// Fungsi reset nilai
const resetValue = () => {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("elaborate").value = "";
  document.querySelector(".boxElaborate").innerHTML = "";
};

// Fungsi konversi
const switchType = () => {
  // ganti type konversi
  type = type === 1 ? 2 : 1;
  resetValue();

  const about = document.querySelector(".about");
  const labelFrom = document.querySelector('label[for="input1"]');
  const labelTo = document.querySelector('label[for="input2"]');
  const input1 = document.getElementById("input1");

  if (type === 1) {
    // Perubahan jika mode konversi ke Farenheit
    about.innerHTML = `<p class="textAbout text-3">Masukan suhu derajat Celcius(&deg;C) ke kotak dibawah, lalu ketik tombol konversi untuk mendapat hasil konversi berupa Farenheit (&deg;F)</p>`;
    labelFrom.textContent = "Celcius (°C)";
    labelTo.textContent = "Farenheit (°F)";
    input1.placeholder = "Masukkan suhu °C";
  } else {
    // Perubahan jika mode konversi ke Celcius
    about.innerHTML = `<p class="textAbout text-3">Masukan suhu derajat Farenheit (&deg;F) ke kotak dibawah, lalu ketik tombol konversi untuk mendapat hasil konversi berupa Celcius(&deg;C)</p>`;
    labelFrom.textContent = "Farenheit (°F)";
    labelTo.textContent = "Celcius (°C)";
    input1.placeholder = "Masukkan suhu °F";
  }
};
