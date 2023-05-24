import { doUpdate } from "./doUpdate.js";
function showUpdatePage(){
    let data={
        "id":$("input[name=id]:checked").val(),
    };  
    console.log(data)
    axios.post("http://localhost/dentist/backend/index.php?action=DoSelect",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        let row = response['result'][0];
        let str = `電話：<input type="text" id="id" value='`+row['id']+`'><br>`;
        str += `姓名：<input type="text" id="name" value='`+row['name']+`'><br>`;
        str += `項目：<input type="text" id="item" value='`+row['item']+`'><br>`;
        str += `希望日期：<input type="text" id="date" value='`+row['date']+`'><br>`;
        str += `希望時間：<input type="text" id="time" value='`+row['time']+`'><br>`;
        str += `醫生：<input type="text" id="doctor" value='`+row['doctor']+`'><br>`;
        str += `附註(有無藥物過敏)：<input type="text" id="postscript" value='`+row['postscript']+`'><br>`;
        str += `<button id="showupdate">更新</button>`;  
        $("#content").html(str);
        $("#showupdate").click(function(){
            doUpdate();
            
        });
    })
    .catch(err => {
        console.error(err); 
    })
}    
export{showUpdatePage}