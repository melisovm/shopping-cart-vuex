<template>
  <div class="cart">
    <h1 class="title"></h1>
    <p v-show="!products.length">
      <i>Your cart is empty!</i>
    </p>
    <table
      class="table is-bordered"
      v-show="products.length"
    >
      <thead>
        <tr>
          <td>Amount</td>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products">
          <td>{{p.quantity}}</td>
          <td>{{p.name}}</td>
          <td>{{p.price}}</td>
        </tr>
        <tr>
          <td></td>
          <td><b>Total:</b></td>
          <td><b>${{total}}</b></td>
        </tr>
      </tbody>
    </table>
    <p>
      <router-link
        to="/"
        v-show="products.length"
        class="button is-primary abs"
      >Continue Shopping</router-link>
      <button
        class="button is-primary"
        v-show="products.length"
        @click="checkout"
      >
        Buy
      </button>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }

  },
  methods: {
    checkout () {
      alert('Total price $' + this.total)
    }
  }
}
</script>

<style scoped>
</style>
