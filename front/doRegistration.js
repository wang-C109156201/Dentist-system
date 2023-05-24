export default function doRegistration() {
    let str = `<table style="border-top:3px #FFD382 solid;border-bottom:3px #0000E6 solid;" cellpadding="10" border='0'>`;
    str += `<tr style="background-color:#f593c4 ;border-spacing: 0"><td></td><td>星期一</td><td>星期二</td><td>星期三</td><td>星期四</td><td>星期五</td></tr>`;
    str += `<tr><td>早上</td><td><input type="button" id="one" name="mon moring" value="張醫師"></td><td><input type="button" id="one" name="tue moring" value="吳醫師"></td><td><input type="button" id="one" name="wed moring" value="吳醫師"></td><td><input type="button" id="one" name="thu moring" value="吳醫師"></td><td><input type="button" id="one" name="fri moring" value="王醫師"></td></tr>`;
    str += `<tr><td>下午</td><td><input type="button" id="one" name="mon afternoon" value="張醫師"></td><td><input type="button" id="one" name="tue afternoon" value="吳醫師"></td><td><input type="button" id="one" name="wed afternoon" value="吳醫師"></td><td><input type="button" id="one" name="thu afternoon" value="王醫師"></td><td><input type="button" id="one" name="fri afternoon" value="張醫師"></td></tr>`;
    str += `<tr><td>晚上</td><td><input type="button" id="one" name="mon night" value="張醫師"></td><td><input type="button" id="one" name="tue night" value="王醫師"></td><td><input type="button" id="one" name="wed night" value="王醫師"></td><td><input type="button" id="one" name="thu night" value="王醫師"></td><td><input type="button" id="one" name="fri night" value="張醫師"></td></tr>`;
    str +=`</table>`;
    $("#content").html(str);
    $("input[id=one]").click(function (e){
        let words = this.name.split(' '); 
        console.log(words[0]);  //就是 按下按鈕的name
        let doctor = $(this).val();     //就是 按下按鈕的value
        console.log(doctor);
        str = `<table>`;
        str += `<tr><td>預約星期</td><td>時間</td><td>醫師</td></tr>`;
        str += '<tr><td>'+words[0]+'</td><td>'+words[1]+'</td><td>'+doctor+'</td></tr>';
        str +=`</table>`;
        str += `<table>`;
        str += `<tr><td>身分證：<input type="text"  id="id" maxlength="10" required="required"/></td><tr>`;
        str += `<tr><td>生日(月)：<input type="text" id="birthmonth" maxlength="2" class="required"/></td><tr>`;
        str += `<tr><td>生日(日)：<input type="text"  id="birthday" maxlength="2" class="required"/></td><tr>`;
        str +=`</table>`;
        str += `<button id="doregistration">確認掛號</button>`; 
        $("#content").html(str);
        $("#doregistration").click(function(){    
            let data = {
                "id": $("#id").val(),
                "birthmonth": $("#birthmonth").val(),
                "birthday": $("#birthday").val(),
                "doctor":doctor,
                "week":words[0],
                "time":words[1],
            };
            console.log(data)
            axios.post("http://localhost/dentist/backend/index.php?action=DoRegistration",Qs.stringify(data))
            .then(res => {
                let response = res['data'];
                $("#content").html(response['message']);
            })
            .catch(err => {
                console.error(err); 
            })
        }); 
    });

}