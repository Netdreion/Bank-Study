import React, { useEffect, useState } from "react";

const apiKey = "cl4otr9r01qrlanq0sl0cl4otr9r01qrlanq0slg"; //  Finnhub API Key
const url = "https://finnhub.io/api/v1";

const Investing = () => {
  const [receivedData, setReceivedData] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}/quote?symbol=AAPL&token=${apiKey}`
        );

        const data = await response.json();
        setReceivedData(data);
        console.log(receivedData);
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

      {show && receivedData && (
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apple</td>
                <td>{receivedData.c}</td>
                <td>{receivedData.d}</td>
                <td>{receivedData.dp}</td>
                <td>{receivedData.h}</td>
                <td>{receivedData.l}</td>
                <td></td>
              </tr>
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
