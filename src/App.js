import React from "react";
import "./App.css";
import Hello from "./hello";
import { Button, message } from "antd";
import { FloatButton } from "antd";

function App() {
  class Count extends React.Component {
    state = { num: 0 };
    render() {
      let { num } = this.state;
      return (
        <div>
          <div>{num}</div>
          <div>
            <Button
              onClick={() => {
                message.success("递增成功");
                num++;
                this.setState({ num });
              }}
            >
              递加
            </Button>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Hello, React!</h1> */}
        <Hello />
        <Count />
        <FloatButton
          style={{ position: "fixed", bottom: 20, right: 20 }}
          icon="对"
        ></FloatButton>
        {/* <div>{arr}</div> */}
      </header>
    </div>
  );
}

export default App;
