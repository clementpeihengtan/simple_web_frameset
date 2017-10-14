function changepage(type) {
   if(type=="self") {
        document.getElementById('information').innerHTML = "This is about my self";
    }
    else if(type=="family") {
        document.getElementById('information').innerHTML = "This is about my family";
    }
    else if(type=="school") {
        document.getElementById('information').innerHTML = "This is about my school";
    }
    return false;
}