import React from "react";
import ProductList from "./App/Page/ProductList";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1>CardsView Project</h1>
      <ProductList />
    </div>
  );
};

export default App;
