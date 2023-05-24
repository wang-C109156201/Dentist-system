<?php
    
    require_once "./mysql.inc.php";
    function DoDeletetwo(){
        $id = $_POST['id'];
        $response = openDB();
        if($response['status']==200) {
            $conn = $response['result'];
            $sql = "DELETE  FROM `registration` WHERE id=?";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($id));
            if($result) {
                $count = $stmt->rowCount();
                if($count<1){
                    $response['status'] = 204; //No Content
                    $response['message'] = "取消掛號失敗";
                }
                else{
                    $response['status'] = 200; //OK
                    $response['message'] = "取消掛號成功";
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