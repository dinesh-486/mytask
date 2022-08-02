<?php
  header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json, charset=utf-8');



  $data=file_get_contents('php://input');


  $array=json_decode($data,true);
  
  
  
  if(isset($array['data'][0]))
  {
      $list = array_values($array['data'][0]);
if (($handle = fopen("data.csv", "r")) !== FALSE) {
  while (($csvadata = fgetcsv($handle, 0, ",")) !== FALSE) {      
     $list[$cnt++] = $csvadata;
  }
  fclose($handle);
  unset($data[$id]);
}
$fp = fopen('data.csv', 'w');
foreach ($data as $fields) {
  fputcsv($fp, $fields);
}
fclose($fp);

  $arr=array("status"=>true,"delete_id"=>$id);

  echo json_encode($arr);


}


?>

