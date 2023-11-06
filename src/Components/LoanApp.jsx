const LoanPage = () => {

    const[formData,setFormData]=({
        name:'',
        adress:"",
        income:'',
        debt:"",name:'',
        LoanAmount:"",
        
    })

  return (
    <div>
      <h1>Loan Aplication</h1>
      <h4>Fillt out to Form to Aplly</h4>
      <div>
        <form onSubmit={}>
          <input value={} name={}  placeholder="name here"> name</input>
          <input value={} name={}  placeholder="adress here" >adress</input>
          <input value={} name={}  placeholder="income here" >income</input>
          <input value={} name={}  placeholder="debt here" >total debt</input>
          <input value={} name={}  placeholder="Loan Amount here" >Loan Amount</input>
        </form>
        <button>submit</button>
      </div>
    </div>
  );
};
export default LoanPage;
