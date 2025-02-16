import "./App.css";

// eslint-disable-next-line react/prop-types
let Card = ({ name, age, status , children }) => {
  return (
    <>
      {
        <div className="card">
          <h1>Name : {name}</h1>
          <p>Age : {age}</p>
          <div className={status ? "active" : "inactive"}>
            {status ? "Active" : "Inactive"}
          </div>
          {children}
        </div>
      }
    </>
  );
};

export default Card;
