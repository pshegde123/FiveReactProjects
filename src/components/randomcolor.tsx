import React,{useState} from 'react';
import { useEffect } from 'react';

function RandomColorGenerator(){
    const[color, setColor] = useState<string>("#FFFFFF")
    const[ typeofColor,setTypeOfColor] = useState<string>('hex')

    function randomNumberGenerator(length:number):number{
        return Math.floor(Math.random()*length)
    }

    function generateRandomHexColor():void {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = "#"

        for(let i=0;i<6;i++){
            hexColor += hex[randomNumberGenerator(hex.length)]
        }
        console.log(hexColor)
        setColor(hexColor)
    }
    function generateRandomRGBColor(){
        const r = randomNumberGenerator(256)
        const g = randomNumberGenerator(256)
        const b = randomNumberGenerator(256)
        console.log(r,g,b)
        //setColor(`rgb (${r}, ${g}, ${b})`)
        setColor("rgb("+r+","+g+","+b+")");
    }
    useEffect(() => {
        if (typeofColor === 'rgb') {
            generateRandomRGBColor();
        } else {
            generateRandomHexColor();
        }
        console.log("typeofColor = ", typeofColor)
    },[typeofColor]);    

    return(        
            <div className="container mb-2">
                <div className='row'>
                    <h2 className='fs-1 text-center'>2. Random Color Generator</h2>
                </div>
                <div className="row mb-2">  
                <div className="col-2"></div>                                      
                <div className="col-6">
                    <button className='btn btn-primary mr-2' onClick={() => {setTypeOfColor('hex')}}>Generate Hex Color</button>  
                    <button className='btn btn-warning mr-2' onClick={() => {setTypeOfColor('rgb')}}>Generate RGB Color</button>  
                    <button className='btn btn-info' onClick={typeofColor==='hex'? () => generateRandomHexColor():() => generateRandomRGBColor()}>Generate Random Color</button>                    
                </div>
                <div className="col-4"></div>
                </div>
                <div className="row" style={{background:color}}>
                           <h1 className='text-center'>{color}</h1>      
                </div>
            </div>        
    )
}
export default RandomColorGenerator