document.addEventListener('DOMContentLoaded', () => {
	let scrollScaleDown = document.querySelector('.scale-down');
	let scrollMove = document.querySelector('.move-from');
	let scrollScaleUp = document.querySelector('.scale-up');

	let scaleDownText = document.querySelector('.scale-down__text');
	let scaleUpText = document.querySelector('.scale-up__text');

	// Function to handle scroll animation for a given scrollBox
	function handleScroll(scrollBox) {
		let windowHeight = window.innerHeight;
		let boxTop = scrollBox.offsetTop;
		let boxHeight = scrollBox.offsetHeight;

		// Calculation of the middle of the window when scrolling window
		let offset = window.scrollY + windowHeight / 2 - (boxTop + boxHeight / 2);

		if (Math.abs(offset) < windowHeight / 4) {
			scrollBox.classList.add('show-animate');
		} else {
			scrollBox.classList.remove('show-animate');
		}
	}

	function scrollHandler() {
		handleScroll(scrollScaleDown);
		handleScroll(scrollMove);
		handleScroll(scrollScaleUp);
	}

	function scrollSmoothToTop() {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	}

	function scrollToCenter() {
		scrollMove.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}

	window.addEventListener('scroll', scrollHandler);
	scaleUpText.addEventListener("click", scrollSmoothToTop);
	scaleDownText.addEventListener('click', scrollToCenter);

	scrollHandler();
});
