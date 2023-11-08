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

        if (response.ok) {
          const data = await response.json();
          setReceivedData(data);
        } else {
          console.error(`Failed to fetch data. Status: ${response.status}`);
        }
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
        Investing
      </button>

      {show && receivedData && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Price</th>
                <th>daily change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apple</td>
                <td>{receivedData.c}</td>
                <td>{receivedData.d}</td>
                <td>{/*receivedData*/}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Investing;
