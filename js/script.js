const table = document.querySelector('#assignmentsTable');
const buttonInsert = document.querySelector('.buttonInsert');
var allInputs = document.querySelectorAll('input');
var rowNo = 2;
buttonInsert.addEventListener('click', function () {
    var row = table.insertRow(rowNo)
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = document.querySelector('.assignmentName').value;
    cell2.innerHTML = document.querySelector('.className').value;
    cell3.innerHTML = document.querySelector('.dateinput').value;
    cell4.innerHTML = document.querySelector('.timeinput').value;
    cell5.innerHTML = document.querySelector('.priorityInput').value;
    cell6.innerHTML = document.querySelector('.estimatedTimeInput').value;
    cell7.innerHTML = document.querySelector('.status').value;
    document.querySelector('.assignmentName').value ='';
    document.querySelector('.className').value ='';
    document.querySelector('.dateinput').value ='';
    document.querySelector('.timeinput').value ='';
    document.querySelector('.priorityInput').value ='';
    document.querySelector('.estimatedTimeInput').value ='';
    document.querySelector('.status').value ='';
    
    rowNo++;
})


