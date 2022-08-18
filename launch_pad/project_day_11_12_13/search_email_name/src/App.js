import logo from "./logo.svg";
import "./App.css";
import { InputText } from "primereact/inputtext";
import { useRef, useState } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { Toast } from "primereact/toast";
import axios from "axios";

function App() {
  const [text, setText] = useState("");

  const toastRef = useRef();
  const onButtonClick = () => {
    // setText("new text by clicking")
    if (text)
      toastRef.current.show({
        severity: "success",
        summary: "Success Message",
        detail: text,
      })
    // else if (text.includes("good"))
    //   toastRef.current.show({
    //     severity: "info",
    //     summary: "Info",
    //     detail: text,
    //   })
    else
      toastRef.current.show({
        severity: "error",
        summary: "Error",
        detail: text,
      });
  };

  const axios_getUserList = () => {
    console.log("8888888888888888888888888");
    axios
      .get(`https://reqres.in/api/users?page=2`)
      .then((res) => {
        const persons = res.data;
        console.log(persons.data);
      })
      .catch((e) => {});
  };

  return (
    <div className="App">
      <Toast ref={toastRef} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <InputText
          id="in"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="in">Enter Text</label>
        <strong>{text}</strong>
        <br />
        <Button label="Click" icon="pi pi-bolt" onClick={onButtonClick} />
        <br />
        <Button label="Get user list" icon="pi pi-bolt" onClick={axios_getUserList} />
      </header>
    </div>
  );
}

export default App;
