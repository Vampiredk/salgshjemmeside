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
          <router-link to="/kurv">
            <button class="topbarbtn">Product</button>
          </router-link>
          <router-link to="/admin">
            <button class="topbarbtn">Admin</button>
          </router-link>
          <div class="topbarcontentright">
            <button class="topbarbtn" @click="toggleKurv">kurv</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view
    :cart="cart"
    :addvare="addvare"
    :removevare="removevare"
  />

  <HelloWorld
    :cart="cart"
    :showkurv="showkurv"
    :togglekurv="togglekurv"
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
      cart: {},
      showkurv: false
    }
  },
  computed: {
  },
  methods: {
    addvare (name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
      console.log(this.cart)
    },
    toggleKurv () {
      if (this.showkurv === true) {
        console.log('lukker for Kurv')
        this.showkurv = false
      } else if (this.showkurv === false) {
        console.log('Åbner for Kurv')
        this.showkurv = true
      }
    },
    removevare (name) {
      delete this.cart[name]
    }
  }
}
</script>

<style>
</style>
