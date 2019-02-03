<!-- Hide from old browsers
<!-- Number below represents how many images are in your rotation. -->
var imagenumber2 = 5;
var randomnumber2 = Math.random() ;
var rand2 = Math.round( (imagenumber2-1) * randomnumber2) + 1 ;

<!-- This is where you specify the location and titles of the event images in your rotation. -->
eventphotos2 = new Array
eventphotos2[1] = "assets/2006/images/home/kn.jpg"
eventphotos2[2] = "assets/2006/images/home/eco.jpg"
eventphotos2[3] = "assets/2006/images/home/ecampus.jpg"
eventphotos2[4] = "assets/2006/images/home/folk.jpg"
eventphotos2[5] = "assets/2006/images/home/kg02.jpg"

var eventphoto2 = eventphotos2[rand2]

<!-- This section will create an alt text tag for your event photograph, where you can specify the verbage a text-based browser will display. -->
alttags2 = new Array
alttags2[1] = ""
alttags2[2] = ""
alttags2[3] = ""
alttags2[4] = ""
alttags2[5] = ""

var alttag2 = alttags2[rand2]

<!-- This is where you specify the date of the event. -->
eventdates2 = new Array
eventdates2[1] = ""
eventdates2[2] = ""
eventdates2[3] = ""
eventdates2[4] = ""
eventdates2[5] = ""

var eventdate2 = eventdates2[rand2]

<!-- This is where you specify the title of the event. -->
eventtitles2 = new Array
eventtitles2[1] = "Kasaragod"
eventtitles2[2] = "Eco Friendly Campus"
eventtitles2[3] = "100% E-literate Campus"
eventtitles2[4] = "Folk Art Forms"
eventtitles2[5] = "Kasaragod"

var eventtitle2 = eventtitles2[rand2]

<!-- This section will create the corresponding text for your photograph.  Please keep in mind that if you must create a visible quotation mark, you must type the single quote mark twice instead of the double quote mark once.  -->
eventtexts2 = new Array
eventtexts2[1] = "Language and life style of the Kasaragod is still considerably influenced by Kannada culture. The main languages are Kannada, Malayalam and Tulu."
eventtexts2[2] = "The green lawns, garden and other plants maintained here enhance the beauty of the campus."
eventtexts2[3] = "All students in the campus are given free training in basic use of computers and internet. The college computer centre with broadband internet facility."
eventtexts2[4] = "The region is rich in traditional folk art forms. Theyyam is the dominant folk art form. Kathakali, Yakshagana, Bhuta Kola, Oppana, Kolkalli, Dauf muttal are also common."
eventtexts2[5] = "The name, Kasaragod, is said to be derived from the word <e>Kasaragod</e> meaning <e>Nuxvomica forests (Kanjirakuttom)</e>."

var eventtext2 = eventtexts2[rand2]

<!-- This section will supply the link target for the MORE link.  -->
detailslinktargets2 = new Array
detailslinktargets2[1] = "#"
detailslinktargets2[2] = "#"
detailslinktargets2[3] = "#"
detailslinktargets2[4] = "#"
detailslinktargets2[5] = "#"

var detailslinktarget2 = detailslinktargets2[rand2]

<!-- This section will pull the image from the IMG SRC that you specify.  DO NOT CHANGE THIS CODE!!! -->
document.write('<div id="eventtext-2">' + eventdate2 + '<b>' + eventtitle2 + '</b> - <br />' + eventtext2 + '</div><div id="eventpic-2"><a href="' + detailslinktarget2 + '"><img src="' + eventphoto2 + '" alt="' + alttag2 + '" /></a></div>')
// -- End Hiding Here -->