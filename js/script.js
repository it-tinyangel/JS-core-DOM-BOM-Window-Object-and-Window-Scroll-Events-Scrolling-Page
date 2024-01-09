document.addEventListener('DOMContentLoaded', () => {
	let scrollMove = document.querySelector('.move-from');

	function handleScroll(scrollBox, offsetValue) {
		window.onscroll = () => {
			let top = window.scrollY;
			let offset = scrollBox.offsetTop + offsetValue;
			let height = scrollBox.offsetHeight;

			if (top >= offset && top < offset + height) {
				scrollBox.classList.add('show-animate');
			}
			else {
				scrollBox.classList.remove('show-animate');
			}
		}
	}

	handleScroll(scrollMove, -150);
});
