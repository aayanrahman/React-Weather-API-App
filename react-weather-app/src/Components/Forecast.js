import "../styles/components/Forecast.scss";
import HourlyForecastWidget from "./HourlyForecastWidget";
import DailyForecastWidget from "./DailyForecastWidget";

function Forecast({ title, type, data }) {
    // Check if data is a function and call it to get the actual data
    const dataArray = typeof data === 'function' ? data() : data;
   
    
    return (
        <div className="Forecast">
            <div className="forecast-container">
                <h3>{title}</h3>
                <div className="widget-container">
                    {dataArray.map((singleData) => (
                        <div>
                            {type === "hourly" ? (
                                <HourlyForecastWidget data={singleData} />
                            ) : (
                                <DailyForecastWidget data={singleData} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Forecast;
