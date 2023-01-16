const btnSubmit = document.querySelector("button#submit");
const btnClear = document.querySelector("button#clear");
const arrayContent = document.querySelectorAll("input");

const invoice = {};

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    arrayContent.forEach((el) => {
        invoice[el.name] = el.value;
    });
    window.localStorage.invoices=invoice;
    window.location.replace("../index.html");
});

btnClear.addEventListener("click", (event) => window.location.reload() );