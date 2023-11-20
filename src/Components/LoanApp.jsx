import { useState } from "react";

const LoanPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    adress: "",
    income: "",
    debt: "",
    name: "",
    loanAmount: "",
  });
  const [collectFormData, setCollectFormData] = useState([]);

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = () => {};
  setCollectFormData([...collectFormData, { ...formData }]);
  return (
    <div>
      <h1>Loan Aplication</h1>
      <h4>Fillt out to Form to Aplly</h4>
      <div>
        <form onSubmit={handleSubmit}>
          <input value={formData.name} name="name" placeholder="name here">
            {" "}
            name
          </input>
          <input
            value={formData.adress}
            name="adress"
            placeholder="adress here"
          >
            adress
          </input>
          <input
            value={formData.income}
            name="income"
            placeholder="income here"
          >
            income
          </input>
          <input value={formData.debt} name="debt" placeholder="debt here">
            total debt
          </input>
          <input
            value={formData.loanAmount}
            name="name"
            placeholder="Loan Amount here"
          >
            Loan Amount
          </input>
        </form>
        <button onClick={handleClick}>submit</button>
      </div>
    </div>
  );
};
export default LoanPage;
