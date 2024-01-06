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

		if (scrollPosition > 0 && scrollPosition <= 300) {
			let newSizeFirstSection = increaseFontSize(scrollPosition, 1, 0, 300);
			scrollDownBox.style.fontSize = `${newSizeFirstSection}em`;

			console.log('scrollDownBox fontSize:', scrollDownBox.style.fontSize);
		}

		if (windowWidth < 679) {
			if (scrollPosition > 300 && scrollPosition <= 600) {
				let newSizeThirdSection = decreaseFontSize(scrollPosition, 300, 600);
				scrollUpBox.style.fontSize = `${newSizeThirdSection}em`;

				console.log('scrollUpBox fontSize:', scrollUpBox.style.fontSize);
			}
		}

		if (windowWidth >= 679 && windowWidth < 1024) {
			if (scrollPosition > 500 && scrollPosition <= 800) {
				let newSizeThirdSection = decreaseFontSize(scrollPosition, 500, 800);
				scrollUpBox.style.fontSize = `${newSizeThirdSection}em`;

				console.log('scrollUpBox fontSize:', scrollUpBox.style.fontSize);
			}
		}

		if (windowWidth >= 1024) {
			if (scrollPosition > 800 && scrollPosition <= 1100) {
				let newSizeThirdSection = decreaseFontSize(scrollPosition, 700, 900);
				scrollUpBox.style.fontSize = `${newSizeThirdSection}em`;

				console.log('scrollUpBox fontSize:', scrollUpBox.style.fontSize);
			}
		}
	}

	handleScroll();

	window.addEventListener('resize', handleScroll);
	window.addEventListener('scroll', handleScroll);
});
