if ((document.readyState = "loading")) {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}

var totalAmount = "0,00"

function ready() {
  const removeProductButtons = document.getElementsByClassName(
    "btn btn-outline-danger border-dark btn-sm"
  )
  for (var i = 0; i < removeProductButtons.length; i++) {
    removeProductButtons[i].addEventListener("click", removeProduct)
  }

  const quantityInputs = document.getElementsByClassName(
    "form-control text-center border-dark"
  )
  for (var i = 0; quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", updateTotal)
  }

  const purchaseButton = document.getElementsByClassName(
    "Butao"
  )[0]
  purchaseButton.addEventListener("click", makePurchase)
}

function makePurchase() {
  if (totalAmount === "0,00") {
    alert("Seu carrinho está vazio!")
  } else {
    alert(
      `
          Obrigado pela sua compra!
          Valor do pedido: R$${totalAmount}\n
          Volte sempre :)
        `
    )
  }
}
function removeProduct(event) {
  event.target.parentElement.parentElement.remove()
  updateTotal()
}

function updateTotal() {
  totalAmount = 0
  const listGroup = document.getElementsByClassName("list-group-item py-3")
  for (var i = 0; i < listGroup.length; i++) {
    //console.log(listGroup[i])
    const textDark = listGroup[i]
      .getElementsByClassName("text-dark")[0]
      .innerText.replace("R$", "")
      .replace(",", ".")
    const productQuantity = listGroup[i].getElementsByClassName(
      "form-control text-center border-dark"
    )[0].value

    totalAmount += textDark * productQuantity
  }
  totalAmount = totalAmount.toFixed(2)
  totalAmount = totalAmount.replace(".", ",")
  document.getElementsByClassName("text-dark mb-3").innerText =
    "R$" + totalAmount
}
