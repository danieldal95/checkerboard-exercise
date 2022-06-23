// var container = document.createElement('div');
// document.body.append(container);

// for(var i = 0; i < 81; i++) {
//     var div = document.createElement('div');
//     div.style.width = '10.1%';
//     div.style.float = 'left';
//     div.style.paddingBottom = '10.1%';
//     if(i % 2 === 0) {
//         div.style.background = 'black';
//     } else {
//         div.style.background = 'red';
//     }
//     div.style.border = '1px solid black';
//     container.append(div); 
// }


// var container = document.createElement('div');
// document.body.append(container);
// var letter = '0123456789ABCDEF';
// var color = '#';

// function generateRandomColor(){
//     let maxVal = 0xFFFFFF;
//     let randomNumber = Math.random() * maxVal; 
//     randomNumber = Math.floor(randomNumber);
//     randomNumber = randomNumber.toString(16);
//     let randColor = randomNumber.padStart(6, 0);   
//     return `#${randColor.toUpperCase()}`
// }

// for(var i = 0; i < 81; i++) {
//     var div = document.createElement('div');
//     div.style.width = '10.1%';
//     div.style.float = 'left';
//     div.style.paddingBottom = '10.1%';
//     div.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
//     div.style.border = '1px solid black';
//     container.append(div); 
// }

// 'linear-gradient(to bottom, deepSkyBlue, white)'
var container = document.createElement('div');
document.body.append(container);

for(var i = 0; i < 81; i++) {
    var div = document.createElement('div');
    div.style.width = '10.1%';
    div.style.float = 'left';
    div.style.paddingBottom = '10.1%';
    if(i % 2 === 0) {
        div.style.background = 'deepSkyBlue';
    } else {
        div.style.background = 'white';
    }
    div.style.border = '1px solid black';
    container.append(div); 
}

container.style.backgroundColor = 'linear-gradient(to bottom, deepSkyBlue, white)';