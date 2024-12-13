// components/Weather.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherProps {
    setLightCondition: React.Dispatch<React.SetStateAction<string>>;
}

const Weather: React.FC<WeatherProps> = ({ setLightCondition }) => {
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await axios.get(
                            `https://api.weatherapi.com/v1/current.json`,
                            {
                                params: {
                                    key: '7b53366b083c44919f9141941241312', // Replace with your WeatherAPI key
                                    q: `${latitude},${longitude}`
                                },
                            }
                        );
                        setWeather(response.data);
                        const condition = response.data.current.condition.text.toLowerCase();
                        if (condition.includes('clear') || condition.includes('sun')) {
                            setLightCondition('Bright Light');
                        } else {
                            setLightCondition('Low Light');
                        }
                    } catch (err) {
                        setError('Failed to fetch weather data');
                    }
                },
                () => {
                    setError('Location access denied');
                }
            );
        } else {
            setError('Geolocation not supported');
        }
    }, [setLightCondition]);

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (!weather) {
        return <p className="text-center">Loading weather...</p>;
    }

    const { temp_c } = weather.current;
    const condition = weather.current.condition.text;

    return (
        <div className="bg-yellow-100 p-4 rounded-lg text-center shadow-md mb-5">
            <h3 className="text-lg font-semibold text-yellow-700">🌤 Current Weather</h3>
            <p className="text-gray-700">Temperature: {temp_c}°C</p>
            <p className="text-gray-700">Condition: {condition}</p>
        </div>
    );
};

export default Weather;
