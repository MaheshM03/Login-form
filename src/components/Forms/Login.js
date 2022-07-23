import React from 'react';
import './Login.css';
import {
  Row, Col, Card, Button, Form, Input,
} from 'antd';

 export function Login() {


  return (
    <section className="app-section">

      <Row justify="center">

        <Col xl={6} lg={8} md={10} sm={12} xs={24}>
          <Card style={{ marginTop: 45 }}>
            <Col span={24} className="typo-black typo-center">
              <h2>Login Form</h2>
            </Col>
            <Form layout="vertical">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Email is required' },
                  { type: 'email', message: 'Must be in email format' },
                ]}
                style={{ marginBottom: 10 }}
              >
                <Input name="email" type="email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Password is required' }]}
                style={{ marginBottom: 15 }}
              >
                <Input.Password name="password" />
              </Form.Item>

              <Row gutter={[4, 4]} style={{ rginTop: 10 }} justify="end">

                <Col xl={5} lg={7} md={7} sm={7} xs={7} className="typo-left">
                  <Button type="primary" htmlType="submit">
                    Log in
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>

  );
}

