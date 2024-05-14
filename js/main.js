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
	animateAbout(".about");
	animateHow(".how");
	animateServices(".services");
});
const slideDown = {
	opacity: 0,
	y: -50,
};
const slideDownStager = {
	opacity: 0,
	y: -50,
	stagger: 0.3,
};
const slideLeft = {
	opacity: 0,
	x: 1500,
};
const slideRight = {
	opacity: 0,
	x: -1500,
};
const appear = {
	scale: 0,
	duration: 0.65,
};
const appearStagger = {
	scale: 0,
	duration: 0.65,
	stagger: 0.3,
};
function animateHeader() {
	let load = gsap.timeline({
		defaults: {
			duration: 1.5,
			ease: "power4.inOut",
		},
	});
	load
		.from("header .navbar-brand", slideLeft)
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
		.from(".hero .text-copy > h1, .hero .text-copy > p", slideDownStager)
		.from(".hero .text-copy .badges a", {
			...slideLeft,
			stagger: 0.3,
		})
		.from(
			".hero .column-two, .hero .column-one",
			{
				...slideRight,
				stagger: 0.3,
			},
			"<"
		)
		.from(".hero .text-copy .features .feature", slideDownStager)
		.from(".hero .scroll-button", {
			opacity: 0,
			y: 150,
		});
}
function animateAbout(section) {
	createTimeline(section)
		.from(`${section} .section-question`, {
			x: 1500,
		})
		.from(`${section} h2`, {
			opacity: 0,
			y: -50,
		})
		.from(
			`${section} img`,
			{
				opacity: 0,
				x: -1500,
				stagger: 0.3,
			},
			"<"
		)
		.from(`${section} ul li`, {
			opacity: 0,
			y: -50,
			stagger: 0.3,
		})
		.from(
			`${section} .stats, section.about .decoration`,
			{
				opacity: 0,
				x: -1500,
			},
			"<"
		);
}
function createTimeline(section) {
	return gsap.timeline({
		scrollTrigger: {
			trigger: section,
		},
		defaults: {
			duration: 1.5,
			ease: "power4.inOut",
		},
	});
}
function animateHow(section) {
	createTimeline(section)
		.from(`${section} .section-question`, slideDown)
		.from(`${section} h2`, slideDown)
		.from(`${section} img`, appear)
		.from(`${section} .step`, slideDownStager);
}
function animateServices(section) {
	createTimeline(section)
		.from(`${section} .section-question`, slideLeft)
		.from(`${section} h2`, slideLeft)
		.to(`${section} .service`, {
			scale: 1,
			stagger: 0.15,
		})
		.to(`${section} .btn`, {
			x: 0,
		});
}
// End Animations
