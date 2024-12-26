
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';

function Info() {
  const { email, name, age } = useSelector((state: RootState) => state.account);

  return (<>
    <div className="text-center">
      <div className='mx-auto' style={{ width: '200px' }}>
        <Row>
          <Col span={12} className='text-start fw-bold'>Email:</Col>
          <Col span={12} className='text-start fw-bold'>{email}</Col>
        </Row>
        <Row>
          <Col span={12} className='text-start fw-bold'>Name:</Col>
          <Col span={12} className='text-start fw-bold'>{name}</Col>
        </Row>
        <Row>
          <Col span={12} className='text-start fw-bold'>Age:</Col>
          <Col span={12} className='text-start fw-bold'>{age}</Col>
        </Row>
      </div>
    </div>
  </>);
}
export default Info;