<?php
    require_once "./mysql.inc.php";
    function DoRegistration(){
        $id=$_POST['id'];$birthmonth=$_POST['birthmonth'];$birthday=$_POST['birthday'];$doctor=$_POST['doctor'];$week=$_POST['week'];$time=$_POST['time'];
        $response = openDB();
        if($response['status']==200) {
            //code...
            $conn=$response['result'];
            $sql="INSERT INTO`registration`(`id`,`birthmonth`,`birthday`,`doctor`,`week`,`time`)VALUES(?,?,?,?,?,?)";
            $stmt=$conn->prepare($sql);
            $result=$stmt->execute(array($id,$birthmonth,$birthday,$doctor,$week,$time));
            if($result){
                $count = $stmt->rowCount();
                if ($count<1){
                    $response['status']=204;//No Content
                    $response['message']="掛號失敗"; 
                }
                else{
                    $response['status']=200;//OK
                    $response['message']="掛號成功";
                }

            }
            else{
                $response['status']=400;
                $response['message']="SQL錯誤";
            }    
        }
        return($response); 
    }    

?>