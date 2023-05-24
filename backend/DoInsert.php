<?php
   
    require_once "./mysql.inc.php";
    function DoInsert(){
        $id=$_POST['id'];$name=$_POST['name'];$item=$_POST['item'];$date=$_POST['date'];$time=$_POST['time'];$doctor=$_POST['doctor'];$postscript=$_POST['postscript'];
        $response = openDB();
        if($response['status']==200) {
            //code...
            $conn=$response['result'];
            $sql="INSERT INTO`dentist`(`id`,`name`,`item`,`date`,`time`,`doctor`,`postscript`)VALUES(?,?,?,?,?,?,?)";
            $stmt=$conn->prepare($sql);
            $result=$stmt->execute(array($id,$name,$item,$date,$time,$doctor,$postscript));
            if($result){
                $count = $stmt->rowCount();
                if ($count<1){
                    $response['status']=204;//No Content
                    $response['message']="新增失敗"; 
                }
                else{
                    $response['status']=200;//OK
                    $response['message']="新增成功";
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