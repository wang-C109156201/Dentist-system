export default function doDelete(){
    let data={
        "id":$("input[name=id]:checked").val(),
    };
    axios.post("http://localhost/dentist/backend/index.php?action=DoDelete",Qs.stringify(data))
    .then(res => {
        let response = res ['data'];
        $("#content").html(response['message']);
    })
    .catch(err => {
        console.error(err); 
    })
}    
export{doDelete}