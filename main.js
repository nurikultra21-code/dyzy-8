// Задание 1
function checkPassword(password) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (password === "1234") {
        resolve("Доступ открыт");
      } else {
        reject("Неверный пароль");
      }
    }, 1000);
  });
}

// Задание 2
async function login(password) {
  try {
    let result = await checkPassword(password);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

login("1234");
login("wrong_password");
