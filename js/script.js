window.onload = function() {
	var winW = document.querySelector('body').style.width = document.documentElement.clientWidth;
	var winH = document.querySelector('body').style.height = document.documentElement.clientHeight + 'px';
	touchEvent();
}

function touchEvent() {
	var startX,
		endX,
		startY,
		endY,
		touch,
		X = 0,
		winW = document.documentElement.clientWidth,
		oUl = document.querySelector('.containor ul'),
		aLi = document.querySelectorAll('.containor ul li');
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].style.width = winW + 'px';
	    oUl.style.width = aLi[i].offsetWidth * aLi.length * 2 + 'px';
	}
	oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
	console.log(oUl.offsetWidth);

	// 触摸开始
	function start(e) {
		e = event || window.event;
		e.preventDefault();
		e.stopPropagation();
		touch = e.touches[0];
		startX = touch.pageX;
	}
	// 触摸移动
	function move(e) {
		e = event || window.event;
		e.preventDefault();
		e.stopPropagation();
		touch = e.touches[0];
	}
	// 触摸完毕
	function end(e) {
		e = event || window.event;
		e.preventDefault();
		e.stopPropagation();
		endX = touch.pageX - startX;
		if (endX > 0) {
			X += winW;
		} else if (endX < 0) {
			X -= winW;
		}
		if (X < (-oUl.offsetWidth)/2 +winW) {
			X = 0;
			// console.log('aaa'+(-oUlW + winW));
		} else if (X > 0) {
			X = ((-oUl.offsetWidth )/2 + winW);
		}
		console.log(oUl.offsetWidth);
		document.querySelector('.containor ul').style.left = X + 'px';
		console.log('X = ' + X);

	}
	document.addEventListener('touchstart', start, false);
	document.addEventListener('touchmove', move, false);
	document.addEventListener('touchend', end, false);
}