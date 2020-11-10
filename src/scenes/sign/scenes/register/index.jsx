import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Button, Form, Input, Card } from "antd";

import {
  requiredFieldRule,
  usernameRule,
  passwordRule,
} from "../../services/rules";
import { registerAPI } from "../../services/api";

export default function Register() {
  const history = useHistory();

  const handleRegister = async (formData) => {
    const response = await registerAPI(formData);
    if (response.error) {
      alert(response.error.message);
    } else {
      history.push(`/login/${formData.username}`);
    }
  };

  return (
    <Row>
      <Col
        offset="6"
        span="12"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "24px",
              marginBottom: "2rem",
            }}
          >
            REGISTER
          </div>
          <Form onFinish={handleRegister}>
            <Form.Item
              label="username"
              name="username"
              rules={[requiredFieldRule, usernameRule]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="password"
              name="password"
              rules={[requiredFieldRule, passwordRule]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">register</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
