//This script should only be run by IE6
//Its purpose is to fix up the dodgy CSS implementation of hover in this browser

sfHover = function() {
    var sfEls = document.getElementById("navigation").getElementsByTagName("LI");
    for (var i=0; i<sfEls.length; i++) {
	sfEls[i].onmouseover=function() {
	    this.className+=" sfhover";
	}
	sfEls[i].onmouseout=function() {
	    this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
	}
    }
    if(document.getElementById("buttonbar"))
    {
        sfEls=document.getElementById("buttonbar").getElementsByTagName("LI");
        for (var i=0; i<sfEls.length; i++) {
	    sfEls[i].onmouseover=function() {
	        this.className+=" sfhover";
	    }
	    sfEls[i].onmouseout=function() {
	        this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
	    }
        }
    }
}

window.attachEvent("onload", sfHover);

