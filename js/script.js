document.addEventListener('DOMContentLoaded', () => {
	let scrollScaleDown = document.querySelector('.scale-down'),
		scrollMove = document.querySelector('.move-from'),
		scrollScaleUp = document.querySelector('.scale-up');

	// Function to handle scroll animation for a given scrollBox
	function handleScroll(scrollBox) {
		let windowHeight = window.innerHeight;
		let boxTop = scrollBox.offsetTop;
		let boxHeight = scrollBox.offsetHeight;
		let boxMiddle = boxTop + boxHeight / 2;

		// Calculate offset from window middle to scrollBox middle
		let windowMiddle = windowHeight / 2;
		let offset = window.scrollY + windowMiddle - boxMiddle;

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

	window.addEventListener('scroll', scrollHandler);

	scrollHandler();
});
