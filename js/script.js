function calculateP2() {
  // Menghapus pesan kesalahan sebelum perhitungan dimulai
  document.getElementById("hasil").innerText = "";
  document.getElementById("step-list").innerHTML = "";

  // Mendapatkan nilai input
  let xo = parseFloat(document.getElementById("xo").value);
  let yo = parseFloat(document.getElementById("yo").value);
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value);
  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);
  let x = parseFloat(document.getElementById("x").value);

  // Memeriksa apakah semua input telah diisi
  if (
    isNaN(xo) ||
    isNaN(yo) ||
    isNaN(x1) ||
    isNaN(y1) ||
    isNaN(x2) ||
    isNaN(y2) ||
    isNaN(x)
  ) {
    // Jika ada input yang kosong, tampilkan pesan kesalahan
    document.getElementById("hasil").innerText = "Semua input harus diisi!";
    return; // Hentikan proses perhitungan
  }

  // Menambahkan langkah-langkah ke daftar
  const steps = document.getElementById("step-list");

  // Menghitung L0
  let L0 = ((x - x1) * (x - x2)) / ((xo - x1) * (xo - x2));
  steps.innerHTML += `<li>Menghitung L<sub>0</sub> = (${x} - ${x1})(${x} - ${x2}) / (${xo} - ${x1})(${xo} - ${x2}) = ${L0}</li>`;

  // Menghitung L1
  let L1 = ((x - xo) * (x - x2)) / ((x1 - xo) * (x1 - x2));
  steps.innerHTML += `<li>Menghitung L<sub>1</sub> = (${x} - ${xo})(${x} - ${x2}) / (${x1} - ${xo})(${x1} - ${x2}) = ${L1}</li>`;

  // Menghitung L2
  let L2 = ((x - xo) * (x - x1)) / ((x2 - xo) * (x2 - x1));
  steps.innerHTML += `<li>Menghitung L<sub>2</sub> = (${x} - ${xo})(${x} - ${x1}) / (${x2} - ${xo})(${x2} - ${x1}) = ${L2}</li>`;

  // Menghitung P2(x)
  let P2 = yo * L0 + y1 * L1 + y2 * L2;
  // Memformat hasil tanpa trailing zeros
  let hasilTerformat = parseFloat(P2.toFixed(8));

  // Menambahkan langkah hasil akhir
  steps.innerHTML += `<li>Menghitung P<sub>2</sub>(x) = ${yo} * ${L0} + ${y1} * ${L1} + ${y2} * ${L2} = ${hasilTerformat}</li>`;

  // Menampilkan hasil
  document.getElementById("hasil").innerText =
    "Hasil P2(" + x + ") adalah: " + hasilTerformat;
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

  // Menghapus pesan kesalahan
  document.getElementById("hasil").innerText = "";
  document.getElementById("step-list").innerHTML = "";
}

const menu = document.querySelector(".menu");
const navList = document.querySelector(".list");

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  navList.classList.toggle("active");
});
