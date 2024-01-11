document.addEventListener('DOMContentLoaded', () => {
	let moveSection = document.querySelector('.move-from');

	let scaleDownText = document.querySelector('.scale-down__text');
	let scaleUpText = document.querySelector('.scale-up__text');

	let moveLeftBox = document.querySelector('.move-from__left');
	let moveLeftLine = document.querySelector('.move-from__left__line');
	let moveRightBox = document.querySelector('.move-from__right');

	function calculateSizeValue(startValue, endValue, ratio) {
		return startValue + ratio * (endValue - startValue);
	}

	function calculateFontSize(startSize, endSize, scrollPosition, sectionHeight) {
		return startSize - (scrollPosition % sectionHeight) / sectionHeight * (startSize - endSize);
	}

	function scrollHandler() {
		const totalSections = 2;
		const sectionHeight = window.innerHeight / totalSections;

		let scrollPosition = window.scrollY;
		let currentSection = Math.floor(scrollPosition / sectionHeight);

		let windowWidth = window.innerWidth;

		// Ratio relative to the scroll height of the section
		let ratio = scrollPosition / sectionHeight;

		if (currentSection === 0) {
			// Increase text size
			let newSize = calculateFontSize(1, 3, scrollPosition, sectionHeight);
			scaleDownText.style.fontSize = `${newSize}em`;
		}

		if (currentSection === 1) {
			// Controlling the width of the browser window and setting the appropriate dimensions
			if (windowWidth >= 1024) {
				moveLeftBox.style.paddingTop = `${calculateSizeValue(0, 2.5, ratio)}rem`;
				moveLeftBox.style.paddingLeft = `${calculateSizeValue(0, 2.25, ratio)}rem`;
				moveLeftLine.style.width = `${calculateSizeValue(1, 10.7, ratio)}rem`;
				moveRightBox.style.paddingRight = `${calculateSizeValue(0, 2.25, ratio)}rem`;
				moveRightBox.style.paddingBottom = `${calculateSizeValue(0, 4, ratio)}rem`;
			} else if (windowWidth >= 680) {
				moveLeftBox.style.paddingTop = `${calculateSizeValue(0, 2, ratio)}rem`;
				moveLeftBox.style.paddingLeft = `${calculateSizeValue(0, 1, ratio)}rem`;
				moveLeftLine.style.width = `${calculateSizeValue(1, 7.7, ratio)}rem`;
				moveRightBox.style.paddingRight = `${calculateSizeValue(0, 1, ratio)}rem`;
				moveRightBox.style.paddingBottom = `${calculateSizeValue(0, 3, ratio)}rem`;
			} else {
				moveLeftBox.style.paddingTop = `${calculateSizeValue(0, 1, ratio)}rem`;
				moveLeftLine.style.width = `${calculateSizeValue(1, 7, ratio)}rem`;
				moveLeftLine.style.marginTop = `${calculateSizeValue(0, 1, ratio)}rem`;
				moveRightBox.style.paddingBottom = `${calculateSizeValue(0, 1.75, ratio)}rem`;
			}
		}

		if (currentSection === 2) {
			// Decrease text size
			let newSize = calculateFontSize(3, 1, scrollPosition, sectionHeight);
			scaleUpText.style.fontSize = `${newSize}em`;
		}
	}

	function scrollToTop() {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	}

	function scrollToCenter() {
		moveSection.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}

	window.addEventListener('scroll', scrollHandler);
	scaleUpText.addEventListener("click", scrollToTop);
	scaleDownText.addEventListener('click', scrollToCenter);

	scrollToTop();
});
