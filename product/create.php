<?php
   header("Access-Control-Allow-Origin: *");
   header("Content-Type: application/json; charset=UTF-8");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



   include_once 'config/database.php';

   class Create
   {
      private $name;
      private $price;
      private $desc;
      private $image;
      private $created;

      function __construct()
      {
         $this->conn = new DataBase();
         $this->mysqli = $this->conn->getConnection();
      }

      function getCreate()
      {
         $data = json_decode(file_get_contents("php://input"), true);
         if(
            !empty($data['name']) &&
            !empty($data['price']) &&
            !empty($data['desc']) &&
            !empty($data['image'])
         ){
            $this->name = $data['name'];
            $this->price = $data['price'];
            $this->desc = $data['desc'];
            $this->image = $data['image'];
            $this->created = date('Y-m-d H:i:s');
            if ($this->mysqli->query(
            "INSERT INTO `apartment`(`name`, `price`, `description`, `image`, `created`, `modified`)
               VALUES ('$this->name', '$this->price','$this->desc', '$this->image', '$this->created', '$this->created')")==TRUE)
               {
                  http_response_code(201);

                  echo json_encode(
                     array(
                        "message" => "Запись была создана"), JSON_UNESCAPED_UNICODE
                     );
               }
               
            else{

               http_response_code(503);
               echo $this->name . $this->price . $this->desc . $this->image . $this->created;
               echo json_encode(
                  array(
                     
                     "message" => "Не удалось создать запись",
                     $this->mysqli->error), JSON_UNESCAPED_UNICODE
               );

            }
         }
         else{

            http_response_code(503);

            echo json_encode(
               array(
                  "message" => "Не удалось создать запись данне не полные"
               ), JSON_UNESCAPED_UNICODE
            );

         }
      }

   }

?>