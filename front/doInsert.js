function DoInsert(){
    let data = {
        "id": $("#id").val(),
        "name": $("#name").val(),
        "item": $("#item").val(),
        "date": $("#date").val(),
        "time": $("#time").val(),
        "doctor": $("#doctor").val(),
        "postscript": $("#postscript").val(),
    };
    console.log(data)
    axios.post("http://localhost/dentist/backend/index.php?action=DoInsert",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        $("#content").html(response['message']);
        console.log("888") 
    })
    .catch(err => {
        console.error(err); 
    })
    console.log("444") 
}  
export{DoInsert}
 