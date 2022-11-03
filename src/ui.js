export class UI {
  constructor() {
    this.employeeList = document.getElementById("employees");
    this.updateButton = document.getElementById("update");
    this.nameInput = document.getElementById("name");
    this.departmentInput = document.getElementById("department");
    this.salaryInput = document.getElementById("salary");
  }
  addAllEmployeeToUI(employee) {
    let result = "";
    employee.forEach((element) => {
      result += `
        <tr>
            <td>${element.name}</td>
            <td>${element.department}</td>
            <td>${element.salary}</td>
            <td>${element.id}</td>
            <td><a href="#" id="update-employee" class="btn btn-danger">Güncelle</a></td>
            <td><a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
        </tr>
  `;
    });

    this.employeeList.innerHTML = result;
  }
  clearInputs() {
    this.nameInput.value = "";
    this.departmentInput.value = "";
    this.salaryInput.value = "";
  }

  addEmployeeToUI(element) {
    this.employeeList.innerHTML += `  
    <tr>
        <td>${element.name}</td>
        <td>${element.department}</td>
        <td>${element.salary}</td>
        <td>${element.id}</td>
        <td><a href="#" id="update-employee" class="btn btn-danger">Güncelle</a></td>
        <td><a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
    </tr>`;
  }
}
