//don't think you're supposed to use document.write, but this code is run before any other elements are added so it should be fine
document.write('<div class="header">');
	document.write('<a href="index.html"><h1>AlphaVer Fan Hub</h1></a>');
	document.write('<i>A work in progress!</i>');
	document.write('<div class="header-buttons">');
	//document.write('<a href="nerd.html"><button class="button-smol">Nerd Stuff</button></a>');
	document.write('<a href="resources.html"><button class="button-smol">Resources</button></a>');
	//TODO: make fun.html and link block-map.html from there
	document.write('<a href="block-map.html"><button class="button-smol">Fun Stuff</button></a>');
	document.write('<a href="mods.html"><button class="button-smol">Mods and Visuals</button></a>');
	document.write('<a href="gallery.html"><button class="button-smol">Gallery</button></a>');
	document.write('</div>');
document.write('</div>');

document.write('<a class="contact" href="contact.html">Contact</a>');

//document.write('<a href="gallery.html"><button class="button-smol">Gallery</button></a>');

let bgScroll = 0;
const bodd = document.body;
//BUG(?): speed might change with different browser/fps, untested issue
function scroll() {
	bodd.style.backgroundPosition = "0px " + bgScroll + "px";
	bgScroll -= 0.1;
	window.requestAnimationFrame(scroll);
}
//TODO: add thing to toggle this, some people don't like moving backgrounds!
window.requestAnimationFrame(scroll);