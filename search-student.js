let visible = false;

const studentsData = [
    { id: 20210921, name: "Ahmed Sahal Mahil", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Active", department: "IT", email: "a.sahal@fci-cu.edu.eg", mobile: "1234567890" },
    { id: 20210341, name: "Mohamed Sayed Abdelhakem", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Inactive", department: "IT", email: "mohad.s@fci-cu.edu.eg", mobile: "1234567890" },
    { id: 20210816, name: "Abdalaziz Yousif Elamin", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Active", department: "IT", email: "aziz.y@fci-cu.edu.eg", mobile: "1234567890" },
    { id: 20210872, name: "Omer Abdulmunem Ibrahim", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Inactive", department: "IT", email: "omer.a@fci-cu.edu.eg", mobile: "1234567890" },
    { id: 20210874, name: "Khalid Mutaz Osman", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Active", department: "IT", email: "k.mutaz@fci-cu.edu.eg", mobile: "1234567890" },
    { id: 20190465, name: "Mohamed Ali Elsagheer", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Active", department: "IT", email: "mohad.ali@fci-cu.edu.eg", mobile: "1234567890" },

];

function searchActiveStudents() {
    const name = document.getElementById("searchName").value;
    const activeStudents = studentsData.filter(student => student.status === "Active");
    const filteredStudents = activeStudents.filter(student => student.name.toLowerCase().includes(name.toLowerCase()));
    renderActiveStudentsTable(filteredStudents);
}


function renderActiveStudentsTable(activeStudents) {
var tableHtml = "<table>";
tableHtml += "<tr><th>ID</th><th>Name</th><th>Date of Birth</th><th>GPA</th><th>Gender</th><th>Level</th><th>Status</th><th>Department</th><th>Email</th><th>Mobile Number</th></tr>";

for (var i = 0; i < activeStudents.length; i++) {
tableHtml += "<tr>";
tableHtml += "<td>" + activeStudents[i].id + "</td>";
tableHtml += "<td>" + activeStudents[i].name + "</td>";
tableHtml += "<td>" + activeStudents[i].dob + "</td>";
tableHtml += "<td>" + activeStudents[i].gpa + "</td>";
tableHtml += "<td>" + activeStudents[i].gender + "</td>";
tableHtml += "<td>" + activeStudents[i].level + "</td>";
tableHtml += "<td>" + activeStudents[i].status + "</td>";
tableHtml += "<td>" + activeStudents[i].department + "</td>";
tableHtml += "<td>" + activeStudents[i].email + "</td>";
tableHtml += "<td>" + activeStudents[i].mobile + "</td>";
tableHtml += "</tr>";
}

tableHtml += "</table>";
document.getElementById("activeStudentsTable").innerHTML = tableHtml;
}