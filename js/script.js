document.addEventListener('DOMContentLoaded', () => {
	const moveSection = document.querySelector('.move-from');
	const scaleDownText = document.querySelector('.scale-down__text');
	const scaleUpText = document.querySelector('.scale-up__text');
	const moveLeftBox = document.querySelector('.move-from__left');
	const moveLeftLine = document.querySelector('.move-from__left__line');
	const moveRightBox = document.querySelector('.move-from__right');

	scrollToTop();

	window.addEventListener('scroll', scrollHandler);
	scaleDownText.addEventListener('click', scrollToCenter);
	scaleUpText.addEventListener("click", scrollToTop);

	function scrollHandler() {
		const totalSections = 2;
		const sectionHeight = window.innerHeight / totalSections;

		const scrollPosition = window.scrollY;
		const currentSection = Math.floor(scrollPosition / sectionHeight);

		const windowWidth = window.innerWidth;

		const ratio = scrollPosition / sectionHeight; // Ratio relative to the scroll height of the section

		if (currentSection === 0) {
			// Controlling the width of the browser window and increase text size
			if (windowWidth >= 1024) {
				const newSize = calculateFontSize(2, 3, scrollPosition, sectionHeight);
				scaleDownText.style.fontSize = `${newSize}em`;
			} else if (windowWidth >= 680) {
				const newSize = calculateFontSize(1.5, 2.5, scrollPosition, sectionHeight);
				scaleDownText.style.fontSize = `${newSize}em`;
			} else {
				const newSize = calculateFontSize(1, 2, scrollPosition, sectionHeight);
				scaleDownText.style.fontSize = `${newSize}em`;
			}
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
			// Controlling the width of the browser window and decrease text size
			if (windowWidth >= 1024) {
				const newSize = calculateFontSize(3, 2, scrollPosition, sectionHeight);
				scaleUpText.style.fontSize = `${newSize}em`;
			} else if (windowWidth >= 680) {
				const newSize = calculateFontSize(2.5, 1.5, scrollPosition, sectionHeight);
				scaleUpText.style.fontSize = `${newSize}em`;
			} else {
				const newSize = calculateFontSize(2, 1, scrollPosition, sectionHeight);
				scaleUpText.style.fontSize = `${newSize}em`;
			}
		}
	}

	function calculateFontSize(startSize, endSize, scrollPosition, sectionHeight) {
		return startSize - (scrollPosition % sectionHeight) / sectionHeight * (startSize - endSize);
	}

	function calculateSizeValue(startValue, endValue, ratio) {
		return startValue + ratio * (endValue - startValue);
	}

	function scrollToCenter() {
		moveSection.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	}

	function scrollToTop() {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		});
	}
});
