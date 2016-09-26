(function() {

createSlider();
loadReactiveSelector();

function createSlider() {
	var slider = document.createElement('div');

	slider.style.position = "fixed";
	slider.style.top = "0px";
	slider.style.left = "0px";
	slider.style.width = "100%";
	slider.style.height = "5px";
	slider.style.borderBottom = "1px solid black";

	document.body.appendChild(slider);
	document.body.style.paddingTop = "20px";
}

function loadReactiveSelector() {
	document.addEventListener('mouseover', function(event) {
    	event.target.style.outline = "1px solid black";
	}, false);

	document.addEventListener('mouseout', function(event) {
		event.target.style.outline = "0";
	}, false)
}

})();