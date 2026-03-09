 //Primitive Data Types in JavaScript

 // Primitive data types are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed after they are created. The primitive data types in JavaScript include:

  // 1. Number: Represents both integer and floating-point numbers without quotations.
     let age = 42; // integer
     let price = 10.10; // floating-point number
     console.log(age);
     console.log(price);
     console.log(typeof age);
  // 2. String: A sequence of characters enclosed in single quotes, double quotes, or backticks.
     let empName ="Anju"; // string
     let company = 'Google';
     let message = "Welcome to the company 'Anju'";

     console.log(empName);
     console.log(company);
     console.log(message);
     console.log(typeof empName);

     console.log("Employee name is" +empName, "Employee company is " + company);
     console.log(`Employee name is ${empName} and Employee company is ${company}`)

  // 3. Boolean: Represents a logical entity that can have two values: true or false.
     let isStudent = true; // boolean
     let a= 10;
     let b= 20;
     let z= a>b; // false
     console.log(z);
     console.log(typeof z);
     console.log(isStudent);

   // 4. Undefined: Represents a variable that has been declared but has not been assigned a value.
      let height;  
      console.log(height); // undefined
      console.log(typeof height); // undefined

   // 5. Null: Represents the intentional absence of any object value. It is a primitive value that represents the null or "empty" value.
      let salary = 10000;
      salary = null; // Now salary is null, indicating that it has no value.
      console.log(salary);

   // 6. Symbol: Represents a unique and immutable identifier. It is often used to create unique property keys for objects.  

  
   //#####PRIMITIVE DATA TYPES ARE IMMUTABLE, MEANING THEIR VALUES CANNOT BE CHANGED AFTER THEY ARE CREATED.
   // When you perform an operation on a primitive data type, it creates a new value rather than modifying the existing one.

   //1. Object: Represents a collection of properties and methods. It is a non-primitive data type that can store multiple values and complex data structures.
     let person = {
        name :"Anju", 
        age :34,  
        isStudent : true,
        address :{
            city : "Cochin",
            state: "Kerala",
            zipCode : 560001
        }

    }; 
     console.log(person);
     console.log(person.name);
     console.log(person.address.city);