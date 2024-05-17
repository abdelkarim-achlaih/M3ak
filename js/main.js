// Start Plans Toggle
const switcher = document.querySelector(".switcher");
if (switcher) {
	const toogs = switcher.querySelectorAll(".toog");
	const bg = switcher.querySelector(".switcher-bg");
	const pric = document.querySelectorAll(".plan .num");
	const prices = [
		[300, 200, 120],
		[3000, 2000, 1200],
	];
	toogs.forEach((toog) => {
		toog.addEventListener("click", (e) => {
			switcher.dataset.type = e.target.dataset.type;
			bg.classList.toggle("right");
			bg.classList.toggle("left");
			if (switcher.dataset.type === "monthly") {
				pric.forEach((pri, i) => {
					pri.innerText = prices[0][i];
				});
			} else {
				pric.forEach((pri, i) => {
					pri.innerText = prices[1][i];
				});
			}
			toogs[0].classList.toggle("active");
			toogs[1].classList.toggle("active");
		});
	});
}
// End Plans Toggle