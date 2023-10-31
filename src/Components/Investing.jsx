import { useState, useEffect } from "react";

const Investing = () => {
  const [show, setShow] = useState(false);
  const [buyingPower, setBuyingPower] = useState(10000);
  const [watcList, setWatcList] = useState([]);

  const apiKey = "ckvhajhr01qq199itd4gckvhajhr01qq199itd50"; // Your Finnhub API Key
  const url = "https://finnhub.io/api/v1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/quote?symbol=AAPL`, {
          headers: {
            "X-Finnhub-Token": apiKey,
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
            <tbody>
              <tr>...</tr>
              <tr>...</tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Investing;
