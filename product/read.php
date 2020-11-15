<?php
header("Content-Type: application/json");
include_once 'config/database.php';
  
   class Read{
      private $conn;
      private $mysqli;

      function __construct()
      {
         $this->conn = new DataBase();
         $this->mysqli = $this->conn->getConnection();
         $this->arr = array();

      }

      function getRead(){
         $res = $this->mysqli->query("SELECT * FROM apartment");
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

   