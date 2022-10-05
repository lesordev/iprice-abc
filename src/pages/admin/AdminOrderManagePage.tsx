import { FileTextOutlined } from '@ant-design/icons';
import { Button, Empty, Modal, Table, Tag, Tooltip, Typography } from 'antd';
import { ColumnType } from 'antd/lib/table';
import dayjs from 'dayjs';
import { useState } from 'react';

import { mockOrders } from '#/data/order';
import { Order, OrderDetail } from '#/types';

const columns: ColumnType<Order>[] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Customer',
    dataIndex: ['customer', 'fullName'],
  },

  {
    title: 'Payment Type',
    dataIndex: 'paymentType',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (text) => <Tag color='green'>{text}</Tag>,
  },
  {
    title: 'Total Price',
    render: (_, order) => (
      <div className='text-right'>
        {order.detail
          .reduce((acc, cur) => acc + cur.quantity * cur.unitPrice, 0)
          .toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
      </div>
    ),
  },
  {
    title: 'Order Date',
    dataIndex: 'orderDate',
    render: (val) => dayjs(val).format('DD/MM/YYYY'),
  },
  {
    title: 'Action',
    render: () => (
      <>
        <Tooltip title='View detail'>
          <FileTextOutlined className='text-2xl text-blue-400' />
        </Tooltip>
      </>
    ),
  },
];

export const AdminOrderManagePage = () => {
  const [orderDetail, setOrderDetail] = useState<OrderDetail[] | null>(null);

  return (
    <>
      <div className='bg-white rounded p-6 my-6'>
        <Typography.Title level={3}>Order Management</Typography.Title>

        <Table
          columns={columns}
          dataSource={mockOrders}
          onRow={(order) => {
            return {
              onClick: () => {
                setOrderDetail(order.detail);
              },
            };
          }}
        />
      </div>
      <Modal
        closable={false}
        closeIcon={null}
        open={!!orderDetail}
        footer={
          <Button
            onClick={() => setOrderDetail(null)}
            type='primary'
            className='rounded border-none'
          >
            Close
          </Button>
        }
      >
        {orderDetail ? (
          <Table
            dataSource={orderDetail}
            columns={[
              { title: 'Product Name', dataIndex: ['product', 'name'] },
              { title: 'Unit Price', dataIndex: 'unitPrice' },
              { title: 'Quantity', dataIndex: 'quantity' },
            ]}
          />
        ) : (
          <Empty />
        )}
      </Modal>
    </>
  );
};
