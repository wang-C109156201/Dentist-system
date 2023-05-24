import doRegistration from './doRegistration.js'; 
import showInsertPage from './showInsertPage.js'; 
export default function doserves() {
    let str = `<br><button id="t">1.網路掛號服務</button>`;
    str += `<br><br><button id="b">2.提供醫生諮詢服務</button><br>` ;
    str += `<p>醫師班表如下:</p>`;
    str += `<table style="border:3px #FFAC55 solid;padding:5px;line-height:50px;" rules="all" width="500" cellpadding='5';>`;
    str += `<tr bgcolor="#FFB630"><td></td><td>星期一</td><td>星期二</td><td>星期三</td><td>星期四</td><td>星期五</td></tr>`;
    str += `<tr><td>早上</td><td>張醫師</td><td>吳醫師</td><td>吳醫師<br>諮詢建議醫生及時間</td><td>王醫師</td><td>吳醫師</td></tr>`;
    str += `<tr bgcolor="#FFD78C"><td>下午</td><td>張醫師</td><td>吳醫師</td><td>吳醫師</td><td>王醫師</td><td>張醫師</td></tr>`;
    str += `<tr><td>晚上</td><td>張醫師</td><td>王醫師</td><td>王醫師</td><td>王醫師</td><td>張醫師</td></tr>`;
    str +=`</table>`;
    $("#content").html(str);
    $("#t").click(function (e) { 
        doRegistration();
    });
    $("#b").click(function (e) { 
        showInsertPage();
    }); 
}