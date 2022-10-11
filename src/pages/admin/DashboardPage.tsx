import { ManufacturerSelect, ProductCategorySelect } from '#/components';
import { ProductSelect } from '#/components/select/ProductSelect';

export const DashboardPage = () => {
  return (
    <div>
      Dashboard
      <ManufacturerSelect />
      <ProductCategorySelect />
      <ProductSelect />
    </div>
  );
};
