let disVal = document.querySelector('#op-screen');

// Perfroming calculation part
function calculate(){
    try{
        disVal.value = eval(disVal.value);
    }
    catch(error){
        alert('Invalid operation performed!!!');
    }
}

// Deleting button functionality
function del(){
    disVal.value = disVal.value.slice(0,-1);
}

// Clearing the calculated values
function delAll(){
    disVal.value = '';
}