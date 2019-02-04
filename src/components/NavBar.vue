<template>
  <div
    class="nav-item is-tab"
    :class="{'active-bottom-border':$route.path==='/cart'}"
  >
    <div class="field is-grouped">
      <p class="control">
        <router-link
          to="/"
          class="button is-info"
        >
          All Products
        </router-link>
        <router-link
          to="/cart"
          class="button is-success"
        >
          <span class="icon">
            <i class="fa fa-shopping-cart"></i>
          </span>
          <span>Cart ({{itemsInCart}})</span>
        </router-link>

      </p>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    itemsInCart () {
      let cart = this.$store.getters.cartProducts;
      return cart.reduce((accum, item) => accum + item.quantity, 0)
    }
  }
}
</script>
<style scoped>
div {
  margin-top: 10px;
}
input {
  width: 60%;
}
</style>
