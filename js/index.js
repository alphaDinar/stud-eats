const page = document.querySelector('.page')

// page.innerHTML += 
// `<script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
// <section class="low_nav">
//   <nav>
//     <a href="" class="material-symbols-outlined">menu</a>
//     <a href="" class="material-symbols-outlined">notifications</a>
//   </nav>
//   <a href="" class="home_tab">
//     <lord-icon src="https://cdn.lordicon.com/slduhdil.json" trigger="loop" colors="primary:white"
//       style="width:30px;height:30px">
//     </lord-icon>
//   </a>
//   <nav>
//     <a href="" class="material-symbols-outlined">menu</a>
//     <a href="" class="material-symbols-outlined">notifications</a>
//   </nav>
// </section>`

const runSearchAnime = (item) => {
  anime({
    targets: item,
    scale: [0.8, 1],
  })
}
