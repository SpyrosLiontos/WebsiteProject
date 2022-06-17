<?php
if(isset($_POST["product1"])||isset($_POST["product2"])||isset($_POST["product3"])
||isset($_POST["product4"])||isset($_POST["product5"])){

    $myfile=fopen("orders.txt","a");

    $txt=$_POST["product1"]." \n"
    .$_POST["product2"]." \n"
    .$_POST["product3"]." \n"
    .$_POST["product4"]." \n"
    .$_POST["product5"]." \n \n"
    .$_POST["fullname"]." \n"
    .$_POST["email"]." \n"
    .$_POST["address"]." \n"
    .$_POST["postalcode"]." \n"
    .$_POST["city"]." \n"
    .$_POST["phonenumber"]." \n"
    ."this order was placed on "
    .date("l jS \of F Y h:i:s A")."\n"
    ."--------------------- \n";
    
    fwrite($myfile,$txt);
    header("Location: completed.html");


}
else{

    header("Location: cart.html");

}

?>