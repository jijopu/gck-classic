<!-- Hide from old browsers
<!-- Number below represents how many images are in your rotation. -->
var imagenumber = 8;
var randomnumber = Math.random() ;
var rand1 = Math.round( (imagenumber-1) * randomnumber) + 1 ;

<!-- This is where you specify the location and titles of the images in your rotation. -->
bigphotos = new Array
bigphotos[1] = "images/home_splash/home_splash_01.jpg" 
bigphotos[2] = "images/home_splash/home_splash_02.jpg"
bigphotos[3] = "images/home_splash/home_splash_03.jpg"
bigphotos[4] = "images/home_splash/home_splash_04.jpg"
bigphotos[5] = "images/home_splash/home_splash_05.jpg"
bigphotos[6] = "images/home_splash/home_splash_06.jpg"
bigphotos[7] = "images/home_splash/home_splash_07.jpg"
bigphotos[8] = "images/home_splash/home_splash_08.jpg"
var bigphoto = bigphotos[rand1]

<!-- This section will create an alt text tag for your photograph, where you can specify the verbage a text-based browser will display.-->
alttags = new Array
alttags[1] = ""
alttags[2] = ""
alttags[3] = ""
alttags[4] = ""
alttags[5] = ""
alttags[6] = ""
alttags[7] = ""
alttags[8] = ""

var alttag = alttags[rand1]

<!-- This section will create the corresponding page header for your copy. Please keep in mind that if you must create a visible quotation mark, you must type the single quote mark twice instead of the double quote mark once. -->
headertexts = new Array
headertexts[1] = "Welcome" 
headertexts[2] = "Welcome" 
headertexts[3] = "Welcome"
headertexts[4] = "Welcome"
headertexts[5] = "Welcome"
headertexts[6] = "Welcome"
headertexts[7] = "Welcome"
headertexts[8] = "Welcome"
var headertext = headertexts[rand1]

<!-- This section will create the corresponding text for your photograph.  Please keep in mind that if you must create a visible quotation mark, you must type the single quote mark twice instead of the double quote mark once.  -->
bigphototexts = new Array
bigphototexts[1] = "<p>Our Mission is to achieve the overall development of the students with a focus on knowledge, skill and the right social attitudes and service-mindedness required for attaining excellence in personal as well as social life.<br /><br />We are guided and inspired by a glorious vision to use our physical, mental and intellectual energies to the advancement of the individual and the society, to strive for the noble cause of education, truth and righteousness, to instill a sense of pride and emotional belongingness in the mind of every individual.</p>"
bigphototexts[2] = "<p>Our Mission is to achieve the overall development of the students with a focus on knowledge, skill and the right social attitudes and service-mindedness required for attaining excellence in personal as well as social life.<br /><br />We are guided and inspired by a glorious vision to use our physical, mental and intellectual energies to the advancement of the individual and the society, to strive for the noble cause of education, truth and righteousness, to instill a sense of pride and emotional belongingness in the mind of every individual.</p>"
bigphototexts[3] = "<p>Our Mission is to achieve the overall development of the students with a focus on knowledge, skill and the right social attitudes and service-mindedness required for attaining excellence in personal as well as social life.<br /><br />We are guided and inspired by a glorious vision to use our physical, mental and intellectual energies to the advancement of the individual and the society, to strive for the noble cause of education, truth and righteousness, to instill a sense of pride and emotional belongingness in the mind of every individual.</p>"
bigphototexts[4] = "<p>Our Mission is to achieve the overall development of the students with a focus on knowledge, skill and the right social attitudes and service-mindedness required for attaining excellence in personal as well as social life.<br /><br />We are guided and inspired by a glorious vision to use our physical, mental and intellectual energies to the advancement of the individual and the society, to strive for the noble cause of education, truth and righteousness, to instill a sense of pride and emotional belongingness in the mind of every individual.</p>"
bigphototexts[5] = "<p>Our Mission is to achieve the overall development of the students with a focus on knowledge, skill and the right social attitudes and service-mindedness required for attaining excellence in personal as well as social life.<br /><br />We are guided and inspired by a glorious vision to use our physical, mental and intellectual energies to the advancement of the individual and the society, to strive for the noble cause of education, truth and righteousness, to instill a sense of pride and emotional belongingness in the mind of every individual.</p>"
bigphototexts[6] = "<p>Our Mission is to achieve the overall development of the students with a focus on knowledge, skill and the right social attitudes and service-mindedness required for attaining excellence in personal as well as social life.<br /><br />We are guided and inspired by a glorious vision to use our physical, mental and intellectual energies to the advancement of the individual and the society, to strive for the noble cause of education, truth and righteousness, to instill a sense of pride and emotional belongingness in the mind of every individual.</p>"
bigphototexts[7] = "<p>Our Mission is to achieve the overall development of the students with a focus on knowledge, skill and the right social attitudes and service-mindedness required for attaining excellence in personal as well as social life.<br /><br />We are guided and inspired by a glorious vision to use our physical, mental and intellectual energies to the advancement of the individual and the society, to strive for the noble cause of education, truth and righteousness, to instill a sense of pride and emotional belongingness in the mind of every individual.</p>"
bigphototexts[8] = "<p>Our Mission is to achieve the overall development of the students with a focus on knowledge, skill and the right social attitudes and service-mindedness required for attaining excellence in personal as well as social life.<br /><br />We are guided and inspired by a glorious vision to use our physical, mental and intellectual energies to the advancement of the individual and the society, to strive for the noble cause of education, truth and righteousness, to instill a sense of pride and emotional belongingness in the mind of every individual.</p>"
var bigphototext = bigphototexts[rand1]

<!-- This section will supply the link target for the MORE link.  -->
morelinktargets = new Array
morelinktargets[1] = "index.html?about"
morelinktargets[2] = "index.html?about"
morelinktargets[3] = "index.html?about"
morelinktargets[4] = "index.html?about"
morelinktargets[5] = "index.html?about"
morelinktargets[6] = "index.html?about"
morelinktargets[7] = "index.html?about"
morelinktargets[8] = "index.html?about"

var morelinktarget = morelinktargets[rand1]

<!-- This section will pull the image from the IMG SRC that you specify.  DO NOT CHANGE THIS CODE!!! -->
document.write('<div id="bigphotoholder"><div id="bigphotobar"><div id="bigphoto"><a href="index.html"><IMG SRC="' + bigphoto + '" border="0" width="444" height="289" alt="' + alttag + '"></a>')
document.write('</div><div id="bigphototext"><div class="bigphototextindent"><h1>' + headertext +'</h1>' + bigphototext + '<p>> <a href="' + morelinktarget + '">More</a></p></div></div></div></div>')
// -- End Hiding Here -->