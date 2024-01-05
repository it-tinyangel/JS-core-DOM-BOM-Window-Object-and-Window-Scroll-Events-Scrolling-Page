document.addEventListener('DOMContentLoaded', () => {
	let scrollDownBox = document.getElementById('scrollDownBox');
	let scrollUpBox = document.getElementById('scrollUpBox');

	function increaseFontSize(scrollPosition) {
		let newSize = 1 + (scrollPosition - 20) / (300 - 20) * (3 - 1);
		newSize = Math.min(Math.max(newSize, 1), 3);
		return newSize;
	}

	const decreaseFontSize = () => '3em';

	function handleScroll() {
		let scrollPosition = window.scrollY;

		if (scrollPosition > 20 && scrollPosition <= 300) {
			let newSize = increaseFontSize(scrollPosition);
			scrollDownBox.style.fontSize = `${newSize}em`;
			console.log('scrollDownBox fontSize:', scrollDownBox.style.fontSize);
		}

		scrollUpBox.style.fontSize = `${decreaseFontSize()}em`;
	}

	handleScroll();

	window.addEventListener('resize', handleScroll);
	window.addEventListener('scroll', handleScroll);
});
