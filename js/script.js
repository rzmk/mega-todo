const table = document.querySelector('#assignmentsTable');
const buttonInsert = document.querySelector('.buttonInsert');
var allInputs = document.querySelectorAll('input');
var rowNo = 2;
buttonInsert.addEventListener('click', function () {
    if (document.querySelector('.assignmentName').value == "" || document.querySelector('.className').value == "" || document.querySelector('.dateinput').value == "" || document.querySelector('.timeinput').value == "" || document.querySelector('.priorityInput').value == "" || document.querySelector('.estimatedTimeInput').value == "" || document.querySelector('.status').value == "") {
        alert("Please fill in all the details!!!")
    }
    else {
        var row = table.insertRow(rowNo)
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerText = document.querySelector('.assignmentName').value;
        cell2.innerText = document.querySelector('.className').value;
        cell3.innerText = document.querySelector('.dateinput').value;
        cell4.innerText = document.querySelector('.timeinput').value;
        cell5.innerText = document.querySelector('.priorityInput').value;
        cell6.innerText = document.querySelector('.estimatedTimeInput').value;
        cell7.innerText = document.querySelector('.status').value;


        var ele = document.createElement("OPTION");
        ele.setAttribute("value", document.querySelector('.className').value);
        var par = document.createTextNode(document.querySelector('.className').value);
        ele.appendChild(par);

        document.querySelector("#classes").appendChild(ele);


        document.querySelector('.assignmentName').value = '';
        document.querySelector('.className').value = '';
        document.querySelector('.dateinput').value = '';
        document.querySelector('.timeinput').value = '';
        document.querySelector('.priorityInput').value = '';
        document.querySelector('.estimatedTimeInput').value = '';
        document.querySelector('.status').value = '';


        rowNo++;
    }

})


