import React,{useState,useEffect} from 'react';
import moment from 'moment';

type WeatherDataObj={
    date:string;
    weather:string;
    temp_max:number;
    temp_min:number;
};
function WeatherApp(){
    const [data, setData] = useState<any>([]);       
    const [fiveDaysData, setFiveDaysData] = useState<WeatherDataObj[]>([]);
    const [loading, setLoading] = useState<any>(true);
    const [error, setError] = useState<any>(null);
    const indexArr = [0,8,16,24,32];   
    var tempArr:WeatherDataObj[]=[];

    useEffect(() => {
        fetchData();
      }, [])

    const fetchData = async () => {
        try {
          const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=34.09&lon=-84.28&appid=8483c1c79808434075ecc339359fdfee&&units=imperial'); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data = await response.json();
          //console.log(data)    
          setData(data);
          setLoading(false);
          tempArr=[];
          for(let num =0;num<5;num++){
            //console.log(data.list[indexArr[num]].dt_txt,data.list[indexArr[num]].weather[0].main,data.list[indexArr[num]].main.temp_max,data.list[indexArr[num]].main.temp_min)                                   
            let newDate = new Date(data.list[indexArr[num]].dt_txt);           
            var weekDayName =  moment(newDate).format('ddd');
            //console.log(weekDayName);
            const today:WeatherDataObj={
                //date:data.list[indexArr[num]].dt_txt,
                date:weekDayName, 
                weather:data.list[indexArr[num]].weather[0].main,
                temp_max:data.list[indexArr[num]].main.temp_max,
                temp_min:data.list[indexArr[num]].main.temp_min
            }            
            //console.log(newDate.getDay()+"/"+newDate.getMonth())
           tempArr.push(today);
           //console.log("today=",today)
           //console.log("tempArr=",tempArr)
          }          
          //console.log("tempArr=",tempArr)
          //console.log(fiveDaysData)
          //tempArr.map(item => (<p>item.date</p>))
          setFiveDaysData([...tempArr])                                    
          //console.log("fiveDaysData=",fiveDaysData)                
        } catch (error:any) {
          setError(error.message);
          setLoading(false);
        }
      };

    return(
        <div className="container">
                <div className='row'>
                    <h2 className='header'>3. Weather App</h2>
                </div>
                <div className='row'>                    
                {  loading ? (
                    <p>Loading...</p>
                    ) : error ? (
                    <p>Error: {error}</p>
                    ) : (
                        <div className='row'>                                  
                        <div className="col">
                        {
                            fiveDaysData.map(item => (                                
                            <>
                                {(() => {
                                    if (item.weather === 'Clouds') {
                                    return (
                                        <img src="https://openweathermap.org/img/wn/02d@2x.png" className="img-thumbnail" alt="Cloud icon"/> 
                                    )
                                    } else if (item.weather === 'Clear') {
                                    return (
                                        <img src="https://openweathermap.org/img/wn/01d@2x.png"/> 
                                    )
                                    }else if (item.weather === 'Rain') {
                                        return (
                                            <img src="https://openweathermap.org/img/wn/10d@2x.png"/> 
                                    )}else if (item.weather === 'Thunderstorm') {
                                        return (
                                            <img src="https://openweathermap.org/img/wn/11d@2x.png"/> 
                                    )}else if (item.weather === 'Snow') {
                                        return (
                                            <img src="https://openweathermap.org/img/wn/13d@2x.png"/> 
                                    )}
                                    else {
                                    return (
                                        <img src="https://openweathermap.org/img/wn/03d@2x.png"/> 
                                    )
                                    }
                                })()}
                              {item.date},{Math.round(item.temp_max)}<sup className="deg">°</sup>,{Math.round(item.temp_min)}<sup className="deg">°</sup>,                           
                            </>))
                        }    
                        </div>
                    </div>                
                    )
                }
                </div>
        </div>
    )}
export default WeatherApp;