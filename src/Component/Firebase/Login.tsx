
import { Form, Button, Checkbox, Input } from 'antd';
import type { FormProps } from 'antd';
import { useDispatch } from 'react-redux';
import { set } from './account';


type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

function Login() {
  const dispatch = useDispatch();
  
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    fetch('https://us-central1-ami-noti.cloudfunctions.net/api/users')
      .then((raw) => raw.json())
      .then((dt) => {
        const check = dt.filter((e) => e.email === values.email && e.password === values.password);
        if (check.length === 0) { 
          alert('Login fail!');
          return; 
        }

        dispatch(set(check[0]));
        alert('Login success!');
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

        <Form.Item<FieldType> name='remember' valuePropName='checked' label={null}>
          <Checkbox>Remember me</Checkbox>
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
export default Login;