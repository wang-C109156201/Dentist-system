<?php
    require_once 'mysql.inc.php';
    function DoSaD(){
        $response = openDB();
        if($response['status']==200) {
            $conn = $response['result'];
            if (isset($_POST['id'])) {
                $id = $_POST['id'];
                $sql = "SELECT  *  FROM  `registration` WHERE `id`=?";
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute(array($id));
            } else {
                $sql = "SELECT  *  FROM  `registration`";
                $stmt = $conn->prepare($sql);
                $result = $stmt->execute();
            }
            if($result) {
                $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
                $response['status'] = 200; //OK
                $response['message'] = "查詢成功";
                $response['result'] = $rows;
            }
            else {
                $response['status'] = 400; //Bad Request
                $response['message'] = "SQL錯誤";
            }
        }
        return($response); 
    }   
?>