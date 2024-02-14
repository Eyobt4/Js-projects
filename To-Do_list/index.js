// Create a "close" button and append it to each list item
var myNodeList = document.getElementByTagName('LI');
var i;
for(i=0;i < myNodeList.length;i++){
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
    
    }
}