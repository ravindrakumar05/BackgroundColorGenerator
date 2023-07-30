// Background Color Genereator

function changeBackgroundColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i=0; i<6;i++){
        var result = Math.floor(Math.random()*16);
        color += letters[result];
    }
    document.body.style.backgroundColor=color;
}