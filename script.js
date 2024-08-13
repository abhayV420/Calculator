const button = document.querySelectorAll(".btn");
const ops = document.querySelectorAll(".operators");
const display = document.getElementById("display");
const eq = document.getElementById('equal');






let buttonString = Array.from(button);



// buttonString.forEach((box)=>{
//     box.innerText = 'null';
// })


ops.forEach((op)=>{
    op.style.backgroundColor = "orange";

});

let string = '';


buttonString.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        //If the clicked Button is "="
        if(e.target.innerHTML == '='){
           try{
            if(string !== ""){
                display.value = "calculating..."
                string = eval(string);
                setTimeout(()=>{
                    display.value = string;
                }, 900)
    
               }else{
                display.value = "Enter the value First"
               }
           }catch(error){
            setTimeout(()=>{
                display.value = "Invalid Input";
            }, 400)
           }
        }else if(e.target.innerHTML == 'AC'){ 
            display.value = "Clearing..."    //______if the clicked Button is "AC"
            
                if(string !== ""){
                   setTimeout(()=>{
                    string = "";
                    display.value = string;
                   }, 500)
                }else{
                    setTimeout(()=>{
                        display.value = "Already Cleared";
                    }, 500)
                }
            }else if(e.target.innerHTML == 'DEL'){      //______If the Button clicked is "DEL"
            string = string.substring(0, string.length-1);
            display.value = string;
            }else{
            string += e.target.innerHTML;          //______For Every other Button
            display.value = string;
          }
      })
  })







