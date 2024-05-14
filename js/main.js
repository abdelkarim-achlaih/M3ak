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

// Start Animations
document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger);
	animateHeader();
	animateHero();
});
// End Animations
let load = gsap.timeline({
	defaults: {
		duration: 1.5,
		ease: "power4.inOut",
	},
});
function animateHeader() {
	let load = gsap.timeline({
		defaults: {
			duration: 1.5,
			ease: "power4.inOut",
		},
	});
	load
		.from("header .navbar-brand", {
			x: 1500,
		})
		.from("header .navigation li", {
			y: -200,
			stagger: 0.15,
		})
		.from("header .socials li", {
			y: -200,
			stagger: 0.15,
		});
}
function animateHero() {
	let load = gsap.timeline({
		defaults: {
			duration: 1.5,
			ease: "power4.inOut",
		},
	});
	load
		.from(".hero .text-copy > h1, .hero .text-copy > p", {
			opacity: 0,
			y: -50,
			stagger: 0.3,
		})
		.from(".hero .text-copy .badges a", {
			opacity: 0,
			x: 1500,
			stagger: 0.3,
		})
		.from(
			".hero .column-two, .hero .column-one",
			{
				opacity: 0,
				x: -1500,
				stagger: 0.3,
			},
			"<"
		)
		.from(".hero .text-copy .features .feature", {
			opacity: 0,
			y: -50,
			stagger: 0.3,
		})
		.from(".hero .scroll-button", {
			opacity: 0,
			y: 150,
		});
}
