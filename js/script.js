document.addEventListener('DOMContentLoaded', () => {
	let moveSection = document.querySelector('.move-from');
	let scaleDownText = document.querySelector('.scale-down__text');
	let scaleUpText = document.querySelector('.scale-up__text');

	function scrollHandler() {
		const totalSections = 2; 
		const sectionHeight = window.innerHeight / totalSections;
		let scrollPosition = window.scrollY;
		let currentSection = Math.floor(scrollPosition / sectionHeight);

		if (currentSection === 0) {
			let newSize = 1 + (scrollPosition % sectionHeight) / sectionHeight * (3 - 1);
			newSize = Math.max(Math.min(newSize, 3), 1);
			scaleDownText.style.fontSize = `${newSize}em`;
		}

		if (currentSection === 2) {
			let newSize = 3 - (scrollPosition % sectionHeight) / sectionHeight * (3 - 1);
			newSize = Math.min(Math.max(newSize, 1), 3);
			scaleUpText.style.fontSize = `${newSize}em`;
		}
	}

	function scrollSmoothToTop() {
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
	scaleUpText.addEventListener("click", scrollSmoothToTop);
	scaleDownText.addEventListener('click', scrollToCenter);

	scrollSmoothToTop();
});
