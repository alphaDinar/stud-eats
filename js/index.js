const runSearchAnime = (item) => {
  anime({
    targets: item,
    scale: [0, 1],
    easing: 'easeInOutExpo',
    duration: 500
  })
}