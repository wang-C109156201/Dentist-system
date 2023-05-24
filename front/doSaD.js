export default function doSaD() {
    let str='輸入身分證字號: <input type="text" id="id">'
    str+='<button id="dosad">查詢</button>'
    $("#content").html(str);
    $("#dosad").click(function (e) { 
        let data = {
            "id":$("#id").val(),
        };
        console.log(data)
        axios.post("http://localhost/dentist/backend/index.php?action=DoSaD",Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            let row = response['result'][0];
            console.log(row)
            switch (response['status']) {
                case 200:
                    console.log(response['result']);
                    let str = `<table>`;
                    str+='<tr>'+'<td>'+'身分證'+'</td>'+'<td>'+'生日(月)'+'</td>'+'<td>'+'生日(日)'+'</td>'+'<td>'+'掛號醫生'+'</td>'+'</tr>'
                    str+="<tr>";
                    str+="<td>"+row['id']+"</td>";
                    str+="<td>"+row['birthmonth']+"</td>";
                    str+="<td>"+row['birthday']+"</td>";
                    str+="<td>"+row['doctor']+"</td>";
                    str+="</tr>";
                    str += `<table>`;
                    str+=`<button id="dodeletetwo">取消掛號</button>`
                    $("#content").html(str);
                    $("#dodeletetwo").click(function(){
                        alert('您確定要取消嗎?');
                        axios.post("http://localhost/dentist/backend/index.php?action=DoDeletetwo",Qs.stringify(data))
                        .then(res => {
                            let response = res ['data'];
                            $("#content").html(response['message']);
                        })
                        .catch(err => {
                            console.error(err); 
                        })
                    });
                    break;
                default:
                    $("#content").html(response['message']);
                    break;
            } 
        })
        .catch(err => {
            console.error(err); 
        })
    });
}    