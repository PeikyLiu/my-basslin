import React from "react";
import "./index.less";
import { Input, Button } from "antd";
import service from "@/service";
import type { InputRef } from "antd";
import { withRouter } from "react-router-dom";
class Login extends React.Component {
  inputRef = React.createRef<InputRef | null>();
  // navigate = useNavigate();
  handleLogin = () => {
    const value = this.inputRef?.current?.input?.value;
    service
      .loginCode({ code: value })
      .then((res: { data: { data: { token: any } } }) => {
        const { token } = res.data.data;
        if (token) {
          localStorage.setItem("access_token", token);
          this.props.history.push("/home");
        }
      });
  };
  render() {
    return (
      <div className="login">
        <div className="login-container">
          <div className="login-title">BassLin</div>
          <div className="login-input">
            <Input
              ref={this.inputRef}
              placeholder="我的耳机名/手机锁屏密码"
            ></Input>
          </div>
          <Button onClick={this.handleLogin}>登录</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
