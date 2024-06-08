let messages = [
      "Selamat malam dedeku sayang, cintaku, cantikkuu 💝",
      "Selamat pagi jugaa yaa cintaa, barakallah fii umrik 🥳💝",
      "Hari ini adalah hari membahagiakan untuk kamu dan aku 💞",
      "Karna hari ini adalah hari terlahirnya dunia mu dan dunia ku 🌎🌕🌞💫🌈",
      "Jangan lupa tersenyum hari ini! 😊"
];

let currentIndex = 0;

function changeMessage() {
      let messageElement = document.getElementById("message");
      let buttonElement = document.getElementById("changebutton")
      messageElement.classList.add("hidden");

      setTimeout(() => {
                currentIndex = (currentIndex + 1) % messages.length;
                messageElement.textContent = messages[currentIndex];
                messageElement.classList.remove("hidden");
                
                if (currentIndex === messages.length - 1)  {
                    buttonElement.textContent = "Baca ulang";
                } else {
                    buttonElement.textContent = "Pesan Selanjutnya";
                }
            }, 500);
}
