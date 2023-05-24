export default function doSelect() {
    axios.get("http://localhost/dentist/backend/index.php?action=DoSelect")
    .then(res => {
        let response = res['data'];
        switch (response['status']) {
            case 200:
                console.log(response['result'])
                let rows = response['result'];
                let str = `<table>`;
                str+='<tr>'+'<td>'+'預約人電話'+'</td>'+'<td>'+'預約人名稱'+'</td>'+'<td>'+'項目'+'</td>'+'<td>'+'希望日期'+'</td>'+'<td>'+'希望時間'+'</td>'+'<td>'+'有無指定醫師'+'</td>'+'<td>'+'附註有無藥物過敏'+'</td>'+'</tr>'
                rows.forEach(element => {
                    str+="<tr>";
                    str+="<td>"+element['id']+"</td>";
                    str+="<td>"+element['name']+"</td>";
                    str+="<td>"+element['item']+"</td>";
                    str+="<td>"+element['date']+"</td>";
                    str+="<td>"+element['time']+"</td>";
                    str+="<td>"+element['doctor']+"</td>";
                    str+="<td>"+element['postscript']+"</td>";
                    str+="</tr>";
                });
                str += `<table>`;
                $("#content").html(str);
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