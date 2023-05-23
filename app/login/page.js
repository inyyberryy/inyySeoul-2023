"use client";
import { Card, Button, Input, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useState } from 'react';
import KakaoLogin from '@/components/KakaoLogin';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react'

export default function Login() {
  const router = useRouter();

  const onFinish = async (values) => {
    const email = values.email;
    const password = values.password;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false
    });
    console.log(response);
    router.push('/');
  }

  return (
    <div>
      <Card
        title=""
        bordered={false}
        style={{
          width: 500,
        }}
      >
        <Image
          src="/logo_text.png"
          alt="inyySeoul"
          width={210} height={60}
        />
        <p>I • SEOUL • YOU</p>

        <Form
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: '형식이 올바르지 않은 이메일이에용!',
              },
              {
                required: true,
                message: '이메일을 입력해주세용!',
              },
            ]}
          >
            <Input size="large" placeholder="email" prefix={<UserOutlined />} style={{ height: "40px", width: "300px" }} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력해주세용!',
              },
            ]}
            hasFeedback
          >
            <Input.Password size="large" placeholder="password" prefix={<LockOutlined />} style={{ height: "40px", width: "300px" }} />
          </Form.Item>
          <Form.Item>
            <Button style={{ fontSize: "16px", background: "#69b1ff", height: "40px", width: "300px" }} htmlType="submit">
              로그인
            </Button>
          </Form.Item>
          <KakaoLogin />
        </Form>
      </Card>
      Login
    </div>
  )
}