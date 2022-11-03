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
  deleteEmployeeFromUI(element) {
    element.remove();
  }

  toggleUpdateButton(target) {
    if (this.updateButton.style.display === "none") {
      this.updateButton.style.display = "block";
      this.addEmployeeInfoToInputs(target);
    } else {
      this.updateButton.style.display = "none";
      this.clearInputs();
    }
  }
  addEmployeeInfoToInputs(target) {
    const children = target.children;

    this.nameInput.value = children[0].textContent;
    this.departmentInput.value = children[1].textContent;
    this.salaryInput.value = children[2].textContent;
  }
  updateEmployeeToUI(element, parent) {
    parent.innerHTML = `  <tr>
    <td>${element.name}</td>
    <td>${element.department}</td>
    <td>${element.salary}</td>
    <td>${element.id}</td>
    <td><a href="#" id="update-employee" class="btn btn-danger">Güncelle</a></td>
    <td><a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
</tr>
    `;
  }
}
