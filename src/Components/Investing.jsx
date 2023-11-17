import React, { useEffect, useState } from "react";

const apiKey = "cl4otr9r01qrlanq0sl0cl4otr9r01qrlanq0slg"; // Finnhub API Key
const url = "https://finnhub.io/api/v1";

const Investing = () => {
  const [receivedStockData, setReceivedStockData] = useState(null);
  const [receivedCryptoData, setReceivedCryptoData] = useState(null);
  const [show, setShow] = useState(false);
  const symbols = ["AAPL", "MSFT", "AMZN"];
  const cryptoSymbols = ["ETH/BTC", "LTC/BTC", "BNB/BTC"];

  // ...

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const promises = cryptoSymbols.map((symbol) =>
          fetch(
            `${url}/quote?symbol=${symbol}&exchange=binance&token=${apiKey}`
          ).then((response) => response.json())
        );

        const resolvedData = await Promise.all(promises);
        console.log("Crypto Data:", resolvedData);

        // Extract relevant data from the resolved promises
        const data = resolvedData.map((crypto) => ({
          c: crypto.c, // Current price
          d: crypto.d, // Daily change
        }));

        setReceivedCryptoData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCryptoData();
  }, []);

  // ...

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = symbols.map((symbol) =>
          fetch(`${url}/quote?symbol=${symbol}&token=${apiKey}`).then(
            (response) => response.json()
          )
        );

        const resolvedData = await Promise.all(promises);
        setReceivedStockData(resolvedData);
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
        {!show ? "Investing" : "Close Investing"}
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
                <th>Previous Day</th>
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
                <th>Crypto</th>
                <th>Price</th>
                <th>Daily Change</th>
                {/* Add other crypto columns as needed */}
              </tr>
            </thead>
            <tbody>
              {receivedCryptoData.map((crypto, index) => (
                <tr key={index}>
                  <td>{cryptoSymbols[index]}</td>
                  <td>{crypto.c}</td>{" "}
                  {/* Update property name based on API response */}
                  <td>{crypto.d}</td>{" "}
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
