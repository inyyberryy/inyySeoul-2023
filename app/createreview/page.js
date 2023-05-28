"use client";
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from 'next/navigation';
import { Button, Checkbox, Form, Input, Select, Rate, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function CreateReview() {
  const { data } = useSession();
  const { TextArea } = Input;

  const pathname = usePathname();
  const router = useRouter();

  const [id, setId] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setId(urlParams.get('id'));
  }, []);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = async (values) => {
    const date = new Date().toISOString();

    const temp = {
      title: values.title,
      score: values.score,
      category: values.category,
      content: values.content,
      postPic: values.postPic.map(value => value.thumbUrl),
      parentID: id || null, // 수정된 부분
      writer: data.user.email,
      date: date
    };

    fetch('/api/auth/review', {
      method: 'POST',
      body: JSON.stringify(temp),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        router.push('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="vertical"
        style={{
          maxWidth: 700,
          margin: 25
        }}
      >
        <Form.Item name="title">
          <Input placeholder="제목을 입력해주세용!" />
        </Form.Item>
        <Form.Item name="score" label="" >
          <Rate allowHalf="true" style={{ fontSize: 36 }} />
        </Form.Item>
        <Form.Item label="선택하세용" name="category" >
          <Select>
            <Select.Option value="accomodation">숙소</Select.Option>
            <Select.Option value="restaurant">맛집</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="어떤 경험이었나요?" name="content" >
          <TextArea rows={4} placeholder="내용을 입력해주세요!" showCount maxLength={500} />
        </Form.Item>
        <Form.Item label="사진 업로드" valuePropName="fileList" getValueFromEvent={normFile} name="postPic">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item >
          <Button htmlType="submit">리뷰 작성</Button>
        </Form.Item>
      </Form>

    </div>
  );
}

// export default () => <FormDisabledDemo />;