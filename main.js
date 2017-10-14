window.onload = function() {
    var frame = document.body.getElementsByTagName('frameset')[1].getElementsByTagName('frame');
    frame[0].addEventListener('click', changepage('self'), false);
    frame[1].addEventListener('click', changepage('family'), false);
    frame[2].addEventListener('click', changepage('school'), false);
}

function changepage(type) {
    if(type=='self'){
        document.getElementById('change').src ="file://"+window.location.pathname.substring(0,window.location.pathname.length-11)+"frame_h.html";
    }
    else if(type=='family') {
        document.getElementById('change').src ="file://"+window.location.pathname.substring(0,window.location.pathname.length-11)+"frame_family.html";
    }
    else if(type=='school') {
        document.getElementById('change').src ="file://"+window.location.pathname.substring(0,window.location.pathname.length-11)+"frame_school.html";
    }
    alert("We are here");
}
