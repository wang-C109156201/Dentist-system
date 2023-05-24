import {showUpdatePage} from './showUpdatePage.js';
import {doDelete} from './doDelete.js';
function showDeleteList(){
    showList("delete");
}
function showUpdateList(){
    showList("update");
}
function showList(type){
    axios.get("http://localhost/dentist/backend/index.php?action=DoSelect")
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                //作畫面
                let rows = response['result'];
                let str = `<table>`;
                str+='<tr>'+'<td>'+''+'</td>'+'<td>'+'預約人名稱'+'</td>'+'<td>'+'項目'+'</td>'+'<td>'+'希望日期'+'</td>'+'<td>'+'希望時間'+'</td>'+'<td>'+'有無指定醫師'+'</td>'+'<td>'+'附註有無藥物過敏'+'</td>'+'</tr>'
                rows.forEach(element =>{
                    str+="<tr>";
                    str+="<td>"+`<input type="radio" id="id"name="id" value="`+element['id']+`">`+"</td>";
                    str+="<td>"+element['name']+"</td>";
                    str+="<td>"+element['item']+"</td>";
                    str+="<td>"+element['date']+"</td>";
                    str+="<td>"+element['time']+"</td>";
                    str+="<td>"+element['doctor']+"</td>";
                    str+="<td>"+element['postscript']+"</td>";
                    str+="<tr>";
                });
                str+=`<table>`
                if(type=="delete"){
                    str += `<button id="doDelete">刪除</button>`;
                    $("#content").html(str);
                    $("#doDelete").click(function(){
                        doDelete();
                    });
                }
                else{
                    str +=`<table>`
                    str += `<button id="showUpdatePage">修改</button>`;
                    $("#content").html(str);
                    $("#showUpdatePage").click(function(){
                        showUpdatePage();
                        console.log(777)
                    });
                }
                break;
            default:
                $("#content").html(response['message']);
                break;
        }
    })
    .catch(err => {
        console.error(err); 
    })    
}
export { showUpdateList, showDeleteList };

