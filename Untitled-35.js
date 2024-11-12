<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="style.css" />
    <title>Jogo da Memomória</title>
  </head>
  <body>
    <div class="container">
      <h1>Jogo da Memomória</h1>
      <div class="game"></div>
      <button class="reset" onClick="window.location.reload()">
        REINICIAR
      </button>
    </div>

    <script src="index.js"></script>
  </body>
</html>
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