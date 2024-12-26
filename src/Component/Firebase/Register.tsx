
import { Form, Button, Input, InputNumber } from 'antd';
import type { FormProps } from 'antd';

type FieldType = {
  'email'?: string;
  'password'?: string;
  'name'?: string;
  'age'?: number;
};

function Register() {

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {

    fetch('https://us-central1-ami-noti.cloudfunctions.net/api/users', {
      method: 'POST',
      body: JSON.stringify({
        'name': values.name,
        'email': values.email,
        'password': values.password,
        'age': values.age,
      }),
    })
      .then((raw) => raw.text())
      .then(() => {
        alert('Register success!');
      })
      .catch(() => {
        alert('Register fail!');
      });
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    alert(errorInfo);
  };

  return (<>
    <div className='text-center'>
      <Form
        className='mx-auto'
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item<FieldType>
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label='Age'
          name='age'
          rules={[{ required: true, message: 'Please input your Age!' }]}
        >
          <InputNumber min={1} max={100} className='w-100' />
        </Form.Item>
        <Form.Item<FieldType>
          label='Email'
          name='email'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </>);
}
export default Register;