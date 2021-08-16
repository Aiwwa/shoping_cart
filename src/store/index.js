import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        image:
          'https://www.smow.com/pics/vt-078-000/a/vitra-panton-chair-dark-lime_zoom.jpg',
        title: 'green chair',
        price: 35.38,
        sum: 35.38,
        count: 0,
      },
      {
        image:
          'https://www.barkerandstonehouse.co.uk/images/swatchzoom/TWYFCHAIYELL_1_Zoom.jpg',
        title: 'simple chair',
        price: 19.99,
        sum: 19.99,
        count: 0,
      },
      {
        image:
          'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg',
        title: 'fotelis chair',
        price: 55,
        sum: 55,
        count: 0,
      },
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/I/41Jgo7WjH1L.jpg',
        title: 'Boss chair',
        price: 128,
        sum: 128,
        count: 0,
      },
      {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/220px-Set_of_fourteen_side_chairs_MET_DP110780.jpg',
        title: 'king chair',
        price: 88.25,
        sum: 88.25,
        count: 0,
      },
    ],
    cart: [],
    cartSum: 0,
  },
  mutations: {
    addItemsToCart(state, payload) {
      payload.count++
      state.cart.push(payload)
      state.cartSum += payload.sum
    },

    plusItem(state, payload) {
      let updatedItem = state.products.find((el) => el.title === payload.title)
      updatedItem.count++
      updatedItem.sum += payload.price

      state.cartSum += payload.sum
    },

    minusItem(state, payload) {
      let updatedItem = state.products.find((el) => el.title === payload.title)
      state.cartSum -= payload.sum

      if (updatedItem.count > 0) {
        updatedItem.count--
        updatedItem.sum -= payload.price
      }
    },
  },
  actions: {},
  modules: {},
})
