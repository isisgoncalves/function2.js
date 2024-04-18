//Criar e executar uma segunda função para obter uma conversão de valores de temperatura - medidas em graus.  Converter de Fahrenheit para Celsius e uma outra que faz a conversão de Celsius para Fahrenheit.

function conversorTemperatura(celsius, fahrenheit){  
  //Fahrenheit = (Celsius * 1.8) + 32
  //Celsius = (Fahrenheit - 32) / 1,8
  let celsiusParafahrenheit = celsius * 1.8 + 32
  let fahrenheitParaCelsius = (fahrenheit - 32) / 1.8
  return `${celsius}°C convertido para fahrenheit equivale a ${celsiusParafahrenheit}°F.\nE ${fahrenheit}°F equivale a ${fahrenheitParaCelsius}°C.`
}
let celsius = 25
let fahrenheit = 50
let resultado = conversorTemperatura(celsius, fahrenheit)
alert(resultado)