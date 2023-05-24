<?php
    require_once "./mysql.inc.php";
    function DoDelete(){
        $id = $_POST['id'];
        $response = openDB();
        if($response['status']==200) {
            $conn = $response['result'];
            $sql = "DELETE  FROM `dentist` WHERE id=?";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($id));
            if($result) {
                $count = $stmt->rowCount();
                if($count<1){
                    $response['status'] = 204; //No Content
                    $response['message'] = "刪除失敗";
                }
                else{
                    $response['status'] = 200; //OK
                    $response['message'] = "刪除成功";
                }
            }
            else {
                $response['status'] = 400; //Bad Request
                $response['message'] = "SQL錯誤";
            }
        }
        return($response); 
    }    
?>