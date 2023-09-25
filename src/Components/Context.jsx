const Context = ({ accountBalance, name, acountNo }) => {
  return (
    <>
      <div className="context">
        <h3>welcome to Finovance</h3>
        <table>
          <th>one deposit account </th>
          <tr>name:{name}</tr>
          <tr>account number:{acountNo}</tr>
          <tr> acoount balance:{accountBalance}</tr>
        </table>
      </div>
    </>
  );
};

export default Context;
