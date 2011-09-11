function setHighlight()
{
  linkjump = window.location.hash.slice(1);
  if (linkjump)
    {
      targetElement = document.getElementById(linkjump);
      targetElement.className += ' jumphighlight';
    }
}
