//NavMenu
function NavMenu() {
	nav = document.getElementById("header");
	//alert(window.pageYOffset);
	if (window.pageYOffset >= 700) {
		nav.style.top = "0px";
	}
	else {
		nav.style.top = "-50px";
	}
}


window.onload = Init;
function myMove() {
	navcheck = setInterval(NavMenu, 1000);
	var elem = document.getElementById("balloftank");
	let pos = 0;
	var id = setInterval(frame, 10);
	console.log(elem.id);
	function frame() {
		if (pos == 97) {
			document.getElementById('balloftank').style.display = 'none';
			document.getElementById('spanidofgame').style.visibility = 'visible';
			clearInterval(id);
		}
		else {
			pos++;

			elem.style.left = pos + "px";



		}
	}
}

//mayank part 
x = 0;	//refer to objects
addi = 45;

function Init() {
	img = [new SI(90, "SI_img1"), new SI(45, "SI_img2"), new SI(0, "SI_img3"), new SI(-45, "SI_img4"), new SI(-90, "SI_img5")];
}
auto = setInterval(Slider, 5000, 1);
function Slider(a) {
	addi = a * addi;
	//img[x].move();
	tim = setInterval(tr, 10);
}

function tr() {
	if (x < 5) {
		img[x].move();
		x++;
	}
	else {
		x = 0;
		addi = 45;
		clearInterval(tim);
	}
}

class SI {

	constructor(current, name) {
		this.current = current;
		this.i = document.getElementById(name);
	}

	move() {
		alert("abbb");
		this.i.style.transform = "translateX(" + (-20 * (this.current + addi)) + "px) rotateY(" + (this.current + addi) + "deg)";
		//this.i.style.transform = "rotateY("+(this.current + addi)+"deg)";

		this.current = this.current + addi;
		//this.i.style.zIndex = "-1";
		if (this.current == 0) { this.i.style.zIndex = "1"; }
		else { this.i.style.zIndex = "-1"; }
		this.check();
	}

	check() {
		if (this.current > 90) {
			this.i.style.transition = "0.1s";
			this.i.style.visibility = "hidden";
			this.i.style.transform = "translateX(900px) rotateY(-90deg)";
			this.current = -90;
			this.i.style.zIndex = "-2";
			this.i.style.visibility = "visible";
			this.i.style.transition = "1s";
		}
		if (this.current < -90) {
			this.i.style.transition = "0.1s";
			this.i.style.visibility = "hidden";
			this.i.style.transform = "translateX(-900px) rotateY(90deg)";
			this.current = 90;
			this.i.style.zIndex = "-2";
			this.i.style.visibility = "visible";
			this.i.style.transition = "1s";
		}
	}
}


//ends here
