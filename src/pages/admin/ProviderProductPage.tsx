import { Button, Col, Row, Typography } from 'antd';

export const ProviderProductPage = () => {
  return (
    <div className='bg-white rounded mt-6 p-4'>
      <Row justify='space-between' align='middle'>
        <Col>
          <Typography.Title level={3}>Register Product</Typography.Title>
        </Col>
        <Col>
          <Button type='primary'>Register Product</Button>
        </Col>
      </Row>
    </div>
  );
};
