<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once "config/database.php";

class Search{
   private $conn;
   private $mysqli;


   public function __construct()
   {
      $this->conn = new DataBase();
      $this->mysqli = $this->conn->getConnection();
      $this->arr = array();   
   }


   public function getFinds($s){
      
      $res = $this->mysqli->query("SELECT * FROM apartment WHERE `name` LIKE '%$s%' OR `image` LIKE '%$s%' OR `price` LIKE '%$s%' OR `description` LIKE '%$s%'"
      );
      while(
         $row = $res->fetch_assoc()
         )
         {
         array_push($this->arr, $row);
      }
      $num = $res->num_rows;
      if($num>0)
         {
            http_response_code(200);
            echo json_encode($this->arr, JSON_UNESCAPED_UNICODE);
         }
         else
         {
            http_response_code(404);
            echo json_encode(
               array("message" => "По вашеу запосу результатов не найдено"), JSON_UNESCAPED_UNICODE
            );
        }
      
   }

     
}