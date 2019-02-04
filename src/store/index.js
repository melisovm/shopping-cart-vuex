import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  added: [],
  all: [{
      id: '1',
      name: 'Lenovo-IBM IP110',
      description: 'Celeron DC N3060 1.6-2.48GHz,2GB,SSD 120GB,15.6"HD,DVD-RW,WF,BT,CR,WC,RUS,DOS HDMI',
      price: 399
    },
    {
      id: '2',
      name: 'Смартфон Apple iPhone XR 256 Gb',
      description: 'Смартфон Apple iPhone XR обладает хорошей камерой на 12 Мп. Объем встроенной памяти составляет 256 Gb. Оперативной памяти на 3 Gb хватает для стабильной работы системы',
      price: 1000
    },
    {
      id: '3',
      name: ' Keyboard A4Tech BLOODY Q1100 ',
      description: ' (Q100+S2) Black+Red, 800-320spi, USB, Blazing Gaming Desktop, подсветка боковых частей клавиатуры, защита от воды + Светодиодная мышь(*id 12)',
      price: 80
    }, {
      id: '4',
      name: 'Apple iMac (Mid 2017)',
      description: 'MMQA2LL/A Intel Core i5-7360U (2.30-3.60GHz), 8GB DDR4, 1TB HDD, Intel Iris Plus Graphics 640, 21.5"FHD (1920x1080) IPS, WiFi ac, BT 4.2, CR, HD WC, macOS High Sierra, Русская клавиатура+Мышка беспроводные, Silver',
      price: 1300
    },
    {
      id: '5',
      name: 'Apple iMac with Retina (Mid 2017)',
      description: 'MNDY2LL/A Intel Core i5-7400 (3.00-3.50GHz), 8GB DDR4, 1TB HDD, Radeon Pro 555 2GB GDDR5, 21.5"4K (4096x2304) IPS, WiFi ac, BT 4.2, CR, HD WC, macOS High Sierra, Русская клавиатура+Мышка беспроводные, Silver',
      price: 1491
    }
  ]
}

// getters
const getters = {
  allProducts: state => state.all, // would need action/mutation if data fetched async
  getNumberOfProducts: state => (state.all) ? state.all.length : 0,
  cartProducts: state => {
    return state.added.map(({
      id,
      quantity
    }) => {
      const product = state.all.find(p => p.id === id)

      return {
        name: product.name,
        price: product.price,
        quantity
      }
    })
  }
}

// actions
const actions = {
  addToCart({
    commit
  }, product) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

// mutations
const mutations = {

  [types.ADD_TO_CART](state, {
    id
  }) {
    const record = state.added.find(p => p.id === id)

    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },
  clearCart(state) {
    state.added = [];
  }
}

export default new Vuex.Store({
  state,
  strict: debug,
  getters,
  actions,
  mutations
})
