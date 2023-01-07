/** @format */

let arr = [
  { id: 10, name: "Dhiraj", age: "30", profession: "support" },
  { id: 9, name: "Niraj", age: "22", profession: "developer" },
  { id: 8, name: "Suraj", age: "40", profession: "ceo" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(checksupport);
   function checksupport(data) {
    if (data.profession === "support") {
      console.log(data);
    }
  }
}
  


function PrintDeveloperbyForEach() {
  //Write your code here
  arr.map(checksupport);
function checksupport(arrayItem) {
    if (arrayItem.profession === "developer") {
      console.log(arrayItem);
    }
  }
}



function addData() {
  //Write your code here
  let newObj = { id: 7, name: "susant", age: "25", profession: "internship" };
  arr.push(newObj);
  console.log(arr);
}



function removeAdmin() {
  //Write your code here
   let filtered_arr = arr.filter(function (val) {
    if (val.profession !== "admin") {
      return val;
    }
  });
  console.log(filtered_arr);
}



function concatenateArray() {
  //Write your code here
   let arr2 = [
    { id: 6, name: "Dimpal", age: "21", profession: "support enginer" },
    { id: 5, name: "Aaru", age: "26", profession: "worker" },
    { id: 4, name: "Ruhi", age: "31", profession: "manager " },
  ];
 

  let concatArray = arr.concat(arr2);
  console.log(concatArray);
}
