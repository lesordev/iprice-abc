import { useState } from 'react';

import { api } from './api';

import { ProductProvider, ProductProviderResponse } from '#/types';
export function useGetProductProvider() {
  const [loading, setLoading] = useState(false);
  const [productsProvider, setProductsProvider] = useState<ProductProvider[]>(
    []
  );

  const fetch = async (id: number) => {
    setLoading(true);
    const { data } = await api.get<ProductProviderResponse[]>(`/pprovider/listbyprovider/${id}`);
    setProductsProvider(data.map(e => ({
      category: {
        id: -1,
        isActive: true,
        name: ''
      },
      description: '',
      id: e.productproviderId,
      
    })))
  };
}
