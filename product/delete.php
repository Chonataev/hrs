<?php 

   header("Access-Control-Allow-Origin: *");
   header("Content-Type: application/json; charset=UTF-8");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

   class Delete
   {
      private $id;
      private $conn;
      private $mysqli;

      function __construct()
      {
         $this->conn = new DataBase();
         $this->mysqli = $this->conn->getConnection();
      }
      public function getDelete()
      {
         $data = json_decode(file_get_contents("php://input"), true);
         $this->id = $data['id'];

         if ($this->mysqli->query("DELETE FROM apartment WHERE id=$this->id") === TRUE) 
         {
            http_response_code(200);

            echo json_encode(
               array(
                  "message" => "Товар был удалён."
               ),
                JSON_UNESCAPED_UNICODE
            );
         }

         else {

            http_response_code(503);
        
            echo json_encode(
               array(
                  "message" => "Не удалось удалить товар."
               ),
               JSON_UNESCAPED_UNICODE
            );
        }

      }
   }

?>