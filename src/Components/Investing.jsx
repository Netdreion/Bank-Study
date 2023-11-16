import React, { useEffect, useState } from "react";

const apiKey = "cl4otr9r01qrlanq0sl0cl4otr9r01qrlanq0slg"; //  Finnhub API Key
const url = "https://finnhub.io/api/v1";

const Investing = () => {
  const [receivedStockData, setReceivedStockData] = useState(null);
  const [receivedCryptoData, setReceivedCryptoData] = useState(null);
  const [show, setShow] = useState(false);
  const symbols = ["AAPL", "MSFT", "AMZN"];
  const cryptoSymbols = ["ETH/BTC", "LTC/BTC", "BNB/BTC"];

  useEffect(() => {
    const fetchCrytoData = async () => {
      try {
        const promises = cryptoSymbols.map((symbol) =>
          fetch(
            `${url}/crypto/symbol=${symbol}?exchange=binance&token=${apiKey}`
          ).then((response) => response.json())
        );

        const resolvedData = await Promise.all(promises);

        // Extract the 'result' array from each resolved promise
        const data = resolvedData.map((promise) => promise.result);

        setReceivedCryptoData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCrytoData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = symbols.map((symbol) =>
          fetch(`${url}/quote?symbol=${symbol}&token=${apiKey}`).then(
            (response) => response.json()
          )
        );

        const data = await Promise.all(promises);
        setReceivedStockData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {!show ? "Investing" : "close Investing"}
      </button>

      {show && receivedStockData && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Price</th>
                <th>Daily Change</th>
                <th>% Change</th>
                <th>Highest Price</th>
                <th>Lowest Price</th>
                <th>previous day</th>
              </tr>
            </thead>
            <tbody>
              {receivedStockData.map((stock, index) => (
                <tr key={index}>
                  <td>{symbols[index]}</td>
                  <td>{stock.c}</td>
                  <td>{stock.d}</td>
                  <td>{stock.dp}</td>
                  <td>{stock.h}</td>
                  <td>{stock.l}</td>
                  <td>{stock.pc}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {show && receivedCryptoData && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Price</th>
                <th>Daily Change</th>
                <th>% Change</th>
                <th>Highest Price</th>
                <th>Lowest Price</th>
                <th>previous day</th>
              </tr>
            </thead>
            <tbody>
              {receivedCryptoData.map((crypto, index) => (
                <tr key={index}>
                  <td>{symbols[index]}</td>
                  <td>{crypto.c}</td>
                  <td>{crypto.d}</td>

                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Investing;

/*receivedData c: 181.82
d: This might refer to the daily change in the stock's price. It shows how much the stock price has changed during the current trading day.

dp: This could be the percentage change in the stock's price for the day. It represents the percentage by which the stock's price has increased or decreased during the current trading day.

h: This is the highest price the stock reached during the trading day.

l: This is the lowest price the stock reached during the trading day.

o: This could represent the opening price of the stock for the current trading day.

pc: This might refer to the previous day's closing price of the stock.

*/
