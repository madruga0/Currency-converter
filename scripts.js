// Cotação de moedas do dia.
const USD = 5.58
const EUR = 6.16
const GBP = 7.30

// Obtendo os elementos do form para trabalhar com eles
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer  = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Capturando o evento de submit (enviar) do formulário
form.addEventListener("submit", (event) => {
    event.preventDefault()

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    } 
})

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo o conteudo da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula o total
        let total = String((amount * price)).replace(".", ",")

        // Exibe o resultado total
        result.textContent = ` R$ ${total}`

        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    } catch(error) {
        console.log(error)

        // Remove a classe do footer removendo ele da tela.
        footer.classList.remove("show-result")
        alert("Deu zebra, tente novamente mais tarde.")
    }
}

// Formata a moeda em real brasileiro.
function formatCurrencyBRL(value){
    
    // Converte para número para utilizar o toLocaleString para formatar no padrao BRL R$ 00,00
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    } )
}
