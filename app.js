let display = document.querySelector("#display")

appendToDisplay = function(input)
{
    console.log("Input ", input)  
    display.value+= input;
}

clearOne = function()
{
    let currentValue = display.value
    if(currentValue.length > 0 )
    {
        
        display.value = currentValue.slice(0 , -1)
    }
    
    console.log("me clear one hunn")
}

clearDisplay = function()
{
    
    display.value = ""; 
}

calculateResult = function()
{ 

    try 
    {
        display.value = eval(display.value);
    }catch(error) 
    {
        display.value = 'Syntax Error';
    }
}