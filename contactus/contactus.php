<?php
    $myfile=fopen("contactinfo.txt","a");
    
    $txt=$_POST["fullname"]." \n"
    .$_POST["email"]." \n"
    .$_POST["subject"]." \n"
    .$_POST["message"]." \n \n"
    ."this message was sent on "
    .date("l jS \of F Y h:i:s A")."\n"
    ."--------------------- \n \n";
    
    fwrite($myfile,$txt);
    header("Location: wewillbebackwithyou.html");

?>