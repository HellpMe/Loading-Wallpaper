document.getElementById("particles").style.display = "none";

anime({
  targets: "line",
  translateX: [
    { value: 270, duration: 1000, easing: "easeOutSine" },
    { value: 0, duration: 1000, easing: "easeOutSine" },
  ],
  // translateX: 270,
  borderRadius: ["0%", "50%"],
  easing: "easeInOutQuad",
  delay: anime.stagger(200, { grid: [16, 10], from: 7 }),
  loop: true,
});
/*
var limit = 10

for (var i=0;i<=limit;i++) {
  (function(ind) {
    setTimeout(() => {
      document.getElementById("loadingDiv").style.display = "none";
      showBody();
        if (ind === limit) {}
    }, 5000 + (3000 * ind));
  }) (i)
}
*/