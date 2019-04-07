const table = document.querySelector("table");
const NextEmployee = Object.freeze({
    name: document.querySelector("[name=\"name\""),
    id: document.querySelector("[name=\"id\""),
    job: document.querySelector("[name=\"job\""),
});
const employees = [];
const submit = document.getElementById("addEmployee");
class Employee {
    constructor(name, id, job) {
        this.name = name;
        this.id = id;
        this.job = job;
        this.tr = document.createElement("tr");
        this.nameElement = document.createElement("td");
        this.idElement = document.createElement("td");
        this.jobElement = document.createElement("td");
        this.removeButton = document.createElement("button");
        this.nameElement.appendChild(document.createTextNode(name));
        this.idElement.appendChild(document.createTextNode(id));
        this.jobElement.appendChild(document.createTextNode(job));
        this.removeButton.appendChild(document.createTextNode("Remove"));
        this.removeButton.classList.add("w3-margin")
        this.tr.appendChild(this.nameElement);
        this.tr.appendChild(this.idElement);
        this.tr.appendChild(this.jobElement);
        this.tr.appendChild(this.removeButton);
        this.removeButton.addEventListener("click", e => {
            this.tr.remove();
            employees.splice(employees.indexOf(this), 1);
            localStorage.employees = JSON.stringify(employees);
        });
    }
    render() {
        table.appendChild(this.tr);
    }
}
if (localStorage.employees) {
    const storedEmployees = JSON.parse(localStorage.employees);
    storedEmployees.forEach(employee => {
        employees.push(new Employee(employee.name, employee.id, employee.job));
    });
    employees.forEach(employee => {
        employee.render();
    })
}
submit.addEventListener("click", e => {
    if (Object.values(NextEmployee).every(input => input.value)) {
        const employee = new Employee(NextEmployee.name.value, NextEmployee.id.value, NextEmployee.job.value);
        employees.push(employee);
        employee.render();
        Object.keys(NextEmployee).forEach(key => {
            NextEmployee[key].value = "";
        });
        localStorage.employees = JSON.stringify(employees);
    }
})