const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const symbols = ['!', '#', '$', '%', '&', '(',')','*','+',"-","_","/"]
const space = " "
const numbers = ['0','1','2','3','4','5','6','7','8','9']

const generate_btn = document.getElementById("generate_btn");
const copy_btn = document.getElementById("copy_pass_icon");
let generated_password = ""

function Toaster(message,style,position){
    Toastify({
    text: message,
    duration: 2500,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: position, // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: style,
    onClick: function(){} // Callback after click
    }).showToast();
}

function shuffle_array(x){
    for(let i=0; i < x.length - 1; i++){
        const j = Math.floor(Math.random() * (i + 1));
      const temp = x[i];
      x[i] = x[j];
      x[j] = temp;
    }
    return x
}


generate_btn.addEventListener("click",(e)=>{
    let result  = []
    let generated_result = []
    const length = document.getElementById("length_id").value || 3
    if(document.getElementById("space_id").checked ){
        result.push(space)
    }
    if(document.getElementById("uppercase_id").checked ){
        result.push(...upper)
    }
    if(document.getElementById("lowercase_id").checked ){
        result.push(...lower)
    }
    if(document.getElementById("numbers_id").checked ){
        result.push(...numbers)
    }
    if(document.getElementById("ascii_id").checked ){
        result.push(...symbols)
    }

    if (result.length == 0){
        Toaster("Please set an option (uppercase , ....etc)",null,"right")
        return
    }
    result =  shuffle_array(result)
    
    for (let i=0; i<length ; i++)
    {
        random_char_index = Math.floor(((Math.random() * Date.now()) % result.length))
        generated_result.push(result[random_char_index])
    }
    generated_password = generated_result.join('')
    const result_area = document.querySelector("#result_area p")
    result_area.innerText = generated_password
    result_area.style.color = "white"
            

})  


copy_btn.addEventListener("click", (e)=>{
    navigator.clipboard.writeText(generated_password);
    Toaster("Password copied to Clipboard !",null,"right")
})