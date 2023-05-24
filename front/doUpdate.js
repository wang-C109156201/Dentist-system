function doUpdate(){
    let data = {
        "id": $("#id").val(),
        "name": $("#name").val(),
        "item": $("#item").val(),
        "date": $("#date").val(),
        "time": $("#time").val(),
        "doctor": $("#doctor").val(),
        "postscript": $("#postscript").val(),
    };
    axios.post("http://localhost/dentist/backend/index.php?action=DoUpdate",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        $("#content").html(response['message']);
    })
    .catch(err => {
        console.error(err); 
    })
}
export{doUpdate}