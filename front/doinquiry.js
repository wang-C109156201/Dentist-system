import doSelect from './doSelect.js';
import showInsertPage from './showInsertPage.js'; 
import {showUpdateList,showDeleteList}  from './showList.js';
export default function doinquiry() {
    
    let str =`<button id="insert">約診</button>`;
    str += `<button id="update">修改約診</button>`;
    str += `<button id="delete">取消預約</button>`;
    str += `<button id="select">查詢所有約診</button>`;
    $("#content").html(str);
    $("#insert").click(function (e) { 
        showInsertPage();
    });    
    $("#update").click(function (e) { 
        showUpdateList();
    });    
    $("#delete").click(function (e) { 
        showDeleteList();
    });    
    $("#select").click(function (e) { 
        doSelect();
    });
    
}
