<?php

   class DataBase{
      private $url;
      private $name;
      private $password;
      private $db_name;

      function __construct(){
         $this->url = "localhost";
         $this->name = "root";
         $this->password = "root";
         $this->db_name = "api_db";
      }

     function getConnection(){
      try {
         $this->mysqli = new mysqli($this->url, $this->name, $this->password, $this->db_name);
         if ($this->mysqli->connect_errno){
           throw new Exception("Conaction failed.");
         }
      } catch (Exception $e) {
            echo $e->getMessage();
            die();
      }
      return $this->mysqli;
     }
      
   }

?>