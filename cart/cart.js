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
function onloadgeneral(){
    var j=0;
        if(getCookie("product1")=="1"){

            var div1 = document.createElement("div");
            div1.innerHTML= "<img src='../media/photoproducts/pec.jpg'>";
            document.getElementById("products").appendChild(div1); 

            var div2 = document.createElement("div");
            div2.innerHTML = "<input type='checkbox' checked name='product1' value=\"Product\">";
            document.getElementById("form").appendChild(div2);

            var div3 = document.createElement("div");
            div3.innerHTML="<div class='uncheck' onclick=\"deletecookie('product1',1)\"><a href=\"../cart/cart.html\">Χ</a><p>Product</p></div>";
            document.getElementById("column").appendChild(div3);

            j++;
        }
        if(getCookie("product2")=="2"){
            var div4 = document.createElement("div");
            div4.innerHTML= "<img src='../media/photoproducts/pec.jpg'>";
            document.getElementById("products").appendChild(div4); 

            var div5 = document.createElement("div");
            div5.innerHTML = "<input type='checkbox' checked name='product2' value=\"Product\">";
            document.getElementById("form").appendChild(div5);

            var div6 = document.createElement("div");
            div6.innerHTML="<div class='uncheck' onclick=\"deletecookie('product2',2)\"><a href=\"../cart/cart.html\">Χ</a><p>Product</p></div>";
            document.getElementById("column").appendChild(div6);

            j++;
        }
        if(getCookie("product3")=="3"){
            var div7 = document.createElement("div");
            div7.innerHTML= "<img src='../media/photoproducts/pec.jpg'>";
            document.getElementById("products").appendChild(div7); 

            var div8 = document.createElement("div");
            div8.innerHTML = "<input type='checkbox' checked name='product3' value=\"Product\">";
            document.getElementById("form").appendChild(div8);

            var div9 = document.createElement("div");
            div9.innerHTML="<div class='uncheck' onclick=\"deletecookie('product3',3)\"><a href=\"../cart/cart.html\">Χ</a><p>Product</p></div>";
            document.getElementById("column").appendChild(div9);

            j++;
        }
        if(getCookie("product4")=="4"){
            var div10 = document.createElement("div");
            div10.innerHTML= "<img src='../media/photoproducts/pec.jpg'>";
            document.getElementById("products").appendChild(div10); 

            var div11 = document.createElement("div");
            div11.innerHTML = "<input type='checkbox' checked name='product4' value=\"Product\">";
            document.getElementById("form").appendChild(div11);

            var div12 = document.createElement("div");
            div12.innerHTML="<div class='uncheck' onclick=\"deletecookie('product4',4)\"><a href=\"../cart/cart.html\">Χ</a><p>Product</p></div>";
            document.getElementById("column").appendChild(div12);

            j++;
        }
        if(getCookie("product5")=="5"){
            var div13 = document.createElement("div");
            div13.innerHTML= "<img src='../media/photoproducts/pec.jpg'>";
            document.getElementById("products").appendChild(div13); 

            var div13 = document.createElement("div");
            div13.innerHTML = "<input type='checkbox' checked name='product5' value=\"Product\">";
            document.getElementById("form").appendChild(div13);

            var div14 = document.createElement("div");
            div14.innerHTML="<div class='uncheck' onclick=\"deletecookie('product5',5)\"><a href=\"../cart/cart.html\">Χ</a><p>Product</p></div>";
            document.getElementById("column").appendChild(div14);

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



