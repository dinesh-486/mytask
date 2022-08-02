<?php
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');


$data=file_get_contents('php://input');


$array=json_decode($data,true);



if(isset($array['data'][0]))
{
    $list = array_values($array['data'][0]);

    $file = fopen('data.csv','a');  // 'a' for append to file - created if doesn't exit
    fputcsv($file,$list);
    fclose($file); 

    echo json_encode($array['data'][0]);

}


?>

