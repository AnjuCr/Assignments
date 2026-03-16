// 1 Storing the data of a person in an object

interface personInfo{
    name :string,
    age?: number, // optional 
    visaStatus : boolean,
    address:{
        city:string,
        state:string,
        country: string
    };
    role?: string;
}

let person: personInfo= {
    name :"Anju",
    age :35,
    visaStatus: true,
    address:{
        city: "Delhi",
        state: "Kerala",
        country: "India"
    }
    
}


// 2. Access the dta from the object

console.log(person.name);
console.log(person["name"]);

console.log(person.address.country);
console.log(person.address["country"]);


// 3. Adding a new property to the object

person.role ="QA Engineer";
console.log(person);

// 4. Update the existing property of the object

person.role ="QA Arch";
console.log(person);

// 5. Delete the existing property of the object

delete person.age;
console.log(person);

// 6.Check whetther a particular property is available within the object

console.log("EmpIId" in person);
console.log("age" in person);
console.log("city" in person.address);
console.log("name" in person);
console.log("city" in person.address);

// 7. Get all the keys from object without using loop

console.log(Object.keys(person));

// 8. Get all the values from the object

console.log(Object.values(person.address))
console.log(Object.values(person))

// 9. get all the entries from the object

console.log(Object.entries(person));
console.log(Object.entries(person.address));

// 10. Iterate all the keys from the object

for (let key in person){
    console.log(key);
    console.log (person[key as keyof personInfo]);
}

// 11.verify the data type of a particular property inside the object

console.log(typeof person.visaStatus);
console.log(typeof person.name);

// 12. Merge two objects togother

interface projectInfo{
    projectName: String,
    projectId  : number
}

let project: projectInfo ={
    projectName : "Amazone",
    projectId : 1234

}

let mergeObjects ={...person,...project};
console.log(mergeObjects);



