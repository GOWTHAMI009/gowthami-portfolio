function myfunction(){
    var x=document.getElementById("tog");
    if(x.className=="toggle"){
        x.className+="responsive";
    }
    else{
        x.className="toggle";
    }
}
