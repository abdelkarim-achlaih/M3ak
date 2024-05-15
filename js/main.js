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
	document.body.style.display = "block";
	loadAnimations();
});
function loadAnimations() {
	gsap.registerPlugin(ScrollTrigger);
	animateHeader();
	animateHero();
	animateAbout(".home .about");
	animateHow(".how");
	animateServices(".services");
	animateServices(".services-services");
	animateProvider(".provider");
	animatePlans(".plans");
	animateFooter("footer");
	animateProps("section.props");
	animateContact(".contact");
	animatePageTitle(".page-title");
	animatePostLoop(".blog-archive");
	animateSinglePost(".page.post");
}
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
const delay = "<";
function animateHeader() {
	const allowedWidth = 992;
	let load = gsap.timeline({
		defaults: {
			duration: 1,
			ease: "power4.inOut",
		},
	});
	load.from("header .navbar-brand", slideLeft);
	if (window.innerWidth > allowedWidth) {
		load
			.from(
				"header .navigation li",
				{
					y: -200,
					stagger: 0.15,
				},
				delay
			)
			.from(
				"header .socials li",
				{
					y: -200,
					stagger: 0.15,
				},
				delay
			);
	}
}
function animateHero() {
	if (document.querySelector(".hero")) {
		let load = gsap.timeline({
			defaults: {
				duration: 1.5,
				ease: "power4.inOut",
			},
		});
		load
			.from(".hero .text-copy > h1, .hero .text-copy > p", slideDownStager)
			.from(
				".hero .text-copy .badges a",
				{
					...slideLeft,
					stagger: 0.15,
				},
				delay
			)
			.from(
				".hero .column-two, .hero .column-one",
				{
					...slideRight,
					stagger: 0.15,
				},
				delay
			)
			.from(".hero .text-copy .features .feature", slideDownStager, 0)
			.from(
				".hero .scroll-button",
				{
					opacity: 0,
					y: 150,
				},
				delay
			);
	}
}
function animateAbout(section) {
	if (document.querySelector(section)) {
		createTimeline(section)
			.from(`${section} .section-question`, {
				x: 1500,
			})
			.from(
				`${section} h2`,
				{
					opacity: 0,
					y: -50,
				},
				delay
			)
			.from(
				`${section} img`,
				{
					opacity: 0,
					x: -1500,
					stagger: 0.3,
				},
				delay
			)
			.from(
				`${section} ul li`,
				{
					opacity: 0,
					y: -50,
					stagger: 0.3,
				},
				delay
			)
			.from(
				`${section} .stats, section.about .decoration`,
				{
					opacity: 0,
					x: -1500,
				},
				delay
			);
	}
}
function createTimeline(section) {
	if (document.querySelector(section)) {
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
}
function animateHow(section) {
	if (document.querySelector(section)) {
		createTimeline(section)
			.from(`${section} .section-question`, slideDown, delay)
			.from(`${section} h2`, slideDown, delay)
			.from(`${section} img`, appear, delay)
			.from(`${section} .step`, slideDownStager, delay);
	}
}
function animateServices(section) {
	if (document.querySelector(section)) {
		const time = createTimeline(section);
		time
			.from(`${section} .section-question`, slideLeft, delay)
			.from(`${section} h2`, slideLeft, delay)
			.to(
				`${section} .service`,
				{
					scale: 1,
					stagger: 0.01,
				},
				delay
			);
		if (document.querySelector(`${section} .btn`)) {
			time.to(
				`${section} .btn`,
				{
					x: 0,
				},
				delay
			);
		}
	}
}
function animateProvider(section) {
	if (document.querySelector(section)) {
		const time = createTimeline(section);
		time
			.from(`${section} h2`, slideLeft)
			.from(`${section} .img-holder img`, appear, delay);
		if (document.querySelector(`${section} .btn`)) {
			time.to(
				`${section} .btn`,
				{
					x: 0,
					duration: 0.7,
				},
				delay
			);
		}
		if (document.querySelector(`${section} .badges`)) {
			time.from(`${section} .badges a`, appearStagger, delay);
		}
	}
}
function animatePlans(section) {
	if (document.querySelector(section)) {
		createTimeline(section)
			.from(`${section} .section-question`, slideDown, delay)
			.from(`${section} h2`, slideDown, delay)
			.from(`${section} .plan`, slideDownStager, delay)
			.from(`${section} .switcher`, appear, delay);
	}
}
function animateFooter(section) {
	if (document.querySelector(section)) {
		createTimeline(section)
			.from(`${section} .brand`, slideDown)
			.from(`${section} .links-one li`, slideDownStager, delay)
			.from(`${section} .socials li`, slideDownStager, delay)
			.from(`${section} .download a`, slideDownStager, delay)
			.from(
				`${section} .copyrights p, ${section} .links-two li`,
				slideDownStager,
				delay
			);
	}
}
function animateProps(section) {
	if (document.querySelector(section)) {
		createTimeline(section)
			.from(`${section} h2`, slideDown)
			.from(`${section} .feature`, slideDownStager, delay);
	}
}
function animateContact(section) {
	if (document.querySelector(section)) {
		createTimeline(section).from(`${section} .colmun`, slideDownStager);
	}
}
function animatePageTitle(section) {
	if (document.querySelector(section)) {
		createTimeline(section).from(`${section} h1`, slideDown);
	}
}
function animatePostLoop(section) {
	if (document.querySelector(section)) {
		createTimeline(section).from(`${section} .blog-post`, slideDownStager);
	}
}
function animateSinglePost(section) {
	if (document.querySelector(section)) {
		createTimeline(section)
			.from(`${section} .top > div`, slideDownStager, delay)
			.from(`${section} .featured-image`, slideDown, delay)
			.from(`${section} .post-category`, slideDown, delay)
			.from(`${section} .post-content p`, slideDownStager, delay);
	}
}
// End Animations
