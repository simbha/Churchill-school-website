//This script should only be run by IE6
//Its purpose is to fix up the dodgy CSS implementation of hover in this browser

sfHover = function() {
    //Unfortunately, its not possible to join two nodeLists - we therefore have to
    //push everything into an array, which is a tad messy. Ho hum.
    var sfElArray = []
    var sfEls = document.getElementById("navigation").getElementsByTagName("LI");
    for (var i=0; i<sfEls.length; i++)
        sfElArray.push(sfEls[i])
    if(document.getElementById("buttonbar"))
    {
        sfEls=document.getElementById("buttonbar").getElementsByTagName("LI");
        for (var i=0; i<sfEls.length; i++)
            sfElArray.push(sfEls[i])
    }
    for (var i=0; i<sfElArray.length; i++)
    {
	sfElArray[i].onmouseover=function() {
	    this.className+=" sfhover";
	}
	sfElArray[i].onmouseout=function() {
	    this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
	}
    }
}

window.attachEvent("onload", sfHover);

