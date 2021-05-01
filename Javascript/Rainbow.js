/*Some fun javascript that changes the colors as an easter egg*/ 
function easterEgg (){

    document.getElementById("Brand").style.color = "#FF0000"
    document.getElementById("Home").style.color = "#FF7F00"
    document.getElementById("Review").style.color = "#FFFF00"
    document.getElementById("About").style.color = "#00FF00"
    document.getElementById("Clock").style.color = "#0000FF"
    document.getElementById("Privacy").style.color = "#2E2B5F"
    document.getElementById("Easter").style.color = "#8B00FF"
    
    var elmnt = document.getElementById("Brand");
    elmnt.scrollIntoView();
    
    
    
    }