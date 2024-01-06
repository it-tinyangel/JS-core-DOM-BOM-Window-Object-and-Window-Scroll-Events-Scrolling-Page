document.addEventListener('DOMContentLoaded', () => {
	let scrollDownBox = document.getElementById('scrollDownBox');
	let scrollUpBox = document.getElementById('scrollUpBox');

	function increaseFontSize(scrollPosition, initialFontSize, rangeStart, rangeEnd) {
		let newSize = 1 + (scrollPosition - rangeStart) / (rangeEnd - rangeStart) * (3 - 1);
		newSize = Math.min(Math.max(newSize, 1), 3);
		return newSize * initialFontSize;
	}

	function decreaseFontSize(scrollPosition, rangeStart, rangeEnd) {
		let newSize = 3 - (scrollPosition - rangeStart) / (rangeEnd - rangeStart) * (3 - 1);
		newSize = Math.min(Math.max(newSize, 1), 3);
		return newSize;
	}

	function handleScroll() {
		let scrollPosition = window.scrollY;
		let windowWidth = window.innerWidth;

		console.log('scrollPosition:', scrollPosition);
		console.log('windowWidth:', windowWidth);

		if (scrollPosition > 20 && scrollPosition <= 220) {
			let newSizeFirstSection = increaseFontSize(scrollPosition, 1, 20, 220);
			scrollDownBox.style.fontSize = `${newSizeFirstSection}em`;

			console.log('scrollDownBox fontSize:', scrollDownBox.style.fontSize);
		}

		if (windowWidth < 379) {
			if (scrollPosition > 400 && scrollPosition <= 600) {
				let newSizeThirdSection = decreaseFontSize(scrollPosition, 400, 600);
				scrollUpBox.style.fontSize = `${newSizeThirdSection}em`;

				console.log('scrollUpBox fontSize:', scrollUpBox.style.fontSize);
			}
		}
		if (windowWidth >= 380 && windowWidth < 679) {
			if (scrollPosition > 300 && scrollPosition <= 500) {
				let newSizeThirdSection = decreaseFontSize(scrollPosition, 300, 500);
				scrollUpBox.style.fontSize = `${newSizeThirdSection}em`;
			}
		}

		if (windowWidth >= 679 && windowWidth < 1024) {
			if (scrollPosition > 400 && scrollPosition <= 600) {
				let newSizeThirdSection = decreaseFontSize(scrollPosition, 400, 600);
				scrollUpBox.style.fontSize = `${newSizeThirdSection}em`;

				console.log('scrollUpBox fontSize:', scrollUpBox.style.fontSize);
			}
		}

		if (windowWidth >= 1024) {
			if (scrollPosition > 600 && scrollPosition <= 800) {
				let newSizeThirdSection = decreaseFontSize(scrollPosition, 600, 800);
				scrollUpBox.style.fontSize = `${newSizeThirdSection}em`;

				console.log('scrollUpBox fontSize:', scrollUpBox.style.fontSize);
			}
		}
	}

	handleScroll();

	window.addEventListener('resize', handleScroll);
	window.addEventListener('scroll', handleScroll);
});
