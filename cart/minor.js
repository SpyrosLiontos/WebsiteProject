function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
function numberofproducts(){
    var j=0;
    if(getCookie("product1")=="1"){
        j++;
    }
    if(getCookie("product2")=="2"){
        j++;
    }
    if(getCookie("product3")=="3"){
        j++;
    }
    if(getCookie("product4")=="4"){
        j++;
    }
    if(getCookie("product5")=="5"){
        j++;
    }
    document.getElementById("numberoncart").innerHTML= j;

}
function deletecookie(cname,cvalue) {
    var d = new Date();
    d.setTime(d.getTime() - (1*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires+ ";path=/";
  }