const studentsData = [
    { id: 20210921, name: "Ahmed Sahal Mahil", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Active", department: "IT", email: "a.sahal@fci-cu.edu.eg", mobile: "1234567890" },
    { id: 20210341, name: "Mohamed Sayed Abdelhakem", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Inactive", department: "IT", email: "mohad.s@fci-cu.edu.eg", mobile: "1234567890" },
    { id: 20210816, name: "Abdalaziz Yousif Elamin", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Active", department: "IT", email: "aziz.y@fci-cu.edu.eg", mobile: "1234567890" },
    { id: 20210872, name: "Omer Abdulmunem Ibrahim", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Inactive", department: "IT", email: "omer.a@fci-cu.edu.eg", mobile: "1234567890" },
    { id: 20210874, name: "Khalid Mutaz Osman", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Active", department: "IT", email: "k.mutaz@fci-cu.edu.eg", mobile: "1234567890" },
    { id: 20190465, name: "Mohamed Ali Elsagheer", dob: "2002-01-01", gpa: 3.5, gender: "Male", level: 3, status: "Active", department: "IT", email: "mohad.ali@fci-cu.edu.eg", mobile: "1234567890" },

];


function renderTable() {
    const tableBody = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    studentsData.forEach(student => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = student.id;
        row.insertCell(1).textContent = student.name;

        const statusCell = row.insertCell(2);
        statusCell.textContent = student.status;

        const changeStatusCell = row.insertCell(3);
        const statusDropdown = document.createElement('select');
        statusDropdown.className = 'status-dropdown';
        ['Active', 'Inactive'].forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            statusDropdown.appendChild(optionElement);
        });

        statusDropdown.value = student.status;
        statusDropdown.addEventListener('change', () => {
            student.status = statusDropdown.value;
            renderTable();
        });

        changeStatusCell.appendChild(statusDropdown);
    });
}


