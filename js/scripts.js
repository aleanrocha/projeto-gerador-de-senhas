// Seleção de elementod
const generatePasswordButton = document.querySelector("#generate-password")
const generatePasswordElement = document.querySelector("#generated-password")

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

// Eventos

generatePasswordButton.addEventListener("click", () => {
  console.log(getLetterLowerCase(), getLetterUpperCase(), getNumber(), getSymbol())
})

