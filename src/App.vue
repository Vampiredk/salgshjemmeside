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
          <div class="dropdown">
          <button class="dropbtn">Admin</button>
            <div class="dropdown-content">
              <router-link to="/admin">
                <a rehf="#">Product</a>
              </router-link>
              <router-link to="/Ordre">
                <a href="#">Order</a>
              </router-link>
            </div>
          </div>
          <div class="dropdown">
          <button class="dropbtn">Categories</button>
          <router-link to="/Product">
            <div class="dropdown-content">
              <a @click="dropdownvalue('Food')" rehf="#">Food</a>
              <a @click="dropdownvalue('Car')" href="#">Car</a>
              <a @click="dropdownvalue('Components')" href="#">Components</a>
            </div>
            </router-link>
          </div>
          <div class="topbarcontentright">
            <router-link to="/login">
            <button class="topbarbtn">Login</button>
          </router-link>
          <router-link to="/kurv">
            <button class="topbarbtn" @click="toggleKurv">kurv</button>
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view
    :cart="cart"
    :addvare="addvare"
    :removevare="removevare"
    :dropdown="dropdown"
    :dropdownvalue="dropdownvalue"
  />

  <HelloWorld
    :cart="cart"
    :showkurv="showkurv"
    :togglekurv="togglekurv"
  />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
const WaresURL = 'https://salgshjemmesiderestservice.azurewebsites.net/api/Wares'

export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      cart: {},
      showkurv: false,
      dropdown: '',
      totalvalue: 0
    }
  },
  computed: {
  },
  methods: {
    addvare (name, quantity) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      if (quantity > product.stock) {
        alert('Der er ikke nok af denne vare')
      } else {
        if (!this.cart[name]) this.cart[name] = 0
        if (quantity == null) {
          quantity = 1
        }
        this.cart[name] += quantity
        console.log(this.cart)
      }
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
    },
    dropdownvalue (value) {
      this.dropdown = value
    },
    async getWare () {
      const response = await fetch(WaresURL)
      const data = await response.json()
      console.log(data)
      this.inventory = data
    }
  },
  created: function () {
    setTimeout(() => {
      this.getWare()
    }, 500)
  }
}
</script>

<style>
</style>
