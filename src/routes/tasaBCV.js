import { Router, json, response } from "express";
const tasaBCV = Router();
import { WEB_BCV, WEB_BCV_PATH } from "../api-keys/KEYS.js";
import https from "https";
import xml2js from "xml2js";

const options = {
  hostname: WEB_BCV,
  port: 443,
  path: WEB_BCV_PATH,
  method: "GET",
  rejectUnauthorized: false,
};

async function dameArrayDeCambios() {
  return new Promise((resolve, reject) => {
    https
      .get(options, (res) => {
        let xmlData = "";

        res.on("data", (chunk) => {
          xmlData += chunk;
        });

        res.on("end", () => {
          xml2js.parseString(xmlData, (err, result) => {
            if (err) {
              console.error(err);
            } else {
              const cambios = result.TIPOSCAMBIOAL.MERCADO[0];
              resolve(cambios);
            }
          });
        });
      })
      .on("error", (err) => {
        console.error(err);
        reject("error");
      });
  });
}

tasaBCV.post("/", async (req, res) => {
  const objetoDeCambios = await dameArrayDeCambios();
  const arrayDeCambios = objetoDeCambios["MONEDA"];
  const iniciales = req.body.moneda;
  let objetoDivisas = {};
  for (let i = 0; i < arrayDeCambios.length; i++) {
    let currentCountry = arrayDeCambios[i];
    let inicial = currentCountry["$"]["SWIFT"];
    let pais = currentCountry["PAIS"][0];
    let precioCompra = currentCountry["BDCOMPRABID"][0];
    let precioVenta = currentCountry["BDVENTAASK"][0];
    if (iniciales === inicial) {
      objetoDivisas["pais"] = pais;
      objetoDivisas["divisa"] = inicial;
      objetoDivisas["precioCompra"] = precioCompra;
      objetoDivisas["precioVenta"] = precioVenta;
    }
  }
  console.log(objetoDivisas);

  res.json(objetoDivisas);
});

export default tasaBCV;
