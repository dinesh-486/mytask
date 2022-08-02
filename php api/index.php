<?php
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');
$row = 1;
$get_data=array();
if (($handle = fopen("data.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
     
        if($row!=1)
        { 
           
            
            $get_data[]=array("id"=>$data[0],"name"=>$data[1],"state"=>$data[2],"zip"=>$data[3],"amount"=>$data[4],"qty"=>$data[5],"item"=>$data[6]);
            
            }
        
     $row++;
        }
   
    fclose($handle);
}

echo json_encode($get_data);
?>
