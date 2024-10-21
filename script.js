let myArray = [];

function displayArray(){
    const arrayDisplay = document.getElementById('display');
    arrayDisplay.innerHTML ='';
    for (let i = 0; i < myArray.length; i++){
const element = document.createElement("div");
element.className = "array-item"; 
element.textContent = myArray[i];
arrayDisplay.appendChild(element);
}
}

function addElement(){
    const arrayInput = document.getElementById('array').value;
    if (arrayInput){
myArray.push(arrayInput);
displayArray();
document.getElementById('array').value = ""; 
    }
}

function push(){
    myArray.push(prompt('Enter element to push in array'));
    displayArray();
    document.getElementById('message').textContent = "Push() array method add elemnt in last."
}

function pop(){
    myArray.pop();
    displayArray();
    document.getElementById('message').textContent = "Pop() array method remove elemnt in last."
}

function shift(){
    myArray.shift();
    displayArray();
    document.getElementById('message').textContent = "shift() array method remove elemnt in start"
}

function unshift(){
    myArray.unshift(prompt('Enter element to unshift in array'));
    displayArray();
    document.getElementById('message').textContent = "unshift() array method add elemnt in start"
}

function slice(){
    const start =parseInt(prompt('Enter start index for slice:'));
    const end =parseInt(prompt('Enter endt index for slice:'));
    const sliceArray =myArray.slice(start,end);
    alert("Sliced Array: " + sliceArray);
}

function splice(){
    const index =parseInt(prompt('Enter  index to splice:'));
    const count =parseInt(prompt('Enter number of elemnt to remove:'));
    const removedItems = myArray.splice(index,count);
    alert("Removed Items: " + removedItems);
    displayArray();
}