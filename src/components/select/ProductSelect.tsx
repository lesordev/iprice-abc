import { Select } from 'antd';

import { useGetProducts } from '#/api';

export const ProductSelect = () => {
  const { products, loading } = useGetProducts();

  return (
    <Select
      className='w-full'
      loading={loading}
      options={products.map((e) => ({
        label: e.name,
        value: e.id,
      }))}
      placeholder='Select product ...'
      showSearch
      filterOption={(input, option) =>
        !!option?.label.toLocaleLowerCase().includes(input.toLowerCase())
      }
    />
  );
};
