import React, { useEffect,useState } from 'react'
import "./CSS/style.css";
 



const Wheather =()=>{


    const [city, setCity]=useState(null);
    const [search,setSearch] = useState("New Delhi");

    useEffect(() => {
       const fetchApi=async () =>{
           const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f68dec42d540b19ac330ca3534106416`;
           const response = await fetch(url);
           const resJSON= await response.json();
        //    console.log(resJSON);
        setCity(resJSON.main);
       };
       fetchApi();
    },[search]);

    return (
<>
<div className="box">
<div className="inputData">
<input type="search" value={search} className="inputField" onChange={(event)=>{setSearch(event.target.value)}} />
</div>

{!city ? (<p className="errorMsg">No Data Found</p>):(
 
 <div>

<div className="info">
    <h3 className="location" id="weathercon">
    <i className="fas fa-street-view" ></i> <p className="search">{search}</p>
    </h3>
    <h1 className="temp" style={city.temp>30?{color:"#ff525d"}:{color:"#37d6fa"}}>
        {city.temp}° Cel
    </h1>
    <h3 className="tempmin_max">
        Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel
    </h3>
</div>
<div className="wave -one"></div>
<div className="wave -two"></div>
<div className="wave -three"></div>

    </div>
)
}

</div>
</>
    )
}

export default Wheather;