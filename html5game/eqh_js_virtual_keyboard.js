function js_create_virtual_keyboard_input(name){
	const input = document.createElement('input');
	input.type = 'text';
	input.id = name;
	input.style='position:fixed;top:0;left:0;width:1px;height:1px;opacity:0';
	document.body.appendChild(input);
	document.body.addEventListener('click', () => {
	  var clicked_element = gml_Script_gmcallback_get_clicked_element();
	  if(clicked_element != -1){
		js_focus_virtual_keyboard(clicked_element);
	  }
	});
}

function js_focus_virtual_keyboard(name){
	document.getElementById(name).focus();
}

function js_blur_virtual_keyboard(){
	document.activeElement.blur();
}

function js_get_virtual_keyboard_value(name){
	return document.getElementById(name).value;
}

function js_reset_virtual_keyboard_value(name){
	document.getElementById(name).value = "";
}

function js_get_virtual_keyboard_height(){
  return window.visualViewport ? window.innerHeight - window.visualViewport.height : 0;
}
