"use client";
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Select, Rate, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


export default function CreateReview() {

  const { TextArea } = Input;
  
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };


  return (
    <div>
      <Form
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
        <Form.Item name="제목">
          <Input placeholder="제목을 입력해주세용!" />
        </Form.Item>
        <Form.Item name="rate" label="" >
          <Rate allowHalf="true" style={{ fontSize: 36 }} />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">숙소</Select.Option>
            <Select.Option value="demo">맛집</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="어떤 경험이었나요?" >
          <TextArea rows={4} placeholder="내용을 입력해주세요!" showCount maxLength={500} />
        </Form.Item>
        <Form.Item label="사진 업로드" valuePropName="fileList" getValueFromEvent={normFile}>
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
      </Form>
      <Button>Button</Button>
    </div>
  );
}

// export default () => <FormDisabledDemo />;
