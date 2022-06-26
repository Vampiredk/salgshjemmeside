<template>
  <div class="cart">
    <div class="carthead">
      <tbody>
        <tr>
          <td class="cartname">Product</td>
          <td class="cartname">Quantity</td>
          <td class="cartname"> Price</td>
        </tr>
      </tbody>
    </div>
    <div class="cartbody">
      <tbody>
        <tr v-for="(quantity, key, i) in cart" :key="i">
          <td class="cartname"> {{ key }}</td>
          <td class="cartname"> {{ quantity }} Stk.</td>
          <td class="cartname"> {{ findprice(key, quantity) }} DKK</td>
          <td class="cartname">
            <button class="cartbtn" @click="removevare(key)"> X </button>
          </td>
        </tr>
        <div class="cartend">
          <router-link to="/Checkout">
            <button>Check out</button>
          </router-link>
            Total Price: {{calculatetotal()}} DKK
        </div>
      </tbody>
    </div>
  </div>
</template>

<script>
const WaresURL = 'https://salgshjemmesiderestservice.azurewebsites.net/api/Wares'
// @ is an alias to /src

export default {
  name: 'KurvView',
  props: ['addvare', 'cart', 'removevare', 'dropdownvalue', 'dropdown'],
  data () {
    return {
      quantity: 0,
      inventory: 0,
      TotalPriceValue: 0,
      total: 0
    }
  },
  methods: {
    findprice (name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.price
    },
    async getWare () {
      const response = await fetch(WaresURL)
      const data = await response.json()
      console.log(data)
      this.inventory = data
    },
    calculatetotal () {
      const total = Object.entries(this.cart).reduce((acc, curr, index) => {
        console.log(curr[2])
        return acc + (curr[1] * this.findprice(curr[0]))
      }, 0)
      return total
    }
  },
  computed: {
    totalvalue () {
      return this.total
    }
  },
  created: function () {
    console.log(this.inventory)
    setTimeout(() => {
      this.getWare()
    }, 500)
  }
}
</script>
