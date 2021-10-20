<?php
    require_once("db_connect.php");
    // ファイル取得
    $imgFile = $_FILES["file"]["tmp_name"];
    $imgName = $_FILES['file']['name'];
    $imgPath = file_get_contents($imgFile);

    // エンコード
    $imgEnc = base64_encode($imgPath);
    $imgEncFile = "data:;base64,{$imgEnc}";
    $imgsize = getimagesize($imgEncFile);

    // ファイルの形式を判別
    if($imgsize['mime'] == 'image/jpeg'){
        $ex = 'jpg';
    }
    if($imgsize['mime'] == 'image/png') {
        $ex = 'png';
    } 
    if($imgsize['mime'] == 'image/gif') {
        $ex = 'gif';
    }

print $imgName;

    // ファイルのタイプを判別
    if(preg_match("/rocket/",$imgName)){
        $type = "rocket";
    }
    if(preg_match("/alien/",$imgName)){
        $type = "alien";
    }
    if(preg_match("/poop/",$imgName)){
        $type = "poop";
    }
    if(preg_match("/saturn/",$imgName)){
        $type = "saturn";
    }
    if(preg_match("/planet/",$imgName)){
        $type = "planet";
    }
    if(preg_match("/earth/",$imgName)){
        $type = "earth";
    }

    // データベースに保存
    $db->query("INSERT INTO `imgData`(`type`, `binary`, `name`, `mime`, `ex`) VALUES ('{$type}','{$imgEncFile}','{$imgName}','{$imgsize['mime']}','{$ex}');");
?>