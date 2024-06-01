function calculateNewton() {
  // Menghapus pesan kesalahan sebelum perhitungan dimulai
  document.getElementById("hasil").innerText = "";
  document.getElementById("langkah").innerHTML = "";

  // Data titik
  let nilai_x = [
    parseFloat(document.getElementById("xo").value),
    parseFloat(document.getElementById("x1").value),
    parseFloat(document.getElementById("x2").value),
  ];
  let nilai_y = [
    parseFloat(document.getElementById("yo").value),
    parseFloat(document.getElementById("y1").value),
    parseFloat(document.getElementById("y2").value),
  ];
  // Nilai target
  let target_x = parseFloat(document.getElementById("x").value);
  let n = nilai_x.length;
  if (n !== 3 || nilai_y.length !== 3) {
    alert("Interpolasi Newton orde 2 memerlukan 3 titik data.");
    return;
  }

  // Hitung beda terbagi
  let f0 = nilai_y[0];
  let f1 = (nilai_y[1] - nilai_y[0]) / (nilai_x[1] - nilai_x[0]);
  let f2 =
    ((nilai_y[2] - nilai_y[1]) / (nilai_x[2] - nilai_x[1]) - f1) /
    (nilai_x[2] - nilai_x[0]);

  // Simpan langkah-langkah pengerjaan
  let langkah_pengerjaan = `
    <p><strong>Langkah 1:</strong> Hitung koefisien interpolasi.</p>
    <ul>
      <li>f[0] = ${f0}</li>
      <li>f[1] = (${nilai_y[1]} - ${nilai_y[0]}) / (${nilai_x[1]} - ${
    nilai_x[0]
  }) = ${f1}</li>
      <li>f[2] = ((${nilai_y[2]} - ${nilai_y[1]}) / (${nilai_x[2]} - ${
    nilai_x[1]
  }) - ${f1}) / (${nilai_x[2]} - ${nilai_x[0]}) = ${f2}</li>
    </ul>
    <p><strong>Langkah 2:</strong> Hitung nilai interpolasi.</p>
    <p>Interpolasi f(${target_x}) menggunakan interpolasi Newton orde 2:</p>
    <p>Nilai Interpolasi = f[0] + (x - x0) * f[1] + (x - x0) * (x - x1) * f[2]</p>
    <p>Substitusi nilai x = ${target_x} ke dalam rumus di atas:</p>
    <p>Nilai Interpolasi ≈ ${f0} + (${target_x} - ${
    nilai_x[0]
  }) * ${f1} + (${target_x} - ${nilai_x[0]}) * (${target_x} - ${
    nilai_x[1]
  }) * ${f2}</p>
    <p>Nilai Interpolasi ≈ ${
      f0 +
      (target_x - nilai_x[0]) * f1 +
      (target_x - nilai_x[0]) * (target_x - nilai_x[1]) * f2
    }</p>
  `;

  // Hitung nilai yang diinterpolasi
  let nilai_interpolasi =
    f0 +
    (target_x - nilai_x[0]) * f1 +
    (target_x - nilai_x[0]) * (target_x - nilai_x[1]) * f2;

  // Tampilkan hasil
  document.getElementById("hasil").innerText =
    "Interpolasi f(" +
    target_x +
    ") menggunakan interpolasi Newton orde 2: " +
    nilai_interpolasi.toFixed(7);
  // Tampilkan langkah-langkah pengerjaan
  document.getElementById("langkah").innerHTML = langkah_pengerjaan;
}

function resetForm() {
  // Mengatur nilai input ke nilai awal
  document.getElementById("xo").value = "";
  document.getElementById("yo").value = "";
  document.getElementById("x1").value = "";
  document.getElementById("y1").value = "";
  document.getElementById("x2").value = "";
  document.getElementById("y2").value = "";
  document.getElementById("x").value = "";
  // Menghapus pesan hasil
  document.getElementById("hasil").innerText = "";
  document.getElementById("langkah").innerHTML = "";
}

// Memantau perubahan input keyboard
const menu = document.querySelector(".menu");
const navList = document.querySelector(".list");

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  navList.classList.toggle("active");
});

const buttonHitung = document.querySelector("#hitung-button");

buttonHitung.addEventListener("click", () => {
  // Periksa apakah ada input yang kosong sebelum menghitung
  const inputs = document.querySelectorAll("input");
  let isInputEmpty = false;
  inputs.forEach((input) => {
    if (!input.value) {
      isInputEmpty = true;
      return;
    }
  });

  // Jika ada input yang kosong, tampilkan pesan kesalahan
  if (isInputEmpty) {
    alert("Input tidak boleh kosong.");
    return;
  }

  // Jika semua input terisi, hitung interpolasi Newton
  calculateNewton();
});
