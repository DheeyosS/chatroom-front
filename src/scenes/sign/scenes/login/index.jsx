import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Row, Col, Button, Form, Input, Card } from "antd";

import { AuthContext } from "../../../../services/store/authStore";
import { loginAPI } from "../../services/api";

export default function Login() {
  const router = useHistory();
  const { username } = useParams();
  const { logIn } = useContext(AuthContext);

  const handleLogin = async (formData) => {
    const token = await loginAPI(formData);
    if (!token.error) {
      document.cookie = `token=${token}`;
      logIn({
        username: formData.username,
      });
      router.push("/posts");
    } else {
      alert("username or password is wrong");
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
            LOG IN
          </div>
          <Form onFinish={handleLogin} initialValues={{ username }}>
            <Form.Item label="username" name="username">
              <Input />
            </Form.Item>
            <Form.Item label="password" name="password">
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">login</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
