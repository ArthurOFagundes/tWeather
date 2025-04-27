const APIKey: string = [Your_API_Key_Here];

const formContent = document.querySelector("#form-container");

const inputLocalization: HTMLInputElement | null = document.querySelector(
  "#input-localization"
);

const sectionWeatherInfo = document.querySelector("#weather-info");

formContent?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!inputLocalization || !sectionWeatherInfo) return;

  const localization = inputLocalization.value;

  if (localization.length < 3) {
    alert("Digite uma localização válida");
    return;
  }

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${localization}&aqi=no`
  );

  const datas = await response.json();

  const infosWeather = {
    location: datas.location.name,
    temp: datas.current.temp_c,
    icon: datas.current.condition.icon,
    conditionAlt: datas.current.condition.text,
  };

  sectionWeatherInfo.innerHTML = `<div className='font'><h2 className='text-xl font-bold mb-2'>${infosWeather.location}</h2><span className='text-4xl font-bold'>${infosWeather.temp} ºC</span></div><img src=${infosWeather.icon} alt=${infosWeather.conditionAlt}/>`;
});
