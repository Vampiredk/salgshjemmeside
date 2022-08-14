  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<template>
  <nav>
    <div id="topbar">
      <div id="topbarcolour">
      </div>
      <div class="topbarcontent">
        <div class="topbarcontentpos">
          <router-link to="/">
            <button class="topbarbtn">
              <svg width="24px" height="24px" viewBox="0 0 92 92" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                <g id="home">
                  <path d="M0 0L92 0L92 92L0 92L0 0Z" id="Background" fill="#FFFFFF" fill-opacity="0" fill-rule="evenodd" stroke="none" />
                  <g clip-path="url(#mask_1)">
                    <path d="M88 49C87 49 86 48.6 85.2 47.9L46 9.6L6.8 47.9C5.2 49.4 2.7 49.4 1.1 47.8C-0.4 46.2 -0.4 43.7 1.2 42.1L43.2 1.1C44.8 -0.399998 47.2 -0.399998 48.8 1.1L90.8 42.1C92.4 43.6 92.4 46.2 90.9 47.8C90.1 48.6 89 49 88 49L88 49ZM79.2 88L79.2 48.9C79.2 46.7 77.4 44.9 75.2 44.9C73 44.9 71.2 46.7 71.2 48.9L71.2 84L58.7 84L58.7 62.6C58.7 59.7 56.3 57.3 53.4 57.3L38.6 57.3C35.7 57.3 33.3 59.7 33.3 62.6L33.3 84L20.8 84L20.8 48.9C20.8 46.7 19 44.9 16.8 44.9C14.6 44.9 12.8 46.7 12.8 48.9L12.8 88C12.8 90.2 14.6 92 16.8 92L37.3 92C39.5 92 41.3 90.2 41.3 88L41.3 65.3L50.8 65.3L50.8 88C50.8 90.2 52.6 92 54.8 92L75.3 92C77.5 92 79.2 90.2 79.2 88L79.2 88Z" id="Shape" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
                  </g>
                </g>
              </svg>Home</button>
          </router-link>
          <div class="dropdown">
          <button class="dropbtn">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <g id="menu">
                <path d="M0 0L24 0L24 24L0 24L0 0Z" id="Background" fill="#FFFFFF" fill-opacity="0" fill-rule="evenodd" stroke="none" />
                <g clip-path="url(#mask_1)">
                  <g id="Group" transform="translate(3 6)">
                    <g id="Group">
                      <path d="M0 6L0 5.95C0 5.68766 0.0927495 5.46375 0.278249 5.27825C0.463748 5.09275 0.687665 5 0.95 5L17.05 5C17.3123 5 17.5363 5.09275 17.7218 5.27825C17.9072 5.46375 18 5.68766 18 5.95L18 6.05C18 6.31234 17.9072 6.53625 17.7217 6.72175C17.5362 6.90725 17.3123 7 17.05 7L0.95 7C0.687665 7 0.463748 6.90725 0.278249 6.72175C0.0927495 6.53625 0 6.31234 0 6.05L0 6Z" id="Rectangle" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
                      <path d="M0 11L0 10.95C0 10.6877 0.0927495 10.4637 0.278249 10.2782C0.463748 10.0927 0.687665 10 0.95 10L17.05 10C17.3123 10 17.5363 10.0927 17.7218 10.2782C17.9072 10.4637 18 10.6877 18 10.95L18 11.05C18 11.3123 17.9072 11.5363 17.7217 11.7218C17.5362 11.9073 17.3123 12 17.05 12L0.95 12C0.687665 12 0.463748 11.9073 0.278249 11.7218C0.0927495 11.5363 0 11.3123 0 11.05L0 11Z" id="Rectangle" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
                      <path d="M0 1L0 0.95C0 0.687665 0.0927495 0.463748 0.278249 0.278249C0.463748 0.0927495 0.687665 0 0.95 0L17.05 0C17.3123 0 17.5363 0.0927495 17.7218 0.278249C17.9072 0.463748 18 0.687665 18 0.95L18 1.05C18 1.31234 17.9072 1.53625 17.7217 1.72175C17.5362 1.90725 17.3123 2 17.05 2L0.95 2C0.687665 2 0.463748 1.90725 0.278249 1.72175C0.0927495 1.53625 0 1.31234 0 1.05L0 1Z" id="Rectangle" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Admin</button>
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
          <button class="dropbtn">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <g id="menu">
                <path d="M0 0L24 0L24 24L0 24L0 0Z" id="Background" fill="#FFFFFF" fill-opacity="0" fill-rule="evenodd" stroke="none" />
                <g clip-path="url(#mask_1)">
                  <g id="Group" transform="translate(3 6)">
                    <g id="Group">
                      <path d="M0 6L0 5.95C0 5.68766 0.0927495 5.46375 0.278249 5.27825C0.463748 5.09275 0.687665 5 0.95 5L17.05 5C17.3123 5 17.5363 5.09275 17.7218 5.27825C17.9072 5.46375 18 5.68766 18 5.95L18 6.05C18 6.31234 17.9072 6.53625 17.7217 6.72175C17.5362 6.90725 17.3123 7 17.05 7L0.95 7C0.687665 7 0.463748 6.90725 0.278249 6.72175C0.0927495 6.53625 0 6.31234 0 6.05L0 6Z" id="Rectangle" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
                      <path d="M0 11L0 10.95C0 10.6877 0.0927495 10.4637 0.278249 10.2782C0.463748 10.0927 0.687665 10 0.95 10L17.05 10C17.3123 10 17.5363 10.0927 17.7218 10.2782C17.9072 10.4637 18 10.6877 18 10.95L18 11.05C18 11.3123 17.9072 11.5363 17.7217 11.7218C17.5362 11.9073 17.3123 12 17.05 12L0.95 12C0.687665 12 0.463748 11.9073 0.278249 11.7218C0.0927495 11.5363 0 11.3123 0 11.05L0 11Z" id="Rectangle" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
                      <path d="M0 1L0 0.95C0 0.687665 0.0927495 0.463748 0.278249 0.278249C0.463748 0.0927495 0.687665 0 0.95 0L17.05 0C17.3123 0 17.5363 0.0927495 17.7218 0.278249C17.9072 0.463748 18 0.687665 18 0.95L18 1.05C18 1.31234 17.9072 1.53625 17.7217 1.72175C17.5362 1.90725 17.3123 2 17.05 2L0.95 2C0.687665 2 0.463748 1.90725 0.278249 1.72175C0.0927495 1.53625 0 1.31234 0 1.05L0 1Z" id="Rectangle" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            Categories
            </button>
          <router-link to="/Product">
            <div class="dropdown-content">
              <a @click="dropdownvalue('Mad')" rehf="#">Food</a>
              <a @click="dropdownvalue('Bil')" href="#">Car</a>
              <a @click="dropdownvalue('Materiale')" href="#">Components</a>
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
                <svg width="24px" height="24px" viewBox="0 0 92 92" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                  <g id="cart">
                    <g clip-path="url(#mask_1)">
                      <path d="M91.8 27.3L81.1 61C80.3 63.4 78.2 65 75.7 65L34.4 65C32 65 29.7 63.5 28.9 61.3L13.1 19L4 19C1.8 19 0 17.2 0 15C0 12.8 1.8 11 4 11L15.9 11C17.6 11 19.1 12.1 19.7 13.7L36 57L74 57L82.5 30L35.4 30C33.2 30 31.4 28.2 31.4 26C31.4 23.8 33.2 22 35.4 22L88 22C89.3 22 90.5 22.7 91.2 23.7C92 24.7 92.2 26.1 91.8 27.3L91.8 27.3ZM36.4 70.3C34.7 70.3 33 71 31.8 72.2C30.6 73.4 29.9 75.1 29.9 76.8C29.9 78.5 30.6 80.2 31.8 81.4C33 82.6 34.7 83.3 36.4 83.3C38.1 83.3 39.8 82.6 41 81.4C42.2 80.2 42.9 78.5 42.9 76.8C42.9 75.1 42.2 73.4 41 72.2C39.8 71 38.1 70.3 36.4 70.3L36.4 70.3ZM72.3 70.3C70.6 70.3 68.9 71 67.7 72.2C66.5 73.4 65.8 75.1 65.8 76.8C65.8 78.5 66.5 80.2 67.7 81.4C68.9 82.6 70.6 83.3 72.3 83.3C74 83.3 75.7 82.6 76.9 81.4C78.1 80.2 78.8 78.5 78.8 76.8C78.8 75.1 78.1 73.4 76.9 72.2C75.7 71 74 70.3 72.3 70.3L72.3 70.3Z" id="Shape" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
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

const WaresURL = 'https://restservicesalgside.azurewebsites.net/api/wares'

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
