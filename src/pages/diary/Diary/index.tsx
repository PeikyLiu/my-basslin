import React from "react";
import DiaryList from "@/components/DiaryList";
import { Modal, Input } from "antd";
import type { InputRef } from "antd";
import axios from "axios";
class Diary extends React.Component {
  state = {
    showModal: false,
  };
  inputRef = React.createRef<InputRef | null>();
  handleClick = () => {
    this.setState({ showModal: true });
  };
  handleCancel = () => {
    this.setState({ showModal: false });
  };
  handleSubmit = () => {
    const value = this.inputRef?.current?.input?.value;
    // axios.get("http://localhost:3000").then((res) => {
    //   console.log(res);
    // });
    axios
      .post("http://localhost:3000/api/checkcode", { code: value })
      .then((res) => {
        const { token } = res.data.data;
        if (token) {
          localStorage.setItem("access_token", token);
        }
      });
  };
  render() {
    const { showModal } = this.state;
    return (
      <div>
        <DiaryList onClick={this.handleClick}></DiaryList>
        <Modal
          title="查看需要权限"
          open={showModal}
          onCancel={this.handleCancel}
          onOk={this.handleSubmit}
          cancelText="关闭"
          okText="提交"
        >
          <Input ref={this.inputRef} placeholder="你给我设置的手机密码"></Input>
        </Modal>
      </div>
    );
  }
}

export default Diary;
