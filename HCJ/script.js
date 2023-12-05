const buttons = document.querySelectorAll(".button");

// function addNum(currentNum, secondNum){

//     currentNum = Number(currentNum);
//     secondNum = Number(secondNum);
//     return currentNum + secondNum;
// }

// function minNum(currentNum, secondNum){

//     return currentNum - secondNum;
// }

// function mulNum(currentNum, secondNum){

//     return currentNum * secondNum;

// }

// function divNum(currentNum, secondNum){

//     return currentNum / secondNum;
// }

function calc(firstNum, secondNum, operator){

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    
    switch(operator){

        case '+':
            
    }
}

function delNum(displayNum){

    let current = displayNum;

    current = current.slice(0, -1);

    return current;

}
buttons.forEach(button => {

    
    button.addEventListener("mousedown", () => {

        button.style.transform = 'translate(5px, 5px)';
        button.style.boxShadow = '0 0 0 0';
        button.style.color = '#FF90BC';
        const buttonClicked = button.textContent;
        handleButtons(buttonClicked);
    })

    button.addEventListener("mouseup", () => {

        button.style.transform = 'translate(0, 0)';
        button.style.boxShadow = '5px 5px 3px #31304D';
        button.style.color = 'black';

    })

    
});

let reset = false;
function handleButtons(button){

    const display = document.querySelector(".display");
    const queue = document.querySelector(".queue");
    const op = document.querySelector(".operator");

    function displayOp(operator){

        op.textContent = operator;
    }
    function disp(){

        
        if (!queue.textContent){
            
            queue.textContent += display.textContent;
            
        }else if(op.textContent){
            
            queue.textContent += ` ${op.textContent} ${display.textContent}`;
        }
        display.textContent = '';
    }
    switch(button){

        case '+':
            if (display.textContent && display.textContent != 0){

                op.textContent = '+';
                disp();
                // displayOp('+');
                
                
                // display.textContent = addNum(display.textContent, queue.textContent);
            }

            break;

        case '-':
            if (display.textContent && display.textContent != 0){

                op.textContent = '-';
                // displayOp('-');
                disp();
                
                
                // display.textContent = addNum(display.textContent, queue.textContent);
            }

            break;
        

        case 'del':
            display.textContent = delNum(display.textContent);
            console.log(button.innerHTML);
            console.log(display.textContent);
            if (display.textContent == ' '){

                button.textContent == 'C';
            }
            break;
        
        case '=':
            if(op.textContent == '+'){
                display.textContent = addNum(queue.textContent, display.textContent);
                queue.textContent = '';
                op.textContent = '';
                reset = true;


            }
            break;
            
            
        default:
            if (display.textContent == '0' || reset){

                display.textContent = button;
                reset = false;

            }else{
                if (display.textContent.length < 9){


                    display.textContent += button;
                }
            }
    

    }
}

