<?php
header("Access-Control-Allow-Origin: *");
$_SERVER['REQUEST_URI']; 
$strs = explode("url=",$_SERVER['REQUEST_URI']);
$url = $strs[1];

$cmd = 'node generate-full-page-base64.js "'.$url.'"   2>&1';
$base64 = shell_exec($cmd);
// echo  "<img src=data:image/png;base64,{$img}>";  
echo $base64;  

?>
