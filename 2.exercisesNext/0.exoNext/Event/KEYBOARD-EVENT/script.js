document.onkeydown = function() {
    let keyCode = window.event ? window.event.keyCode : event.which;
    changeColor(keyCode);
    changeOpacity(keyCode);
}
document.onkeyup = function() {
    let keyCode = window.event ? window.event.keyCode : event.which;
    noMoreOpacity(keyCode);
}

function changeColor(keyCode) {
    switch(keyCode){
        case 97 :{ //numpad 1
            document.getElementById('character').style.background = 'rgb(102, 241, 75)';
            break;
        }
        case 98 :{ //numpad 2
            document.getElementById('character').style.background = 'rgb(255, 157, 44)';
            break;
        }
        case 99 :{ //numpad 3
            document.getElementById('character').style.background = 'rgb(44, 178, 255)';
            break;
        }
        case 100 :{ //numpad 4
            document.getElementById('character').style.background = 'rgb(220, 44, 255)';
            break;
        }   
        case 101 :{ //numpad 5 
            document.getElementById('character').style.background = 'rgb(255, 44, 79)';
            break;
        }
        case 102 :{ //numpad 6 
            document.getElementById('character').style.background = 'rgb(0, 9, 92)';
            break;
        }
        case 103 :{ //numpad 7 
            document.getElementById('character').style.background = 'rgb(0, 92, 64)';
            break;
        }
        case 104 :{ //numpad 8 
            document.getElementById('character').style.background = 'rgb(255, 233, 38)';
            break;
        }
        case 105 :{ //numpad 9 
            document.getElementById('character').style.background = 'rgb(0, 9, 92)';
            break;
        }
        case 96:{
            document.getElementById('character').style.background = 'white';
        }
    }
}

const changeOpacity = whichKey => {
    switch(whichKey){
        case 37 :{ //left key
            document.getElementById('left').classList.add('highlight')
            break;
        }
        case 38 :{ //up key
            document.getElementById('up').classList.add('highlight')
            break;
        }
        case 39 :{ //right key
            document.getElementById('right').classList.add('highlight')
            break;
        }
        case 40 :{ //down key
            document.getElementById('down').classList.add('highlight')
            break;
        }
    }
}

const noMoreOpacity = whichKey => {
    switch(whichKey){
        case 37 :{ //left key
            document.getElementById('left').classList.remove('highlight')
            break;
        }
        case 38 :{ //up key
            document.getElementById('up').classList.remove('highlight')
            break;
        }
        case 39 :{ //right key
            document.getElementById('right').classList.remove('highlight')
            break;
        }
        case 40 :{ //down key
            document.getElementById('down').classList.remove('highlight')
            break;
        }
    }
}