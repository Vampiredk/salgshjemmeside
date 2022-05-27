<template>
  <nav>
    <div id="topbar">
      <div id="topbarcolour">
      </div>
      <div class="topbarcontent">
        <div class="topbarcontentpos">
          <router-link to="/">
            <button class="topbarbtn">Home</button>
          </router-link>
          <router-link to="/about">
            <button class="topbarbtn">about</button>
          </router-link>
          <div class="topbarcontentright">
            <button class="topbarbtn">kurv</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view
    :cart="cart"
    :addvare="addvare"
  />

  <HelloWorld
    :inventory="inventory"
    :cart="cart"
  />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      cart: {
        Mælk: 0,
        Kebab: 0,
        Tesla: 0,
        Uran235: 0
      }
    }
  },
  computed: {
  },
  methods: {
    addvare (type, quantity) {
      this.cart[type] += quantity
      console.log(this.cart)
    }
  }
}
</script>

<style>
</style>
