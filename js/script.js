document.addEventListener('DOMContentLoaded', () => {
	let moveSection = document.querySelector('.move-from');

	let scaleDownText = document.querySelector('.scale-down__text');
	let scaleUpText = document.querySelector('.scale-up__text');

	let moveLeftBox = document.querySelector('.move-from__left');
	let moveLeftLine = document.querySelector('.move-from__left__line');
	let moveRightBox = document.querySelector('.move-from__right');

	function scrollHandler() {
		const totalSections = 2;
		const sectionHeight = window.innerHeight / totalSections;

		let scrollPosition = window.scrollY;
		let currentSection = Math.floor(scrollPosition / sectionHeight);

		let windowWidth = window.innerWidth;
		let newSizeLeftBox, newSizeLeftLine, newSizeRightBox1, newSizeRightBox2;

		if (currentSection === 0) {
			let newSize = 1 + (scrollPosition % sectionHeight) / sectionHeight * (3 - 1);
			newSize = Math.min(Math.max(newSize, 1), 3);
			scaleDownText.style.fontSize = `${newSize}em`;
		}

		if (currentSection === 1) {
			if (windowWidth >= 1200) {
				newSizeLeftBox = (scrollPosition % sectionHeight) / sectionHeight * (3 - 1);
				newSizeLeftLine = (70 / 16) + (scrollPosition / sectionHeight) * (9 - 1);
				newSizeRightBox1 = (scrollPosition % sectionHeight) / sectionHeight * (5 - 1);
				newSizeRightBox2 = (scrollPosition % sectionHeight) / sectionHeight * (9 - 1);
				// apply styles
				moveLeftBox.style.paddingTop = `${newSizeLeftBox}rem`;
				moveLeftBox.style.paddingLeft = `${newSizeLeftBox}rem`;
				moveLeftLine.style.width = `${newSizeLeftLine}rem`;
				moveRightBox.style.paddingRight = `${newSizeRightBox1}rem`;
				moveRightBox.style.paddingBottom = `${newSizeRightBox2}rem`;
			} else if (windowWidth >= 768) {
				newSizeLeftBox = (scrollPosition % sectionHeight) / sectionHeight * (3 - 1);
				newSizeLeftLine = (70 / 16) + (scrollPosition / sectionHeight) * (7 - 1);
				newSizeRightBox1 = (scrollPosition % sectionHeight) / sectionHeight * (3 - 1);
				newSizeRightBox2 = (scrollPosition % sectionHeight) / sectionHeight * (7 - 1);
				// apply styles
				moveLeftBox.style.paddingTop = `${newSizeLeftBox}rem`;
				moveLeftBox.style.paddingLeft = `${newSizeLeftBox}rem`;
				moveLeftLine.style.width = `${newSizeLeftLine}rem`;
				moveRightBox.style.paddingRight = `${newSizeRightBox1}rem`;
				moveRightBox.style.paddingBottom = `${newSizeRightBox2}rem`;
			} else {
				newSizeLeftBox = (scrollPosition % sectionHeight) / sectionHeight * (3 - 1);
				newSizeLeftLine = (70 / 16) + (scrollPosition / sectionHeight) * (9 - 1);
				newSizeRightBox1 = (scrollPosition % sectionHeight) / sectionHeight * (3 - 1);
				newSizeRightBox2 = (scrollPosition % sectionHeight) / sectionHeight * (3 - 1);
				// apply styles
				moveLeftBox.style.paddingTop = `${newSizeLeftBox}rem`;
				moveLeftLine.style.width = `${newSizeLeftLine}rem`;
				moveLeftLine.style.marginTop = `${newSizeRightBox1}rem`;
				moveRightBox.style.paddingBottom = `${newSizeRightBox2}rem`;
			}
		}

		if (currentSection === 2) {
			let newSize = 3 - (scrollPosition % sectionHeight) / sectionHeight * (3 - 1);
			newSize = Math.min(Math.max(newSize, 1), 3);
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
