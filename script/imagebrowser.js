
function blank_loaded()
{
    document.getElementById("photo").onload = null
    document.getElementById("photo").src = photos[current_photo]
    document.getElementById("photo").className = aspects[current_photo]
    document.getElementById("buttonbar").className = aspects[current_photo]
    var count = "<p class=\"count\">" + (current_photo + 1) + " of " + photos.length + "</p>"
    document.getElementById("photo").alt = (current_photo + 1) + " of " + photos.length
    document.getElementById("caption").innerHTML = count + captions[current_photo]

}

function set_photo()
{
    document.getElementById("photo").onload = blank_loaded
    document.getElementById("photo").src = "images/1px.png"
}

function first_photo()
{
    current_photo = 0
    set_photo(current_photo)
    return false;
}

function prev_photo()
{
    current_photo--
    if(current_photo<0)
        current_photo = 0
    set_photo(current_photo)
    return false;
}

function next_photo()
{
    current_photo++
    if(current_photo == photos.length)
        current_photo--
    set_photo(current_photo)
    return false;
}

function last_photo()
{
    current_photo = photos.length - 1
    set_photo(current_photo)
    return false;
}
    
var current_photo = 0
