import { Order } from '#/types';

export const mockOrders: Order[] = [
  {
    id: 1,
    orderDate: '2021-11-14T01:00:08Z',
    paymentType: 'risus auctor sed',
    customer: {
      id: 1,
      fullName: 'Thia Bedwell',
    },
    status: 'Đang vận chuyển',
    detail: [
      {
        product: {
          id: 1,
          name: 'Chips - Doritos',
        },
        unitPrice: 249306,
        quantity: 75,
      },
      {
        product: {
          id: 2,
          name: 'Squash - Butternut',
        },
        unitPrice: 235074,
        quantity: 3,
      },
      {
        product: {
          id: 3,
          name: 'Long Island Ice Tea',
        },
        unitPrice: 152745,
        quantity: 90,
      },
      {
        product: {
          id: 4,
          name: 'Swordfish Loin Portions',
        },
        unitPrice: 10540,
        quantity: 172,
      },
      {
        product: {
          id: 5,
          name: 'Oil - Cooking Spray',
        },
        unitPrice: 894372,
        quantity: 27,
      },
    ],
  },
  {
    id: 2,
    orderDate: '2021-11-19T09:00:02Z',
    paymentType: 'vitae quam',
    customer: {
      id: 2,
      fullName: 'Aprilette Wrathall',
    },
    status: 'Đã xác nhận',
    detail: [
      {
        product: {
          id: 1,
          name: 'Soup - Campbells Chili Veg',
        },
        unitPrice: 522192,
        quantity: 123,
      },
      {
        product: {
          id: 2,
          name: 'Fish - Soup Base, Bouillon',
        },
        unitPrice: 558888,
        quantity: 8,
      },
      {
        product: {
          id: 3,
          name: 'Horseradish Root',
        },
        unitPrice: 993606,
        quantity: 138,
      },
      {
        product: {
          id: 4,
          name: 'Beef - Cooked, Corned',
        },
        unitPrice: 57413,
        quantity: 29,
      },
    ],
  },
  {
    id: 3,
    orderDate: '2022-05-29T14:01:09Z',
    paymentType: 'vitae',
    customer: {
      id: 3,
      fullName: 'Shaun Nanuccioi',
    },
    status: 'Đang vận chuyển',
    detail: [
      {
        product: {
          id: 1,
          name: 'Raisin - Golden',
        },
        unitPrice: 407505,
        quantity: 28,
      },
      {
        product: {
          id: 2,
          name: 'V8 - Berry Blend',
        },
        unitPrice: 258657,
        quantity: 57,
      },
      {
        product: {
          id: 3,
          name: 'Sobe - Liz Blizz',
        },
        unitPrice: 693360,
        quantity: 185,
      },
      {
        product: {
          id: 4,
          name: 'Wine - Barolo Fontanafredda',
        },
        unitPrice: 753499,
        quantity: 200,
      },
      {
        product: {
          id: 5,
          name: 'Trout - Smoked',
        },
        unitPrice: 300557,
        quantity: 179,
      },
    ],
  },
  {
    id: 4,
    orderDate: '2021-11-20T12:47:43Z',
    paymentType: 'sapien in',
    customer: {
      id: 4,
      fullName: 'Carolee Middell',
    },
    status: 'Chờ xác nhận',
    detail: [
      {
        product: {
          id: 1,
          name: 'Quail - Jumbo Boneless',
        },
        unitPrice: 733153,
        quantity: 129,
      },
      {
        product: {
          id: 2,
          name: 'Foil Wrap',
        },
        unitPrice: 388914,
        quantity: 132,
      },
      {
        product: {
          id: 3,
          name: 'Vegetable - Base',
        },
        unitPrice: 762197,
        quantity: 157,
      },
      {
        product: {
          id: 4,
          name: 'Halibut - Fletches',
        },
        unitPrice: 554357,
        quantity: 72,
      },
    ],
  },
  {
    id: 5,
    orderDate: '2022-07-01T08:59:42Z',
    paymentType: 'nibh ligula nec',
    customer: {
      id: 5,
      fullName: 'Pauly Gotecliffe',
    },
    status: 'Đang vận chuyển',
    detail: [
      {
        product: {
          id: 1,
          name: 'Apricots - Halves',
        },
        unitPrice: 259568,
        quantity: 103,
      },
      {
        product: {
          id: 2,
          name: 'Sauce - Salsa',
        },
        unitPrice: 900300,
        quantity: 110,
      },
      {
        product: {
          id: 3,
          name: 'Compound - Rum',
        },
        unitPrice: 798627,
        quantity: 47,
      },
    ],
  },
  {
    id: 6,
    orderDate: '2022-07-05T11:27:05Z',
    paymentType: 'consequat',
    customer: {
      id: 6,
      fullName: 'Windy Crowd',
    },
    status: 'Đã xác nhận',
    detail: [
      {
        product: {
          id: 1,
          name: 'Pepper - Sorrano',
        },
        unitPrice: 596059,
        quantity: 196,
      },
      {
        product: {
          id: 2,
          name: 'Mahi Mahi',
        },
        unitPrice: 322324,
        quantity: 75,
      },
      {
        product: {
          id: 3,
          name: 'Alize Red Passion',
        },
        unitPrice: 559380,
        quantity: 153,
      },
      {
        product: {
          id: 4,
          name: 'Wine - Spumante Bambino White',
        },
        unitPrice: 366881,
        quantity: 145,
      },
      {
        product: {
          id: 5,
          name: 'Bagel - Everything',
        },
        unitPrice: 943619,
        quantity: 172,
      },
    ],
  },
  {
    id: 7,
    orderDate: '2022-08-16T07:12:07Z',
    paymentType: 'ante vivamus tortor',
    customer: {
      id: 7,
      fullName: 'Kenn Rushmere',
    },
    status: 'Đã xác nhận',
    detail: [
      {
        product: {
          id: 1,
          name: 'Wine - Charddonnay Errazuriz',
        },
        unitPrice: 34407,
        quantity: 126,
      },
      {
        product: {
          id: 2,
          name: 'Calypso - Pineapple Passion',
        },
        unitPrice: 45962,
        quantity: 32,
      },
      {
        product: {
          id: 3,
          name: 'Lettuce - Romaine, Heart',
        },
        unitPrice: 597109,
        quantity: 128,
      },
      {
        product: {
          id: 4,
          name: 'Aspic - Amber',
        },
        unitPrice: 12114,
        quantity: 156,
      },
    ],
  },
  {
    id: 8,
    orderDate: '2021-11-24T14:27:22Z',
    paymentType: 'nulla',
    customer: {
      id: 8,
      fullName: 'Cass Lorey',
    },
    status: 'Đã xác nhận',
    detail: [
      {
        product: {
          id: 1,
          name: 'Chips - Assorted',
        },
        unitPrice: 529922,
        quantity: 36,
      },
      {
        product: {
          id: 2,
          name: 'Muffin - Mix - Creme Brule 15l',
        },
        unitPrice: 237244,
        quantity: 169,
      },
      {
        product: {
          id: 3,
          name: 'Chick Peas - Dried',
        },
        unitPrice: 251670,
        quantity: 14,
      },
      {
        product: {
          id: 4,
          name: 'Cookies - Oreo, 4 Pack',
        },
        unitPrice: 471379,
        quantity: 141,
      },
    ],
  },
  {
    id: 9,
    orderDate: '2021-10-14T07:48:48Z',
    paymentType: 'ut rhoncus aliquet',
    customer: {
      id: 9,
      fullName: 'Erastus Prothero',
    },
    status: 'Chờ xác nhận',
    detail: [
      {
        product: {
          id: 1,
          name: 'Pasta - Penne, Lisce, Dry',
        },
        unitPrice: 882350,
        quantity: 3,
      },
      {
        product: {
          id: 2,
          name: 'Tea - Lemon Scented',
        },
        unitPrice: 172113,
        quantity: 138,
      },
    ],
  },
  {
    id: 10,
    orderDate: '2022-03-10T07:32:50Z',
    paymentType: 'duis ac nibh',
    customer: {
      id: 10,
      fullName: 'Paula Pittman',
    },
    status: 'Đã giao hàng',
    detail: [
      {
        product: {
          id: 1,
          name: 'Tomatoes - Orange',
        },
        unitPrice: 950646,
        quantity: 154,
      },
    ],
  },
];
