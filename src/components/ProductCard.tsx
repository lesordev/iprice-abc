import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Badge, Card, Col, Popconfirm, Row, Tag, Typography } from 'antd';
import { random } from 'lodash';

import { ProductProvider } from '#/types';

interface Props<T> {
  product: T;
  showPrice?: boolean;
  showStatus?: boolean;
  showQuantity?: boolean;
  onEdit?: (product: T) => void;
  onDelete?: (product: T) => void;
}

export const ProductCard = <T extends ProductProvider>({
  product,
  showPrice = false,
  showStatus = false,
  showQuantity = false,
  onEdit,
  onDelete,
}: Props<T>) => {
  const {
    name: productName,
    description,
    quantity,
    unitPrice,
    isActive,
  } = product;
  return (
    <Badge.Ribbon
      text={isActive ? 'Active' : 'Inactive'}
      color={isActive ? 'green' : 'gray'}
    >
      <Card
        className='w-80 rounded-md overflow-hidden border-none shadow-xl'
        cover={
          <img
            width={320}
            height={240}
            src={`https://picsum.photos/id/${random(1000)}/320/240`}
          />
        }
        actions={[
          <Row
            gutter={10}
            justify='center'
            className='text-green-600'
            onClick={() => onEdit?.(product)}
          >
            <Col>
              <EditOutlined />
            </Col>
            <Col>Edit</Col>
          </Row>,
          <Popconfirm
            title='Are you sure to delete this product?'
            onConfirm={() => {
              onDelete?.(product);
            }}
          >
            <Row gutter={10} justify='center' className='text-red-600'>
              <Col>
                <DeleteOutlined />
              </Col>
              <Col>Delete</Col>
            </Row>
          </Popconfirm>,
        ]}
      >
        <Card.Meta
          title={<Typography.Title level={4}>{productName}</Typography.Title>}
          description={
            <Typography.Paragraph ellipsis={{ rows: 2 }} className='h-11'>
              {description}
            </Typography.Paragraph>
          }
        />

        {showPrice && (
          <Typography className='font-semibold text-red-600 text-lg'>
            {(unitPrice ?? 0).toLocaleString('vi-VN', {
              style: 'currency',
              currency: 'VND',
            })}
          </Typography>
        )}

        {showQuantity && (
          <div className='font-semibold text-lg'>Quantity: {quantity}</div>
        )}

        {showStatus && (
          <Tag className='mt-2' color={status ? 'green' : 'gray'}>
            {status ? 'Active' : 'Disabled'}
          </Tag>
        )}
      </Card>
    </Badge.Ribbon>
  );
};
