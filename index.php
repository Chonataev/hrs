<?php
   header("Access-Control-Allow-Origin: *");
   header("Content-Type: application/json; charset=UTF-8");
   
   require_once("src/controller.php");
   $controller = new Controller();

   if(isset($_REQUEST)){
      $url =  $_REQUEST["url"];
     
   }

   $controller->printPage($url);

?>