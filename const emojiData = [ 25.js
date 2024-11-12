const emojiData = [
  { src: "./assets/angular.svg", alt: "angularjs" },
  { src: "./assets/css3.svg", alt: "css3" },
  { src: "./assets/html5.svg", alt: "html5" },
  { src: "./assets/typescript.svg", alt: "typescript" },
  { src: "./assets/vuejs.svg", alt: "vuejs" },
  { src: "./assets/javascript.svg", alt: "javascript" },
  { src: "./assets/react.svg", alt: "react" },
  { src: "./assets/bootstrap.svg", alt: "bootstrap" },
];

const emojis = [...emojiData, ...emojiData].map(
  (item) => `<img alt="${item.alt}" src="${item.src}" />`
);

/* função para embaralhar as imagens */
const shuffle = (array) => array.sort(() => Math.random() - 0.5);

/* função para tocar o áudio */
const playSound = (audioName) => {
  const audio = new Audio(`./assets/sounds/${audioName}.m4a`);
  audio.volume = 0.5;
  audio.play();
};

let openCards = [];

/* emaralhar as imagens e adicioná-las na DOM */
shuffle(emojis).forEach((emoji) => {
  const box = document.createElement("div");
  box.className = "item";
  box.innerHTML = emoji;
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
});

/* função para manipualr o clique nos cartões */
function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }

  playSound("flip");
}

/* verficiar se os cards são iguais */
function checkMatch() {
  const [card1, card2] = openCards;

  if (card1.innerHTML === card2.innerHTML) {
    card1.classList.add("boxMatch");
    card2.classList.add("boxMatch");
  } else {
    card1.classList.remove("boxOpen");
    card2.classList.remove("boxOpen");
    playSound("flipback");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Parabéns, você completou o jogo!");
    window.location.reload();
  }
}
alert("You clicked the button!");
Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
Swal.fire("SweetAlert2 is working!");
let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
Right-to-left support for Arabic, Persian, Hebrew, and other RTL languages

Try me!
Swal.fire({
  title: "هل تريد الاستمرار؟",
  icon: "question",
  iconHtml: "؟",
  confirmButtonText: "نعم",
  cancelButtonText: "لا",
  showCancelButton: true,
  showCloseButton: true
});
AJAX request example

Try me!
Swal.fire({
  title: "Submit your Github username",
  input: "text",
  inputAttributes: {
    autocapitalize: "off"
  },
  showCancelButton: true,
  confirmButtonText: "Look up",
  showLoaderOnConfirm: true,
  preConfirm: async (login) => {
    try {
      const githubUrl = `
        https://api.github.com/users/${login}
      `;
      const response = await fetch(githubUrl);
      if (!response.ok) {
        return Swal.showValidationMessage(`
          ${JSON.stringify(await response.json())}
        `);
      }
      return response.json();
    } catch (error) {
      Swal.showValidationMessage(`
        Request failed: ${error}
      `);
    }
  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `${result.value.login}'s avatar`,
      imageUrl: result.value.avatar_url
    });
  }
});