<?php

define("DBHOST", "localhost");
define("DBUSER", "root");
define("DBPASS", "");
define("DB", "chat");

$connection = @mysqli_connect(DBHOST, DBUSER, DBPASS, DB) or die("Нет соединения с БД");
mysqli_set_charset($connection, "utf8") or die("Не установлена кодировка соединения");

function get_sms(){
    global $connection;

    $query = "SELECT * FROM `coments`";
    $res = mysqli_query($connection, $query);

    $arr_sms = array();
    while($row = mysqli_fetch_assoc($res)){
        $arr_sms[] = $row;
    }

    return $arr_sms;
}


function add_sms(){
    global $connection;
    
 $query = "INSERT INTO `coments` SET
            `nicName` = '".$_GET['nickname']."',
            `text` = '".$_GET['message']."'
";

   mysqli_query($connection, $query);
}



    if(@$_GET['function'] == 'getState' ){

        echo json_encode(get_sms());
    }

    if(@$_GET['function'] == 'send'){

        add_sms();
    }

?>