const cart_counter = document.querySelector('.cart_counter')

cartCounter = (cart_json) => {
  var counter = 0
  cart_json.forEach(el => {
    counter = counter + el.quantity
  })
  cart_counter.innerHTML = counter
}

restoreCartState = () => {
  let cart_json = []
  let blackList = []
  if (localStorage.getItem('cart_json')) {
    cart_json = JSON.parse(localStorage.getItem('cart_json'))
    cart_json.forEach(el => {
      blackList.push(el.id)
    })
    cartCounter(cart_json)
  }
  return [cart_json, blackList]
}
restoreCartState()