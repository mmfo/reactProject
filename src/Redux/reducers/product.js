import produce from 'immer'

const initialState = {
  category: [{
    id: 1,
    name: 'category1'
  },
  {
    id: 2,
    name: 'category2'
  }, {
    id: 3,
    name: 'category3'
  }],
  products: [
    {
      productId: 1,
      categoryId: 1,
      name: 'קופסה מתנה קלאסית',
      price: '2.8',
      color: 'yellow',
      img: 'https://laline-production-server-assetsb7c36b1b-1weiqjoevxjiu.s3.eu-central-1.amazonaws.com/images/products/M71407052199_01.jpg'
    }
    , {
      productId: 2,
      categoryId: 2,
      name: 'שמן גוף',
      price: '10.9',
      color: 'orange',
      img: 'https://laline-production-server-assetsb7c36b1b-1weiqjoevxjiu.s3.eu-central-1.amazonaws.com/images/products/M08162999999.jpg'
    },
    {
      productId: 3,
      categoryId: 2,
      name: 'קרם ידיים',
      price: '2.8',
      color: 'PINK',
      img: 'https://laline-production-server-assetsb7c36b1b-1weiqjoevxjiu.s3.eu-central-1.amazonaws.com/images/products/M06011052599-_01.jpg'
    },
    {
      productId: 4,
      categoryId: 3,
      name: 'סרום לשיער מועשר במינרלים',
      price: '2.8',
      color: 'YELLOW',
      img: 'https://laline-production-server-assetsb7c36b1b-1weiqjoevxjiu.s3.eu-central-1.amazonaws.com/images/products/M71111052199_01.jpg'
    }
    ,
    {
      productId: 5,
      categoryId: 3,
      name: 'DEAD SEA',
      price: '20',
      color: '19.8',
      img: 'https://laline-production-server-assetsb7c36b1b-1weiqjoevxjiu.s3.eu-central-1.amazonaws.com/assets/Deadsea567x618-1638797517268.jpg'
    },
    {
      productId: 6,
      categoryId: 3,
      name: 'FLOWERS',
      price: '20',
      color: '19.8',
      img: 'https://laline-production-server-assetsb7c36b1b-1weiqjoevxjiu.s3.eu-central-1.amazonaws.com/assets/409x409lifestyle-1649676772975.jpg'
    },
    {
      productId: 7,
      categoryId: 3,
      name: 'LEG CREAME',
      price: '20',
      color: '19.8',
      img: 'https://laline-production-server-assetsb7c36b1b-1weiqjoevxjiu.s3.eu-central-1.amazonaws.com/assets/%D7%98%D7%99%D7%A4%D7%95%D7%97-%D7%A8%D7%92%D7%9C%D7%99%D7%99%D7%9D-1630589092363.png'
    },
    {
      productId: 8,
      categoryId: 3,
      name: 'BAG CREAME',
      price: '20',
      color: '19.8',
      img: 'https://laline-production-server-assetsb7c36b1b-1weiqjoevxjiu.s3.eu-central-1.amazonaws.com/images/products/FW7A8429-Gray.jpg'
    }
  ],
  adminId: 'mimi'
}
const reducer = {

  ADD_PRODUCT(state, action) {
    state.products.push(action.payload)
  },
  DELETE_PRODUCT(state, action) {
    state.products.splice(action.payload, 1)
  }
}

export default produce((state, action) => {
  if (reducer[action.type])
    reducer[action.type](state, action)
}
  , initialState)
