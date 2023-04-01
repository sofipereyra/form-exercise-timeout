// Esta es la base de datos de nuestros usuarios
const dataBase = {
  users: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};


const btn = document.querySelector('button');
const email = document.getElementById('email-input');
const pass = document.getElementById('password-input');
const loader = document.getElementById('loader');
const error = document.getElementById('error-container')
const main = document.querySelector('main')

btn.addEventListener('click' , () => {

  loader.classList.remove('hidden');

  setTimeout(() => {
   try {
    loader.classList.add('hidden');
    validateEmail(email);
    validatePassword(pass);
    if(validarRegister(email, pass)){
      main.innerHTML = '<h1>Welcome!</h1>'
    } else {
      throw new Error('Not a valid user or password, please try again.')
    }
   } catch (e) {
    error.classList.remove('hidden');
    error.innerHTML = `<small>${e.message}</small>`;
   }
  }, 3000)
})

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)){
     return (true);
   }else if(mail.value.length === 0){
      throw new Error("Please enter an email address");
   }else{
      throw new Error("You have entered an invalid email address!");
   }
}

function validatePassword(validationPassword){
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(pass.value)) {
        return (true)
    }else if(pass.value.length === 0){
      throw new Error("A password is required!");
    }else{
      throw new Error("You have entered an invalid password!");
    }
}

function validarRegister(mail, pass){
  for (let i = 0; i < dataBase.users.length; i++) {
    return ((dataBase.users[i].email === mail.value) && (dataBase.users[i].password === pass.value))
  }

}
