const user_panel = document.querySelector('.user_panel')
const page_cover = document.querySelector('.page_cover')
const filter_panel = document.querySelector('.filter_panel')

const openPanel = () => {
  user_panel.classList.add('change')
  page_cover.classList.add('change')
}
const closePanel = () => {
  user_panel.classList.remove('change')
  page_cover.classList.remove('change')
}

const openFilter = () => {
  filter_panel.classList.add('change')
  page_cover.classList.add('change')
}

closeFilter =()=>{
  filter_panel.classList.remove('change')
  page_cover.classList.remove('change')
}


var category_swiper = new Swiper('.category_box', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10
})
