import React, { useEffect, useState } from "react";

const apiKey = "cl4otr9r01qrlanq0sl0cl4otr9r01qrlanq0slg";
const url = "https://finnhub.io/api/v1";
const exchange = "binance";

const Investing = () => {
  const [receivedStockData, setReceivedStockData] = useState(null);
  const [receivedCryptoData, setReceivedCryptoData] = useState(null);
  const [show, setShow] = useState(false);
  const symbols = ["AAPL", "MSFT", "AMZN"];
  const cryptoSymbolsEndpoint = `${url}/crypto/symbol?exchange=${exchange}&token=${apiKey}`;
  const cryptoSymbols = ["ETHBTC", "BINANCE:LTCBTC", "BINANCE:BNBBTC"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch stock data
        const stockPromises = symbols.map((symbol) =>
          fetch(`${url}/quote?symbol=${symbol}&token=${apiKey}`).then(
            (response) => response.json()
          )
        );

        const stockResolvedData = await Promise.all(stockPromises);
        setReceivedStockData(stockResolvedData);

        // Fetch crypto symbols
        const response = await fetch(cryptoSymbolsEndpoint);
        const cryptoSymbolsData = await response.json();
        console.log("Crypto Symbols Response:", cryptoSymbolsData);

        // Use crypto symbols to fetch crypto data
        const cryptoPromises = cryptoSymbolsData.map((symbolData) =>
          fetch(
            `${url}/quote?symbol=${symbolData.symbol}&exchange=${exchange}&token=${apiKey}`
          ).then((response) => response.json())
        );

        const cryptoResolvedData = await Promise.all(cryptoPromises);
        console.log("Crypto API Response:", cryptoResolvedData);

        // Extract relevant data from the resolved promises
        const cryptoData = cryptoResolvedData.map((crypto) => ({
          c: crypto.c, // Current price
          d: crypto.d, // Daily change
        }));

        setReceivedCryptoData(cryptoData);
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
                  <td>{crypto.c}</td>
                  <td>{crypto.d}</td>
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
