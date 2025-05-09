// components/Weather.tsx
'use client'
import { useState } from 'react'

type WeatherData = {
  main: { temp: number }
  name: string
  weather: { description: string }[]
}

export default function Weather() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState<WeatherData | null>(null)

  const fetchWeather = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/weather?city=${city}`)
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const data = await res.json()
      setWeather(data)
    } catch (error) {
      console.error('Failed to fetch weather data:', error)
      alert('Could not fetch weather data. Please try again later.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 card bg-base-200 shadow-xl space-y-4">
      <h2 className="text-2xl font-bold">Weather Forecast</h2>
      <input
        type="text"
        placeholder="Enter city"
        className="input input-bordered w-full"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button 
  onClick={fetchWeather} 
  className="btn w-full rounded-full bg-white text-black border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
>
  Get Weather
</button>

      {weather && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  )
}
