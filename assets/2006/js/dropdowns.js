var menus = [
	new ypSlideOutMenu("AboutMenu", "down", 100, 157, 180, 300),
	new ypSlideOutMenu("AcademicsMenu", "down", 100, 157, 200, 200),
	new ypSlideOutMenu("DepartmentsMenu", "down", 100, 157, 200, 450),
	new ypSlideOutMenu("ActivitiesMenu", "down", 100, 157, 200, 500),
	new ypSlideOutMenu("InformationMenu", "down", 100, 157, 150, 200),
	new ypSlideOutMenu("NewsMenu", "down", 100, 157, 150, 200),
	new ypSlideOutMenu("GalleryMenu", "down", 100, 157, 120, 140) ];

function findPosX(obj,objWidth) {
	var curleft = 0;
	if (obj.offsetParent) {
		while (obj.offsetParent) {
			curleft += obj.offsetLeft;
			obj = obj.offsetParent; }
	} else if (obj.x) {
		curleft += obj.x; }
	//curleft = (curleft + objWidth) - 210;
	return curleft; }


function setMenuPos(menu, offset) { menu.container.style ? menu.container.style.left = offset + "px" : menu.container.left = offset; }

menus[0].onactivate = function() { setMenuPos(menus[0], findPosX(document.getElementById("nav_inside"),172)); }
menus[1].onactivate = function() { setMenuPos(menus[1], findPosX(document.getElementById("nav_newsevents"),197)); }
menus[2].onactivate = function() { setMenuPos(menus[2], findPosX(document.getElementById("nav_admissions"),197)); }
menus[3].onactivate = function() { setMenuPos(menus[3], findPosX(document.getElementById("nav_prodevelop"),197)); }
menus[4].onactivate = function() { setMenuPos(menus[4], findPosX(document.getElementById("nav_community"),197)); }
menus[5].onactivate = function() { setMenuPos(menus[5], findPosX(document.getElementById("nav_publications"),197)); }
menus[6].onactivate = function() { setMenuPos(menus[6], findPosX(document.getElementById("nav_programs"),197)); }