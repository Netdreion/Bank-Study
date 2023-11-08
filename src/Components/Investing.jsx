import { useState, useEffect } from "react";

const Investing = () => {
  const [show, setShow] = useState(false);
  const [buyingPower, setBuyingPower] = useState(10000);
  const [recivedData, setRecievedData] = useState([]);

  const apiKey = "cl4otr9r01qrlanq0sl0cl4otr9r01qrlanq0slg"; //  Finnhub API Key
  const url = "https://finnhub.io/api/v1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}/quote?symbol=AAPL&token=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Received data:", data);
          setRecievedData(data);
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
          !show ? setShow(true) : setShow(!show);
        }}
      >
        Investing
      </button>
      {show && (
        <div>
          <h2>Welcome to fivoncae investing</h2>
          <h4>
            Buying Power
            {buyingPower}
          </h4>

          <table>
            <thead>
              <tr>
                <th>stocks</th>
                <th>crypto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apple, price</td>
                <td>solana, price</td>
              </tr>
              <tr>
                <td>tesla, price</td>
                <td>doge, price</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Investing;
