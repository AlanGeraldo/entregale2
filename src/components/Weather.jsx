import { useState } from "react";

const Weather = ({ weatherInfo }) => {

  const [isCelsius, setIsCelsius] = useState(true);
  
  const kelvinToCelsius = (kelvinTemp) => {
    return (kelvinTemp - 273.15).toFixed(1);
  };
  
  const kelvinToFahrenheit = (kelvinTemp) => {
    return (((kelvinTemp - 273.15) * 9) / 5 + 35).toFixed(1);
  };
  
  const handleClickTemp = () => {
    setIsCelsius(!isCelsius);
  };
  
  const resultTemp = isCelsius
  ? kelvinToCelsius(weatherInfo?.main.temp)
  : kelvinToFahrenheit(weatherInfo?.main.temp);
  
  const textTemp = isCelsius ? "°C" : "°F";
  const buttonTextTemp = isCelsius ? "Convert °F" : "Convert °C";

   return (
    <section className="text-center">
      <h2 className="mb-2 text-black">{weatherInfo?.name} </h2>

      <section className="grid gap-4 sm:grid-cols-[auto_auto] px-4">
        {/* Seccion superior */}
        <section className="bg-white/40 p-2 rounded-2xl grid grid-cols-2 items-center">
          <h4 className="col-span-2 text-black/80">
            {" "}
            {weatherInfo?.weather[0].description}{" "}
          </h4>
          <span className="text-5xl text-black/80">
            {" "}
            {resultTemp} {textTemp}{" "}
          </span>
          <div>
            <img
              src={` https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </section>

        {/* Seccion inferior */}
        <section className="bg-white/40 p-2 py-4 rounded-2xl grid grid-cols-3 sm:grid-cols-1 items-center">
          <article className="flex gap-2 items-center">
            <div className="w-[20px]">
              <img src="/images/wind.png" alt="icon speed" />
            </div>
            <span className="text-black/80">{weatherInfo?.wind.speed}m/s</span>
          </article>

          <article className="flex gap-2 items-center ml-3">
            <div className="w-[20px]">
              <img src="/images/humidity.png" alt="icon humidity" />
            </div>
            <span className="text-black/80">{weatherInfo?.main.humidity}%</span>
          </article>

          <article className="flex gap-2 items-center">
            <div className="w-[20px]">
              <img src="/images/pressure.png" alt="icon pressure" />
            </div>
            <span className="text-black/80">
              {weatherInfo?.main.pressure}hPa
            </span>
          </article>
        </section>
      </section>

      <button
        onClick={handleClickTemp}
        className="bg-white/40 text-cyan-900 px-5 py-1  rounded-md mt-4 border-0"
      >
        {" "}
        {buttonTextTemp}{" "}
      </button>
    </section>
  );
 }
export default Weather;
