function position() {
	var x = document.getElementById("child3");
	x.scrollLeft = 1000;
}

function change(child, l, w, img, mouseover) {
	
	if (mouseover) {
		var x = document.getElementById(child);
		x.style.left = l+"%";
		x.style.width = w+"%";
		x.style.zIndex = "1";

		var y = document.getElementById(img);
		y.style.width = y.offsetWidth+"px";

		var z = document.getElementById("data");
		z.style.width = "100%";
	}
	else {
		var x = document.getElementById(child);
		x.style.left = l+"%";
		x.style.width = w+"%";
		x.style.zIndex = "0";

		var y = document.getElementById(img);
		y.style.width = y.offsetWidth+"px";

		var z = document.getElementById("data");
		z.style.width = "50%";
	}
}