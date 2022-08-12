  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
          <div class="topbarcontentnext">
            <router-link to="/login">
              <button class="topbarbtn">Login</button>
            </router-link>
          </div>
          <div class="topbarcontentright">
            <router-link to="/kurv">
              <button class="topbarbtn" @click="toggleKurv">
                <svg width="30px" height="30px" viewBox="0 0 92 92" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                  <g id="cart">
                    <g clip-path="url(#mask_1)">
                      <path d="M91.8 27.3L81.1 61C80.3 63.4 78.2 65 75.7 65L34.4 65C32 65 29.7 63.5 28.9 61.3L13.1 19L4 19C1.8 19 0 17.2 0 15C0 12.8 1.8 11 4 11L15.9 11C17.6 11 19.1 12.1 19.7 13.7L36 57L74 57L82.5 30L35.4 30C33.2 30 31.4 28.2 31.4 26C31.4 23.8 33.2 22 35.4 22L88 22C89.3 22 90.5 22.7 91.2 23.7C92 24.7 92.2 26.1 91.8 27.3L91.8 27.3ZM36.4 70.3C34.7 70.3 33 71 31.8 72.2C30.6 73.4 29.9 75.1 29.9 76.8C29.9 78.5 30.6 80.2 31.8 81.4C33 82.6 34.7 83.3 36.4 83.3C38.1 83.3 39.8 82.6 41 81.4C42.2 80.2 42.9 78.5 42.9 76.8C42.9 75.1 42.2 73.4 41 72.2C39.8 71 38.1 70.3 36.4 70.3L36.4 70.3ZM72.3 70.3C70.6 70.3 68.9 71 67.7 72.2C66.5 73.4 65.8 75.1 65.8 76.8C65.8 78.5 66.5 80.2 67.7 81.4C68.9 82.6 70.6 83.3 72.3 83.3C74 83.3 75.7 82.6 76.9 81.4C78.1 80.2 78.8 78.5 78.8 76.8C78.8 75.1 78.1 73.4 76.9 72.2C75.7 71 74 70.3 72.3 70.3L72.3 70.3Z" id="Shape" fill="#000000" fill-rule="evenodd" stroke="none" />
                    </g>
                  </g>
                </svg>({{itemsadded}})
              </button>
            </router-link>
            <i class='fa-solid fa-cart-shopping'></i>
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
      totalvalue: 0,
      itemsadded: 0
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
        this.itemsadded += quantity
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
      this.itemsadded -= this.cart[name]
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
