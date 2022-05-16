function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

sq('button').on('click', function(){
	let number = getRandomInt(1, 40);
	if (number < 10) {number = '0'+ number;}
	sq(this).html('<div class="loader-' + number + '"></div> Loading...');
});

sq('body').on('resize', function() {
	sq('button').css('color', 'hsl(' + Math.floor((window.innerWidth / 360)*100)  + ', 70%, 70%)');
});