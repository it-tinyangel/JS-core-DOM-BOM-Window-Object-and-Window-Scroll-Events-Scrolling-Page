let scrollDownBox = document.getElementById('scrollDownBox');
let scrollUpBox = document.getElementById('scrollUpBox');

let scrollSlideBox = document.getElementById('scrollSlideBox');

// let scrollDownText = document.getElementById('scrollDownText');
// let scrollUpText = document.getElementById('scrollUpText');

// let scrollSlideText = document.getElementById('scrollSlideText');
// let scrollSlideLine = document.getElementById('scrollSlideLine');
// let scrollSlideImage = document.getElementById('scrollSlideImage');

// console.log('window.scrollY:', window.scrollY);
// console.log('window.innerWidth:', window.innerWidth);
// console.log('scrollDownBox.offsetTop:', scrollDownBox.offsetTop);
// console.log('scrollDownBox.offsetHeight:', scrollDownBox.offsetHeight);

function handleScroll(scrollBox,offsetValue) {
	window.onscroll = () => {
		let top = window.scrollY;
		let offset = scrollBox.offsetTop + offsetValue;
		let height = scrollBox.offsetHeight;

		if (top >= offset && top < offset + height) {
			scrollBox.classList.add('show-animate');
			console.log(scrollBox);
		}
		else {
			scrollBox.classList.remove('show-animate');
		}
	}
}

handleScroll(scrollDownBox, +300);
handleScroll(scrollUpBox, +300);
handleScroll(scrollSlideBox, -150);
