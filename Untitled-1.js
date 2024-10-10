document.addEventListener("DOMContentLoaded", function() {
    const username = "gabjohnn"; // Corrected the variable name
    const url = `https://api.github.com/users/${username}`; // Fixed string interpolation

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Usuário não encontrado"); // Changed to Error constructor
            }
            return response.json(); // Fixed to return the response data correctly
        })
        .then((data) => {
            const resultElement = document.getElementById("result"); // Fixed spelling
            resultElement.innerHTML = `
                <h2>${data.login}</h2>
                <img src="${data.avatar_url}" alt="Avatar" width="100"> 
                <p><strong>Seguidores:</strong> ${data.followers}</p> // Fixed variable names and added strong tag
            `;
        })
        .catch((error) => {
            console.error(error);
            const resultElement = document.getElementById("result");
            resultElement.innerHTML = `<p>${error.message}</p>`; // Fixed to display error message correctly
        });
});