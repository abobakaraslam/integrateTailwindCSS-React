// File: App.tsx located in src folder
import "./App.css"; //importing stylesheet
function App() {
  return (
    <div>
      <h1 className="pageHeader">Your Name</h1>
      <p style={{ margin: "100px 0px" }}>Introduction about yourself</p>
      <p
        style={{
          backgroundColor: "black",
          padding: "20px",
          color: "white",
        }}
      >
        Footer Signature
      </p>
    </div>
  );
}
export default App;
