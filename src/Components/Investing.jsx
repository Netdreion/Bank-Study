import { useState, useEffect } from "react";

const Investing = () => {
  const [show, setShow] = useState(false);
  const [buyingPower, setBuyingPower] = useState(10000);
  const [watcList, setWatcList] = useState([]);

  const secretKey = "ckumj8pr01qmtr8ld550ckumj8pr01qmtr8ld55g"; // Your Finnhub Secret Key
  const url = "https://finnhub.io/api/v1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/quote?symbol=AAPL`, {
          headers: {
            "X-Finnhub-Secret": secretKey,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Received data:", data);
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
                <th>Header 1</th>
                <th>Header 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Investing;
