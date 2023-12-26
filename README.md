# Tasa_Oficial_BCV
Una API para obtener de la pagina oficial del Banco Central de Venezuela el tipo de cambio de varias monedas

# Instalacion
Testeado en **Nodejs** Version **18.13.0**

```bash
npm install
```

# Uso
La API debe recibir un metodo **POST** objeto **JSON** con las **siglas de la moneda** de la siguiente forma
```json
{"moneda":"USD"}
```

La api va a retornar un objeto JSON de la forma
```json
{
"pais":"E.U.A",
"divisa":"USD"
"precioCompra":"24.46428600"
"precioVenta":"24.52560000"
}
```

## Lista de siglas por pais
"Turquia": "TRY"<br>
"Zona Euro": "EUR"<br>
"D.E.G.": "DEG"<br>
"Cuba": "CUC"<br>
"Australia": "AUD"<br>
"Jordania": "JOD"<br>
"Hong Kong": "HKD"<br>
"Japon": "JPY"<br>
"Israel": "ILS"<br>
"India": "INR"<br>
"Taiwan": "TWD"<br>
"China": "CNY"<br>
"Corea del Sur": "KRW"<br>
"Rusia": "RUB"<br>
"Suiza": "CHF"<br>
"Suecia": "SEK"<br>
"Reino Unido": "GBP"<br>
"Noruega": "NOK"<br>
"Dinamarca": "DKK"<br>
"Republica Checa": "CZK"<br>
"Curazao": "ANG"<br>
"Uruguay": "UYU"<br>
"Trinidad y Tobago": "TTD"<br>
"Republica Dominicana": "DOP"<br>
"Perú": "PEN"<br>
"Nicaragua": "NIO"<br>
"Mexico": "MXP"<br>
"Chile": "CLP"<br>
"Colombia": "COP"<br>
"Canada": "CAD"<br>
"Bolivia": "BOB"<br>
"Brasil": "BRL"<br>
"Argentina": "ARS"<br>
"E.U.A.": "USD"<br>
"Venezuela": "PTR"<br>
