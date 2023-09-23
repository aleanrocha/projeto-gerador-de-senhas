// Seleção de elementod
const generatePasswordButton = document.querySelector("#generate-password")
const generatePasswordElement = document.querySelector("#generated-password")

// novas funcionalidades
const generateOptions = document.querySelector(".generate-options")
const createPassword = document.querySelector("#generate-pass-option")
const buttonCopy = document.querySelector("#password > ion-icon")
const lengthInput = document.querySelector("#ilength")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#inumbers")
const symbolsInput = document.querySelector("#isymbols")


// Funções

// letras, numeros e símbolos

// obtém letra minúscula aleatória com base no ASCII entre 97 - 122
const getLetterLowerCase = () => {
  const letterLowercase = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  return letterLowercase
}
// obtém letra maiúscula aleatória com base no ASCII entre 65 - 90
const getLetterUpperCase = () => {
  const letterUpperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  return letterUpperCase
}
// retorna um número aleatorio de 0 - 9 e converte em String
const getNumber = () => {
  const randomNumber = Math.floor(Math.random() * 10).toString()
  return randomNumber
}
// retorna um símbolo aleatório com base na variável symbol
const getSymbol = () => {
  const symbol = "@#$%&()^><?*=+"
  return symbol[Math.floor(Math.random() * symbol.length)]
}
const dataGenerators = (generators) => {
  if (lettersInput.checked) generators.push(getLetterLowerCase,getLetterUpperCase)
  if (numbersInput.checked) generators.push(getNumber)
  if (symbolsInput.checked) generators.push(getSymbol)
  if (generators.length === 0) return
}
const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {
  let password = ""
  // segunda versão
  const passwordLenght = lengthInput.value
  const generators = []
  if (passwordLenght > 20) {
    alert("Por favor, crie uma senha de até no máximo 20 caracteres.")
    return
  }
  dataGenerators(generators)
  for(let c = 0 ; c < passwordLenght ; c += generators.length) {
    generators.forEach(() => {
      const generatorValue = generators[Math.floor(Math.random() * generators.length)]()
      password += generatorValue
    })
  }
  password = password.slice(0, passwordLenght)
  generatePasswordElement.style.display = "block"
  generatePasswordElement.querySelector("h4").textContent = password
}
const copyPassword = () => {
  const password = generatePasswordElement.querySelector("h4").innerText
  const spanElement = document.createElement("span")
  spanElement.textContent = "✅"
  document.querySelector("#password").appendChild(spanElement)
  navigator.clipboard.writeText(password).then(() => {
    setTimeout(() => {
      spanElement.remove()
    },500)
  })
}

// Eventos

createPassword.addEventListener("click", () => {
  generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})
generatePasswordButton.addEventListener("click", () => generateOptions.classList.toggle("hide"))
buttonCopy.addEventListener("click", copyPassword)

