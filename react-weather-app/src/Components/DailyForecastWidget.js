import { useContext } from "react";
import WeatherContext from "../context/weather.context";
import WeatherIcon from "./WeatherIcon";

function DailyForecastWidget({data}) {
    const {units} = useContext(WeatherContext)
    const {day, icon, summary, temperature_max, temperature_min, precipitation} = data;

    const now_day = {
        day: new Intl.DateTimeFormat(navigator.language,{
            weekday: "short",
            day: "2-digit",
            month: "2-digit" 
        }).format(new Date()),
    };
    
    const weather_day = {
        day: new Intl.DateTimeFormat(navigator.language,{
            weekday: "short",
            day: "2-digit",
            month: "2-digit" 
        }).format(new Date(day)),
    };

    weather_day.day =
    now_day.day === weather_day.day ? 'Today' : weather_day.day;

    return(
        <div className="widget">
            <div className="day">{weather_day.day}</div>
            <div className="icon-temp">
                <div className="icon">
                    <WeatherIcon iconNumber={icon} summary={summary}/>
                </div>
                <div className="temperature">
                    <div className="max">{Math.round(temperature_max)} {units.temperature}</div>
                    <div className="min"> {Math.round(temperature_min)} {units.temperature} </div>
                </div>
            </div>
            <div className="percipitation">
                {Math.round(precipitation.total)} {units.precipitation}
            </div>
        </div>
    )
}

export default DailyForecastWidget