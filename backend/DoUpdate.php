<?php
    
    require_once "./mysql.inc.php";
    function DoUpdate(){
        $id=$_POST['id'];$name=$_POST['name'];$item=$_POST['item'];$date=$_POST['date'];$time=$_POST['time'];$doctor=$_POST['doctor'];$postscript=$_POST['postscript'];
        $response = openDB();
        if($response['status']==200) {
            $conn = $response['result'];
            $sql = "UPDATE`dentist` SET `name`=?,`item`=?,`date`=?,`time`=?,`doctor`=?,`postscript`=? WHERE id=?";
            $stmt = $conn->prepare($sql);
            $result = $stmt->execute(array($name,$item,$date,$time,$doctor,$postscript, $id));
            if($result) {
                $count = $stmt->rowCount();
                if($count<1){
                    $response['status'] = 204; //No Content
                    $response['message'] = "更新失敗";
                }
                else{
                    $response['status'] = 200; //OK
                    $response['message'] = "更新成功";
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