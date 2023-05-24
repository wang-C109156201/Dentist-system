import {DoInsert} from "./doInsert.js";
export default function showInsertPage() {  //新增
    let str = `<table>`;
    str += `<tr><td>電話：<input type="text" placeholder="請輸入電話" id="id" maxlength="10" class="required"/></td><tr>`;
    str += `<tr><td>姓名：<input type="text" id="name" maxlength="10"required></td><tr>`;
    str+='<tr><td>求診原因:<select id="item">' 
    str+='<option value="洗牙">洗牙</option>'
    str+='<option value="蛀牙">蛀牙</option>'
    str+='<option value="口腔檢查">口腔檢查</option>'
    str+='<option value="假牙問題">假牙問題</option>'
    str+='<option value="其他">其他</option>'
    str+='</select></td><tr>'
    str+='<tr><td>希望日期:<select id="date">' 
    str+='<option value="週一">週一</option>'
    str+='<option value="週二">週二</option>'
    str+='<option value="週三">週三</option>'
    str+='<option value="週四">週四</option>'
    str+='<option value="週五">週五</option>'
    str+='</select></td><tr>'
    str+='<tr><td>希望時間:<select id="time">' 
    str+='<option value="上午9點到11點">上午9點到11點</option>'
    str+='<option value="下午1點到4點">下午1點到4點</option>'
    str+='<option value="晚上6點到10點">晚上6點到10點</option>'
    str+='</select></td><tr>'
    str+='<tr><td>預約醫生:<select id="doctor">' 
    str+='<option value="無特別需求">無特別需求</option>'
    str+='<option value="張醫師">張醫師</option>'
    str+='<option value="吳醫師">吳醫師</option>'
    str+='<option value="王醫師">王醫師</option>'
    str+='</select></td><tr>'
    str += `<tr><td>附註(有無藥物過敏或特殊需求)：<input type="text" id="postscript"></td><tr>`;
    str += `<table>`;
    str += `<button id="doinsert">新增</button>`; 
    $("#content").html(str);
    $("#doinsert").click(function(){    
        DoInsert();
    });    
    
}