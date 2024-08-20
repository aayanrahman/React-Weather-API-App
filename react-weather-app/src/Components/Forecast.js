import "../styles/components/Forecast.scss"
import HourlyForecastWidget from "./HourlyForecastWidget"
import DailyForecastWidget from "./DailyForecastWidget"

function Forecast({ title, type, data }) {
    if (!Array.isArray(data)) {
        console.error("data is not an array:", data);
        return <div>Error: data is not an array</div>;
    }
    
    return (
        <div className="Forecast">
            <div className="forecast-containter">
                <h3>{title}</h3>
                <div className="widget-container">
                    {data.map((singleData, index) => (
                        <div key={index}>
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