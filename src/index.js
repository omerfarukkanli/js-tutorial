import { Request } from "./request.js";
import { UI } from "./ui.js";
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const emloyeeList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request(" http://localhost:3000/employee");
const ui = new UI();
eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", getAllEmployees);
  form.addEventListener("submit", addEmployee);
}
function getAllEmployees() {
  request
    .get()
    .then((employees) => ui.addAllEmployeeToUI(employees))
    .catch((err) => console.log(err));
}

function addEmployee(e) {
  const employeeName = nameInput.value.trim();
  const employeeDepartment = departmentInput.value.trim();
  const employeeSalary = salaryInput.value.trim();

  if (
    employeeName === "" ||
    employeeDepartment === "" ||
    employeeSalary === ""
  ) {
    alert("tüm alanları doldurunuz");
  }

  request
    .post({
      name: employeeName,
      department: employeeDepartment,
      salary: Number(employeeSalary),
    })
    .then((employee) => {
      ui.addEmployeeToUI(employee);
    })
    .catch((err) => console.log(err));

  ui.clearInputs();
  e.preventDefault();
}

// request
//   .get()
//   .then((employee) => console.log(employee))
//   .catch((err) => console.log(err));

// request
//   .post({ name: "Mehmet Kanlı ", department: "Pazarlama", salary: 5000 })
//   .then((employee) => console.log(employee))
//   .catch((err) => console.log(err));

// request
//   .put({ name: "Beyce Kanlı ", department: "Yönetim", salary: 8000 }, 1)
//   .then((employee) => console.log(employee))
//   .catch((err) => console.log(err));

// request
//   .delete(2)
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));
