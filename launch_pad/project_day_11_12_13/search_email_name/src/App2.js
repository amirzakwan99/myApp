import logo from "./logo.svg";
import "./App.css";
import { InputText } from "primereact/inputtext";
import React, { useRef, useState, useEffect } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { Toast } from "primereact/toast";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

const App2 = () => {
  const toastRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [item, setItem] = useState([]);
  const API_URL = "http://localhost:3000/api/v1/users";

  const onButtonClick1 = () => {
    axios_post1(name);
  };

  const onButtonClick2 = () => {
    axios_post2(email);
  };

  const axios_post1 = (text) => {
    axios
      .post(`${API_URL}/getuser/name`, {
        name: `${text}`,
      })
      .then((res) => {
        console.log(res.data);
        setItem(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const axios_post2 = (text) => {
    axios
      .post(`${API_URL}/getuser/email`, {
        email: `${text}`,
      })
      .then((res) => {
        console.log(res.data);
        setItem(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="card">
            <h1>Access The Database</h1>
            <br />
            <div className="border">
              <h3 className="search_bar">Search function</h3>
              Name:{" "}
              <InputText
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button label="Search" onClick={onButtonClick1} />
              <br></br>
              <br />
              Email:{" "}
              <InputText
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button label="Search" onClick={onButtonClick2} />
            </div>
            <br />
            <DataTable
              value={item}
              resizableColumns
              columnResizeMode="fit"
              showGridlines
              responsiveLayout="scroll"
            ><Column
                field="name"
                header="Name"
                sortable
                filter
                filterPlaceholder="Search by name"
              ></Column>
              <Column field="email" header="Email" sortable></Column>
              <Column field="password" header="Password" sortable></Column>
            </DataTable>
          </div>
        </header>
      </div>
    </div>
  );
};

export default App2;
