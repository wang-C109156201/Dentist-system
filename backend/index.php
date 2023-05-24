<?php
    if(isset($_GET['action'])) 
        $action=$_GET['action'];
    else
        $action='No Action';
    switch ($action) {
        case 'DoSelect':
            require_once "select.php";
            $response = DoSelect();
            break;
        case 'DoInsert':
            require_once "DoInsert.php";
            $response = DoInsert();
            break;
        case 'DoUpdate':
            require_once "DoUpdate.php";
            $response = DoUpdate();
            break;
        case 'DoDelete':
            require_once "DoDelete.php";
            $response = DoDelete();
            break;
        case 'DoRegistration':
            require_once "DoRegistration.php";
            $response = DoRegistration();
            break;    
        case 'DoSaD':
            require_once "DoSaD.php";
            $response = DoSaD();
            break;
        case 'DoDeletetwo':
            require_once "DoDeletetwo.php";
            $response = DoDeletetwo();
            break;           
    default:
        $response['status'] = 404; 
        $response['message'] = "action not found";
        break;
    }
    echo json_encode($response);
?>
    
