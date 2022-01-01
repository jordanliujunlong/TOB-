function load(id){
    var toast = document.getElementById("tosspot")
    var omit = document.getElementById("canal")
    if (id==="add"){
        toast.style.visibility="visible"
    }else{
        omit.style.visibility="visible"
    }
}
function add (id){
    var toast = document.getElementById("tosspot")
    var name = document.getElementById("name").value
    var stu_name = document.getElementById("stu_name").value
    var age = document.getElementById("age").value
    var grade = document.getElementById("grade").value
    var tbody = document.getElementById("tbMain")
    if (id === "add_y"){
        if (name!==""&&stu_name!==""&&age!==""&&grade!==""){
            var row=document.createElement("tr")
            var rank =document.createElement("td")
            row.appendChild(rank)
            var idCell = document.createElement("td")
            idCell.innerHTML =name
            row.appendChild(idCell)
            var nameCell=document.createElement("td")
            nameCell.innerHTML=stu_name
            row.appendChild(nameCell)
            var jobCell=document.createElement("td")
            jobCell.innerHTML=age
            row.appendChild(jobCell)
            var jobGrade=document.createElement("td")
            jobGrade.innerHTML=grade
            row.appendChild(jobGrade)
            tbody.appendChild(row)
            document.getElementById("name").value=""
            document.getElementById("stu_name").value=""
            document.getElementById("age").value=""
            document.getElementById("grade").value="一班"
            render()
            toast.style.visibility="hidden"
        }else{
            const div = document.createElement("div")
            document.body=appendChild(div)
            div.innerHTML="请把信息填写完整"
            div.className="popupStyle"
            div.style.display="block"
            setTimeout(()=>{
                div.remove();
            },1000
            );
        }
    }else{
        toast.style.visibility="hidden"
    }
}
function del (id){
    var omit = document.getElementById("canal")
    var remove  =document.getElementById("remove").value
    var tbody =document.getElementById("tbMain").getElementsByTagName("tr")
    if (id==="remove_y"){
        if (remove !==""){
            let stu_name=""
            for (let index = 0; index < tbody.length; index++){
                if (remove == tbody[index].cells[2].innerText){
                    stu_name = tbody[index];
                    break;
                }
            }
            if (stu_name!==""){
                tbody[0].parentNode.removeChild(stu_name);
                document.getElementById("remove").value=""
                render();
                omit.style.visibility="hidden"
            }else{
                const div = document.createElement("div")
                document.body.appendChild(div)
                div.innerHTML="没有这个学号"
                div.className="popupStyle"
                div.style.display="block"
                setTimeout(()=>{
                    div.remove();
                },1000
                );
            }
        } else {
            const div = document.createElement("div")
            document.body.appendChild(div)
            div.innerHTML="请把信息填写完整"
            div.className="popupStyle"
            div.style.display="block"
            setTimeout(()=>{
                div.remove();
            },1000
            );
        }
    }else{
        omit.style.visibility="hidden"
    }
}
function render (id){
    var tbody =document.getElementById("tbMain").getElementsByTagName("tr")
    for (let index=0;index<tbody.length;index++){
        tbody[index].cells[0].innerText=index+1
    }
}
