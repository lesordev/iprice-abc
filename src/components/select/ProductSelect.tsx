import { Select } from 'antd';

import { useGetProducts } from '#/api';

interface Props {
  value?: number;
  onChange?: (id: number) => void;
}

export const ProductSelect = ({ value, onChange }: Props) => {
  const { products, loading } = useGetProducts();

  return (
    <Select
      className='w-full'
      loading={loading}
      options={products.map((e) => ({
        label: e.name,
        value: e.id,
      }))}
      value={value}
      onChange={onChange}
      placeholder='Select product ...'
      showSearch
      filterOption={(input, option) =>
        !!option?.label.toLocaleLowerCase().includes(input.toLowerCase())
      }
    />
  );
};
