require('../sass/app.scss');

import { resetDefaults, onKeyPressed } from './slideManager.js';
import { onUploadFile, onSaveFile } from './jsonManager.js';

const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', toggleSidebar);
function toggleSidebar(e) {
	let sidebar = document.querySelector('#sidebar');
	if(sidebar.classList.contains('expanded')) {
		sidebar.classList.remove('expanded');
	} else {
		sidebar.classList.add('expanded');
	}
}

window.addEventListener('load', resetDefaults);
document.querySelector('body').addEventListener('keydown', onKeyPressed);
document.querySelector('#load').addEventListener('change', onUploadFile);
document.querySelector('#save').addEventListener( 'click', onSaveFile);
