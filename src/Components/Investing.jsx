import React, { useEffect, useState } from "react";
import { TbArrowBigDownLines, TbArrowBigUpLinesFilled } from "react-icons/tb";
import { TfiCrown, TfiStatsDown } from "react-icons/tfi";

const apiKey = "cl4otr9r01qrlanq0sl0cl4otr9r01qrlanq0slg";
const url = "https://finnhub.io/api/v1";

const Investing = () => {
  const [receivedStockData, setReceivedStockData] = useState(null);
  const [show, setShow] = useState(false);
  const [stockValue, setStockValue] = useState("");

  const [symbols, setSymbols] = useState(["TSLA", "AAPL", "MSFT", "AMZN"]);

  const inputStockValue = (e) => {
    setStockValue(e.target.value);
  };

  const handleStockValue = () => {
    setSymbols([...symbols, stockValue]);
  };

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
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [symbols]);

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
          <div>
            <span>
              <input
                value={stockValue}
                onChange={inputStockValue}
                placeholder="enter stock syybol"
              />
              <button onClick={handleStockValue}>Add Stock</button>
            </span>
          </div>
          <h3>Stocks Table</h3>
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
                  <td>
                    {stock.c}
                    {stock.pc > stock.c ? (
                      <TbArrowBigDownLines />
                    ) : (
                      <TbArrowBigUpLinesFilled />
                    )}
                  </td>
                  <td>
                    {stock.d}
                    {stock.d < 0 ? (
                      <TbArrowBigDownLines />
                    ) : (
                      <TbArrowBigUpLinesFilled />
                    )}
                  </td>
                  <td>
                    {stock.dp}
                    {stock.d < 0 ? (
                      <TbArrowBigDownLines />
                    ) : (
                      <TbArrowBigUpLinesFilled />
                    )}
                  </td>
                  <td>
                    {stock.h}
                    <TfiCrown />
                  </td>
                  <td>
                    {stock.l}
                    <TfiStatsDown />
                  </td>
                  <td>{stock.pc}</td>
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
