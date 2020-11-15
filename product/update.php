<?php 

   header("Access-Control-Allow-Origin: *");
   header("Content-Type: application/json; charset=UTF-8");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

   include_once 'config/database.php';
   
   class Update
   {
      private $id;
      private $name;
      private $price;
      private $desc;
      private $image;
      private $modified;

      function __construct()
      {
         $this->conn = new DataBase();
         $this->mysqli = $this->conn->getConnection();
      }


      public function getUpdate()
      {
         $data = json_decode(file_get_contents("php://input"), true);
         
         $this->id = $data['id'];
         $this->name = $data['name'];
         $this->price = $data['price'];
         $this->desc = $data['desc'];
         $this->image = $data['image'];
         $this->modified = date('Y-m-d H:i:s');

         if ($this->mysqli->query(
            "UPDATE `apartment` SET `name` = '$this->name', `price` = '$this->price',
             `description` = '$this->desc', `image` = '$this->image', `modified` = '$this->modified'   WHERE `id`=$this->id"
            
           
            ) === TRUE) 
            {
               http_response_code(200);
               echo json_encode(array("message" => "Товар был обновлён."), JSON_UNESCAPED_UNICODE);
                }
         else {

         http_response_code(503);
      
         echo json_encode(
            array(
               "message" => "Невозможно обновить товар.",
               $this->mysqli->error
            ),
             JSON_UNESCAPED_UNICODE
            );
      }

      }

   }
?>