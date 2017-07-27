function popitup(url) {
	newwindow=window.open(url,'name','height=330,width=430');
	if (window.focus) {newwindow.focus()}
	return false;
}