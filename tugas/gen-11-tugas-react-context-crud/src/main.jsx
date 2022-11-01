import React from "react";
import ReactDOM from "react-dom/client";
import DataForm from "./DataForm";
import DataList from "./DataList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataForm>
    <DataList />
  </DataForm>
);