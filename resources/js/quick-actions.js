'use strict'


const __ = {
	addClass			: (elem, str) => { elem.classList.add(str) },
	append 				: (elem, val) => { elem.push(val) },
	classList 			: (elem) => { return (' ' + (elem.className || '') + ' ').replace(/\s+/gi, ' ');},
	floor 				: (elem) => { return Math.floor(elem) },
	get 				: (elem) => { return document.querySelector(elem) },
	gets 				: (elem) => { return document.querySelectorAll(elem) },
	hasClass 			: (elem, name) => 
		{
	      var list = typeof elem == 'string' ? elem : classList(elem);
	      return list.indexOf(' ' + name + ' ') >= 0;
	  	},
	min 				: (x, y) => { return Math.min(x, y) },
	max 				: (x, y) => { return Math.max(x, y) },
	pow 				: (x, y) => { return Math.pow(x, y) },
	on 					: (elem, event, callback, capture = false)=>
	{
		elem.addEventListener(event, callback, capture)
	},
	off 				: (elem, event, callback) => {	elem.removeEventListener(event, callback) },
	removeClass			: (elem, dom) => { elem.classList.remove(dom) },
	replaceClass 		: (elem, _old_, _new_) => { elem.classList.replace(_old_, _new_) },
	setElemActive		: (item, Arr) => {
		Arr.forEach(e => {
			__.removeClass(e, 'active')
		});
		__.addClass(item, 'active')
	},
	toggle  			: (elem, dom) => { elem.classList.toggle(dom) }


}

export default __