<?php
    header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json, charset=utf-8');

if(isset($_REQUEST['id']))
{


$id=$_REQUEST['id'];
$cnt = 0;
if (($handle = fopen("data.csv", "r")) !== FALSE) {
    while (($csvadata = fgetcsv($handle, 0, ",")) !== FALSE) {      
	   $data[$cnt++] = $csvadata;
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

