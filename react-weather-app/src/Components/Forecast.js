import "../styles/components/Forecast.scss";
import HourlyForecastWidget from "./HourlyForecastWidget";
import DailyForecastWidget from "./DailyForecastWidget";
import HorizontallyScrollable from "./HorizontallyScrollable";

function Forecast({ title, type, data }) {
    // Check if data is a function and call it to get the actual data
    const dataArray = typeof data === 'function' ? data() : data;
   
    
    return (
        <div className="Forecast">
            <div className="forecast-container">
                <h3>{title}</h3>
                <HorizontallyScrollable className="widget-container">
                    {dataArray.map((singleData) => (
                        <div key={singleData.date || singleData.day}>
                            {type === "hourly" ? (
                                <HourlyForecastWidget data={singleData} />
                            ) : (
                                <DailyForecastWidget data={singleData} />
                            )}
                        </div>
                    ))}
                </HorizontallyScrollable>
            </div>
        </div>
    );
}

export default Forecast;
