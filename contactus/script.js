function hi(){
    var x=document.getElementById("email").value;
    var y=document.getElementById("lemail")
    if(x!=""){
        y.style.top="-12px";
        y.style.left= "0";
        y.style.color="#282e34bb";
        y.style.fontSize="12px";
        y.style.fontWeight= "bold";
    }
    else{
        y.style.top="10px";
        y.style.color="#282e34ad";
        y.style.fontWeight="normal"
        y.style.fontSize="16px";
    }
    }
