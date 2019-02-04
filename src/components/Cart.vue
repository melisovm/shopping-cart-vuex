<template>
  <div class="cart">
    <h1 class="title"></h1>
    <p v-show="!products.length">
      <i>Your cart is empty!</i>
    </p>
    <table
      class="table is-hoverable is-bordered"
      v-show="products.length"
    >
      <thead>
        <tr class="is-selected">
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products">
          <td>{{p.name}}</td>
          <td>{{p.price}}</td>
          <td>{{p.quantity}}</td>
        </tr>
        <tr>
          <td><b>Total:</b></td>
          <td></td>
          <td><b>${{total}}</b></td>
        </tr>
      </tbody>
    </table>
    <p>
      <router-link
        to="/checklist"
        v-show="products.length"
        class="button is-primary"
      >Check it</router-link>
      <button
        v-show="products.length"
        class="button is-primary"
        @click="clearCart"
      >Clear Cart</button>
      <router-link
        to="/"
        v-show="products.length"
        class="button is-primary"
      >Continue Shopping</router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({ products: 'cartProducts' }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    ...mapMutations(
      ['clearCart']
    ),
    checkout () {
      alert('Pay me $' + this.total)
    }
  }
}
</script>

<style>
</style>
