// #1. Symbol DataTypes

let IdFirst = Symbol('123')
let IdSecond = Symbol('123')
console.log(IdFirst == IdSecond)

// #2. Non-Primitive DataTypes
// Non-Primitive DataTypes are also called as Reference DataTypes, means they are call by reference (reference is allocated in the memory).

// #3. let familyMembers = ["Father", "Mother", "Sister", 1, 2, null, True]
console.log(familyMembers)

//

// #4. In This, Element has a key & a value
let MyDetail = {
    name1: "Ram",
    age: 20,
    address: {
        city: "District",
        pincode: 1478523
    },
    hobbies: ["Coding", "Debugging"]
};

// #5. Array
let familyMembers = ["Father","Mother", "Sister", "Brother", "GrandFather", "GrandMother" ]
console.log("Contents from Array family Member = ", familyMembers)
console.log(familyMembers[3])

// #6. In JavaScript can contain multiple DataElments in it
let MyDetail = ["Ram", 20, false, 987446489125788952789566987412, ["Coding", "Cricket", "GraphicDesign"]]
console.log(MyDetail)

// now if i want coding, then
console.log(MyDetail[4][1])

// #7 Objects are written in curly braces {}
// Objects can have nested objects
let sectionB2 = {
    classCounsellor: "Dr. Ram",
subject: "Engineering Drawing",
rollNumber: 5789426589,
student: {
    roomNumber: 520,
    studentName: "Tina",
    isStudent: true
}
}
console.log(sectionB2.student.studentName)
console.table([sectionB2,sectionB2.student])

// #8. Function

function sayHello() {
console.log("Hello Everyone")
}
sayHello()





