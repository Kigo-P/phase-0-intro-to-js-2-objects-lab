// Write your solution in this file!

const employee = {
    name : "Sam",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj[key] = value;

    return newObj
}
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    
    return obj
}
const destructive = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {newEmployee}
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, Key) {
    delete employee.name
    return employee
}