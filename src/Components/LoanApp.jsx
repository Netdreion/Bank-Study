import { useState } from "react";

const LoanPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    income: null,
    debt: null,
    loanAmount: null,
  });
  const [collectFormData, setCollectFormData] = useState([]);
  const [decision, setDecision] = useState(0);

  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCollectFormData([...collectFormData, { ...formData }]);
    setFormData({
      name: "",
      address: "",
      income: null, // Set back to null to avoid potential type issues
      debt: null,
      loanAmount: null,
    });
    handleDecision(); // Call the function
  };

  const handleDecision = () => {
    const formula = (formData.income - formData.debt) / 3;

    setDecision(formula);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value === "" ? null : parseFloat(value); // Change to null if the input is empty
    setFormData({ ...formData, [name]: numericValue });
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
                onChange={handleInputChange}
                placeholder="Enter your income here"
              />
            </label>
            <label>
              Total Debt:
              <input
                value={formData.debt}
                name="debt"
                onChange={handleInputChange}
                placeholder="Enter your total debt here"
              />
            </label>
            <label>
              Loan Amount:
              <input
                value={formData.loanAmount}
                name="loanAmount"
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
          {collectFormData.map((data, index) => (
            <li key={index}>
              Name: {data.name}, Address: {data.address}, Income: {data.income},
              Debt: {data.debt}, Loan Amount: {data.loanAmount}
              {formData.loanAmount > decision ? (
                <div>granted</div>
              ) : (
                <div>denied</div>
              )}
            </li>
          ))}
        </ul>
        <button
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              name: "",
              address: "",
              income: null,
              debt: null,
              loanAmount: null,
            }))
          }
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default LoanPage;
