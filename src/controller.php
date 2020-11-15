<?php
   require_once "product/read.php";
   require_once "product/create.php";
   require_once "product/update.php";
   require_once "product/delete.php";
   require_once "product/search.php";

   class Controller{
      private $read;
      private $create;
      private $update;
      function __construct(){
         $this->read = new Read();
         $this->create = new Create;
         $this->update = new Update;
         $this->delete = new Delete;
         $this->seacrh = new Search;
         
      }
      
      function printPage($url)
     
      {
         $params = explode('/', $url);
         $url=$params[0];
         $s = $params[1];
         switch ($url) 
         {
            case 'read':
               $this->read->getRead();
               break;

            case 'create':
               $this->create->getCreate();
               break;

            case 'update':
               $this->update->getUpdate();
               break;

            case 'delete':
               $this->delete->getDelete();
               break;

            case 'search':
               $this->seacrh->getFinds($s);
               break;

            default:
               http_response_code(404);
               echo json_encode("Страница не найдена", JSON_UNESCAPED_UNICODE);
               break;
         }
      }
   }
?>