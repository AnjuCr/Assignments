class Employee{

    empName:string = "Bharath Reddy"; //Instance Variable

    static empProject : string = "Creatio"; //static variable

     printEmpDetails():void {
        let empSalary : number = 100000;//Local Variable
        console.log("Employee Salary is :"+empSalary);
        console.log("Employee Name is :"+this.empName);
        console.log("Employee Project is :"+Employee.empProject);
    }

}

let obj = new Employee();
obj.printEmpDetails();

//access local variable
console.log(obj.empSalary);

//access instance variable
console.log(obj.empName);

//access static variable
console.log(Employee.empProject);