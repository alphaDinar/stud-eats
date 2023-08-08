const cart_id = document.getElementById('vendor_data').dataset.id
const cart_counter = document.querySelector('.cart_counter')
const cart = document.querySelector('.cart')
const cart_cover = document.querySelector('.cart_cover')
const cart_total = document.querySelector('.cart_total')

const toggleCart = () => {
  cart.classList.toggle('change')
  cart_cover.classList.toggle('change')
  cart_total.classList.toggle('change')
}

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
  if (localStorage.getItem(`cart_json${cart_id}`)) {
    cart_json = JSON.parse(localStorage.getItem(`cart_json${cart_id}`))
    cart_json.forEach(el => {
      blackList.push(el.id)
    })
    cartCounter(cart_json)
  }
  return [cart_json, blackList]
}
restoreCartState()

const food_lis = document.querySelector('.food_lis')

fixCartState = () => {
  let cart_json = restoreCartState()[0]
  if(food_lis){
    food_lis.innerHTML = ''
    cart_json.forEach((el, i) => {
      food_lis.innerHTML += `
          <div class="food_li" id="${el.id}">
            <img src="${el.img_url}" alt="">
            <section>
              <span>${el.name}</span>
              <small>GHS ${el.price}</small>
              <nav>
                <button class="material-symbols-outlined">remove</button>
                <small>${el.quantity}</small>
                <button class="material-symbols-outlined">add</button>
              </nav>
            </section>
            <i class="material-symbols-outlined">close</i>
          </div>
          `
    })
  }
}
fixCartState()

const sub_sum = document.querySelector('.cart_total')

cartSum = (cart_json) => {
  var sub_sum_val = 0
  cart_json.forEach(el => {
    var el_sum = el.price * el.quantity
    sub_sum_val = sub_sum_val + el_sum
  })
  sub_sum.innerHTML = `GHS ${sub_sum_val.toLocaleString()} <small class="material-symbols-outlined">shopping_cart_checkout</small>`
  localStorage.setItem(`cart_total_json${cart_id}`, JSON.stringify({ sub_total: sub_sum_val, delivery_total: 0, cart_total: sub_sum_val }))
}
cartSum(restoreCartState()[0])

manageCart = () => {
  const cart_lis = document.querySelectorAll('.food_li')
  let cart_json = restoreCartState()[0]
  cart_lis.forEach(li => {
    var li_clear = li.children[2]
    var li_rem = li.children[1].children[2].children[0]
    var li_sum = li.children[1].children[2].children[1]
    var li_add = li.children[1].children[2].children[2]
    li_add.onclick = () => {
      cart_json.forEach(el => {
        if (li.id === el.id) {
          el.quantity = el.quantity + 1
          cartCounter(cart_json)
          cartSum(cart_json)
          li_sum.innerHTML = el.quantity
          localStorage.setItem(`cart_json${cart_id}`, JSON.stringify(cart_json))
        }
      })
    }
    li_rem.onclick = () => {
      cart_json.forEach(el => {
        if (li.id === el.id) {
          if (el.quantity === 1) {
            cart_json.splice(cart_json.indexOf(el), 1)
            anime({
              targets: li,
              duration: 500,
              translateX: [0, -100],
              opacity: [1, 0],
              easing: 'easeInOutExpo',
              complete: () => {
                li.remove()
              }
            })
          } else {
            el.quantity = el.quantity - 1
          }
          cartCounter(cart_json)
          cartSum(cart_json)
          li_sum.innerHTML = el.quantity
          localStorage.setItem(`cart_json${cart_id}`, JSON.stringify(cart_json))
        }
      })
    }
    li_clear.onclick = () => {
      cart_json.forEach(el => {
        if (li.id === el.id) {
          cart_json.splice(cart_json.indexOf(el), 1)
          anime({
            targets: li,
            duration: 500,
            translateX: [0, -100],
            opacity: [1, 0],
            easing: 'easeInOutExpo',
            complete: () => {
              li.remove()
            }
          })
          cartCounter(cart_json)
          cartSum(cart_json)
          li_sum.innerHTML = el.quantity
          localStorage.setItem(`cart_json${cart_id}`, JSON.stringify(cart_json))
        }
      })
    }
  })
}
manageCart()