import React, { useState }  from "react";

function Pswd(){
    const [len , setlen] = useState(8)
    const [Number,SetNumber] = useState(false)
    const [Spclchr,SetSpclchr] = useState(false)
    const Symbols = '!@#$%^&*('
    const number = '1234567890'
    const  abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const  psw = []
    const handleChange = (event) => {
        setlen(event.target.value);
    };

    const handleClick=(e)=>{
        SetNumber(e.target.checked);
    };
    const handleClickSymbols = (e)=>{
        SetSpclchr(e.target.checked)
    }
    let i = 0;

    if(Number){
        if(Spclchr){
            while(i<len){
                let newstr = abc + number + Symbols
                let ab =  newstr.charAt(Math.floor(Math.random() * newstr.length));
                psw.push(ab)
                i++
            }
        }
        else{
            while(i<len){
                let newstr = abc + number
                let ab =  newstr.charAt(Math.floor(Math.random() * newstr.length));
                psw.push(ab)
                i++
            }
        }
    }
    if(Spclchr){
        if(Number){
            while(i<len){
                let newstr = abc + number + Symbols
                let ab =  newstr.charAt(Math.floor(Math.random() * newstr.length));
                psw.push(ab)
                i++
            }
        }
        else{
            while(i<len){
                let newstr = abc + Symbols
                let ab =  newstr.charAt(Math.floor(Math.random() * newstr.length));
                psw.push(ab)
                i++
            }
        }

    }
    while (i < len) {
                let a = abc.charAt(Math.floor(Math.random() * abc.length));
                psw.push(a);
                i++; // Increment i to avoid infinite loop
            }
    const password = psw.join('');
    console.log(password);
    return(
        <>
        
        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg pointer-events-none">
        <input className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="text" value = {password} /> <br />
        <label >Number</label><input type="checkbox"  checked={Number} onChange={handleClick} />
        <label >Special chr</label><input type="checkbox"  checked={Spclchr} onChange={handleClickSymbols} /><br />
        <div className="inline-block bg-gray-200 p-4 m-2 rounded-lg"><input type="range" value = {len} onChange={handleChange}  max="200"/><p>Lenght : {len}</p></div>
        </div>

        </>
    )

}

export default Pswd