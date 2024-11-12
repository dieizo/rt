* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  user-select: none;
  background-color: cadetblue;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: azure;
  padding: 40px 60px;
}

h1 {
  font-size: 3em;
  color: #666666;
  text-transform: uppercase;
  line-height: 0;
}

.reset {
  all: unset;
  box-sizing: border-box;

  cursor: pointer;

  padding: 15px 20px;
  width: 100%;

  background-color: beige;
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
}

.reset:focus {
  color: #666666;
  background-color: rgb(194, 194, 160);
}

.game {
  width: 430px;
  height: 430px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 1rem;
  transform-style: preserve-3d;
  perspective: 500px;
}

.item {
  position: relative;
  width: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: azure;
  font-size: 3em;
  transform: rotateY(180deg);
  transition: 0.25s;
}

.item::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #404040;
  transition: 0.25s;
  transform: rotateY(0deg);
  backface-visibility: hidden;
}

.item.boxOpen {
  transform: rotateY(0deg);
}

.boxOpen::after,
.boxMatch::after {
  transform: rotateX(180deg);
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
