import React from "react";
import { Form, Input, Button } from "antd";

const SignUp: React.FC = () => {
  return (
    <div className="form-container">
      <Form>
        <Form.Item label="手机号">
          <Input></Input>
        </Form.Item>
        <Form.Item label="密码">
          <Input.Password></Input.Password>
        </Form.Item>
        <Form.Item label="耳机名">
          <Input></Input>
        </Form.Item>
        <Form.Item>
          <Button></Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
