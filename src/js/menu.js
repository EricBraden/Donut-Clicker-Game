// let state = 0;
// function showMenuItem(input){
// 	if (state == 0){
// 		switch(input){
// 			case 'about': 
// 				document.getElementById('menu-item-about').style.display = 'block';
// 				document.getElementById('menu-id-about').style.background = 'blue';
// 				break;
// 			case 'inspiration':
// 				document.getElementById('menu-item-inspiration').style.display = 'block';
// 				document.getElementById('menu-id-inspiration').style.background = 'blue';
// 				break;
// 			case 'contact':
// 				document.getElementById('menu-item-contact').style.display = 'block';
// 				document.getElementById('menu-id-contact').style.background = 'blue';
// 				break;
// 		}
// 		state = 1;
// 	}
// }
// function hideAllMenus(){
// 	document.getElementById('menu-item-about').style.display = 'none';
// 	document.getElementById('menu-id-about').style.background = '#3498DB';
// 	document.getElementById('menu-item-inspiration').style.display = 'none';
// 	document.getElementById('menu-id-inspiration').style.background = '#3498DB';
// 	document.getElementById('menu-item-contact').style.display = 'none';
// 	document.getElementById('menu-id-contact').style.background = '#3498DB';
// 	state = 0;
// }

// =================================================================================
//                            new code

let menuBoxAbout = document.getElementById('menu-item-about');
document.getElementById('menu-id-about').addEventListener('click', function(){
	closeAllMenus();
	menuBoxAbout.style.display = 'block';
})
let menuBoxInspiration = document.getElementById('menu-item-inspiration');
document.getElementById('menu-id-inspiration').addEventListener('click', function(){
	closeAllMenus();
	menuBoxInspiration.style.display = 'block';
})
let menuBoxCntact = document.getElementById('menu-item-contact');
document.getElementById('menu-id-contact').addEventListener('click', function(){
	closeAllMenus();
	menuBoxCntact.style.display = 'block';
})

let closeX = document.querySelectorAll('.closeTheBox');
closeX.forEach(x_btn => {
	x_btn.addEventListener('click', function(){
		closeAllMenus();
	})
})

function closeAllMenus(){
	menuBoxAbout.style.display = 'none';
	menuBoxInspiration.style.display = 'none';
	menuBoxCntact.style.display = 'none';
}