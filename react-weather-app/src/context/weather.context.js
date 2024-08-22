import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEMS,UNITS } from "../constants/index.js";
import { getWeatherData } from "../api/index.js";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);
    const [measurementSystem, setMeasurementSystem] = useState(MEASUREMENT_SYSTEMS.AUTO);

    const [units, setUnits] =  useState({})

    useEffect(() => {
        async function _getWeatherData() {
            setLoading(true);
            try {
                // Fetch current weather
                const cw = await getWeatherData("current", place.place_id, measurementSystem);
                setCurrentWeather(cw.current);
                setUnits(UNITS[cw.units])

                // Fetch hourly forecast
                const hf = await getWeatherData("hourly", place.place_id, measurementSystem);
                if (hf && hf.hourly && hf.hourly.data) {
                    setHourlyForecast(hf.hourly.data);
                } else {
                    console.error("Hourly forecast data is unavailable.");
                }

                // Fetch daily forecast
                const df = await getWeatherData("daily", place.place_id, measurementSystem);
                if (df && df.daily && df.daily.data) {
                    setDailyForecast(df.daily.data);
                } else {
                    console.error("Daily forecast data is unavailable.");
                }
            } catch (error) {
                console.error("Error fetching weather data:", error);
            } finally {
                setLoading(false);
            }
        }

        _getWeatherData();
    }, [place, measurementSystem]);

    return (
        <WeatherContext.Provider value={{ place, loading, currentWeather, hourlyForecast, dailyForecast, measurementSystem, setMeasurementSystem,units }}>
            {children}
        </WeatherContext.Provider>
    );
}

export { WeatherProvider };
export default WeatherContext;
