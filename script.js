const form = document.querySelector(".form");
const button = document.querySelector('input');
form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  // Здесь твой код
  fetch(`http://46.21.248.81:3001/user`), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: "Kseniya",
      secondName: "Belskaya",
      phone: "375291251119",
      email: "kseniyabelskaya@gmail.com",
      agree: true
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log(data);
      })

  }
})  

button.addEventListener('click', updateButton);
function updateButton() {
  if (button.value === 'Отправить') {
    button.value = 'Отправлено!';
    document.getElementById('.form').reset();
  } else {
    button.value = 'Неверно ввели данные!';
}
}