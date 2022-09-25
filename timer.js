

function showMessage(){
    console.log("Welcome message from app");
}

function display(){
    console.log("Fetching data from source");
}

//showMessage();

setInterval(display,1000)
setInterval(showMessage,3000);