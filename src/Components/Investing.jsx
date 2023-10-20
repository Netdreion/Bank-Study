import { useState } from "react";

const Investing = () => {
  const [show, setShow] = useState(false);
  const [buyingPower, setBuyingPower] = useState(10000);
  const[watcList,setWatcList=useState([])]

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
              <tr>
                <th>Stocks</th>
                <td>hfhfhf</td>
              </tr>
              <tr>
                <th>Stocks</th>
                <td>hfhfhf</td>
              </tr>
              <tr>
                <th>Stocks</th>
                <td>hfhfhf</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Investing;
