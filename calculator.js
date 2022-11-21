function display(num){
    result.value+=num
    // result.value=result.value+num
    // if we give result.value only one num appears if click other num it repalces the existing num
    // if we give result.value=result.value+num we can add two or more values so two or more values appear ie string conganation
}

function allclear(){
    result.value=""
}

function equation(){
    result.value=eval(result.value)

    // eval is used to make mathematical operations

}

function backspace(){
    result.value=result.value.slice(0,-1)
}