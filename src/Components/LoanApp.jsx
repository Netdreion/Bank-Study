import { useState, useEffect } from "react";

const LoanPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    income: 0,
    debt: 0,
    loanAmount: 0,
  });
  const [collectFormData, setCollectFormData] = useState([]);
  const [decision, setDecision] = useState("");

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCollectFormData([...collectFormData, { ...formData }]);

    setFormData({
      name: "",
      address: "",
      income: 0,
      debt: 0,
      loanAmount: 0,
    });
  };
  useEffect(() => {
    handleDecision();
  }, [handleSubmit]);

  const handleDecision = () => {
    const { income, debt, loanAmount } = formData;

    // Check if any of the required values is null
    if (income === 0 || debt === 0 || loanAmount === 0) {
      setDecision("Incomplete information");
      return;
    }

    const formula = (income - debt) / 3;
    console.log("Formula:", formula, "Loan Amount:", loanAmount);
    setDecision(formula);
    console.log(`this is decison${decision}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {!show ? "Loan Application" : "close Loan Application"}
      </button>
      {show && (
        <div>
          <h4>Fill out the Form to Apply</h4>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={formData.name}
                name="name"
                onChange={handleInputChange}
                placeholder="Enter your name here"
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                value={formData.address}
                name="address"
                onChange={handleInputChange}
                placeholder="Enter your address here"
              />
            </label>
            <label>
              Income:
              <input
                value={formData.income}
                name="income"
                type="number"
                onChange={handleInputChange}
                placeholder="Enter your income here"
              />
            </label>
            <label>
              Total Debt:
              <input
                value={formData.debt}
                name="debt"
                type="number"
                onChange={handleInputChange}
                placeholder="Enter your total debt here"
              />
            </label>
            <label>
              Loan Amount:
              <input
                value={formData.loanAmount}
                name="loanAmount"
                type="number"
                onChange={handleInputChange}
                placeholder="Enter your loan amount here"
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      <div>
        <ul>
          {collectFormData.map((data, index) => {
            const { name, address, income, debt, loanAmount } = data;

            return (
              <li key={index}>
                Name: {name}, Address: {address}, Income: {income}, Debt: {debt}
                , Loan Amount: {loanAmount}
                <div>
                  <div>
                    {decision <= formData.loanAmount ? "granted" : "denied"}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => {
            setCollectFormData([]);
            setFormData({
              name: "",
              address: "",
              income: 0,
              debt: 0,
              loanAmount: 0,
            });
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default LoanPage;
