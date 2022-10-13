import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
  Spin,
  Switch,
  Typography,
} from 'antd';
import { useEffect, useState } from 'react';

import { api } from '#/api';
import { ProductCard } from '#/components';
import { ProductSelect } from '#/components/select/ProductSelect';
import { ProductProvider, ProductProviderResponse } from '#/types';

export const ProviderProductPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [showRegisModal, setShowRegisModal] = useState(false);
  const [showInactive, setShowInactive] = useState(false);
  const [editData, setEditData] = useState<ProductProvider>();

  const [productsProvider, setProductsProvider] = useState<ProductProvider[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const { data } = await api.get<ProductProviderResponse[]>(
        `/pprovider/provider/listbyprovider/${1}`
      );
      setProductsProvider(
        data.map((e) => ({
          id: e.productproviderId,
          category: { id: -1, isActive: true, name: '' },
          description: e.personalDescription,
          image: '',
          isActive: e.status,
          manufacturer: { id: -1, name: '', isActive: true },
          name: e.productName,
          quantity: e.quantity,
          unitPrice: e.unitPrice,
          product: {
            id: e.product_id,
          },
        }))
      );
    })();
  }, [loading]);

  if (loading) {
    return (
      <div className='flex justify-center mt-8 min-h-[70vh] items-center'>
        <Spin />
      </div>
    );
  }

  return (
    <>
      <div className='bg-white rounded mt-6 p-4 min-h-screen'>
        <Row justify='space-between' align='middle'>
          <Col>
            <Typography.Title level={3}>Register Product</Typography.Title>
          </Col>
          <Col>
            <Button type='primary' onClick={() => setShowRegisModal(true)}>
              Regis Product
            </Button>
          </Col>
        </Row>

        <Row align='middle' gutter={10}>
          <Col>
            <Typography>Show inactive</Typography>
          </Col>
          <Col>
            <Switch
              checked={showInactive}
              onChange={(e) => setShowInactive(e)}
            />
          </Col>
        </Row>

        <div className='grid gap-4 grid-cols-4 mt-8 justify-items-center'>
          {productsProvider
            .filter((e) => (showInactive ? true : e.isActive))
            .sort((a, b) => (!a.isActive && b.isActive ? 1 : -1))
            .map((e) => (
              <ProductCard
                key={e.id}
                product={e}
                showQuantity
                showPrice
                onDelete={async (product) => {
                  setLoading(true);
                  try {
                    await api.delete(`/pprovider/list/${product.id}`);
                  } catch (error) {
                    console.error(error);
                  }
                  setLoading(false);
                }}
                onEdit={(product) => {
                  setShowRegisModal(true);
                  setEditData(product);
                  form.setFieldsValue({
                    unitPrice: product.unitPrice,
                    quantity: product.quantity,
                    product_id: product.product.id,
                    personalDescription: product.description,
                    status: product.isActive,
                  });
                }}
              />
            ))}
        </div>
      </div>

      <Modal
        title='Regis product'
        open={showRegisModal}
        onCancel={() => {
          setShowRegisModal(false);
          setEditData(undefined);

          form.setFieldsValue({
            product_id: undefined,
            unitPrice: undefined,
            personalDescription: undefined,
            quantity: undefined,
            status: undefined,
          });
        }}
        closable={false}
        onOk={async () => {
          setLoading(true);
          const values = form.getFieldsValue();
          const hasTouched = form.isFieldsTouched(true);
          const hasErrors =
            form.getFieldsError().some((e) => e.errors.length) ||
            Object.values(values).some((e) => !e);
          const {
            unitPrice,
            quantity,
            personalDescription,
            product_id,
            status,
          } = values;

          if (!editData) {
            if (hasTouched && !hasErrors) {
              await api.post('/pprovider/list', {
                unitPrice,
                quantity,
                personalDescription,
                rating: 0,
                status: true,
                product_id,
                provider_id: 1,
              });
              message.success('Register product successfully!');
              setShowRegisModal(false);
            } else {
              message.error('You input is not valid!');
            }
          } else {
            await api.put(`/pprovider/list/${1}`, {
              unitPrice,
              quantity,
              personalDescription,
              rating: 0,
              status,
              product_id,
              provider_id: 1,
            });
            message.success('Update product successfully!');
            setShowRegisModal(false);
            setEditData(undefined);
            form.resetFields();
          }

          setLoading(false);
        }}
      >
        <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
          <Form.Item label='Product' name='product_id' required>
            <ProductSelect {...(editData && { disabled: true })} />
          </Form.Item>
          <Form.Item
            label='Price'
            required
            name='unitPrice'
            rules={[{ required: true, message: 'Price must be greater 0.' }]}
          >
            <InputNumber className='w-full' min={0} />
          </Form.Item>
          <Form.Item
            label='Description'
            name='personalDescription'
            required
            rules={[
              { required: true, message: 'Description can not be empty' },
              { whitespace: true, message: 'Description can not be empty' },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label='Quantity'
            required
            name='quantity'
            rules={[{ required: true, message: 'Quantity must be greater 0.' }]}
          >
            <InputNumber className='w-full' min={0} />
          </Form.Item>
          {editData && (
            <Form.Item label='Status' name='status' valuePropName='checked'>
              <Switch />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </>
  );
};
