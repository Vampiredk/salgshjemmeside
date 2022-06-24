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
          <td class="cartname"> {{ findprice(key, quantity) }} $</td>
          <td class="cartname">
            <button class="cartbtn" @click="removevare(key)"> X </button>
          </td>
        </tr>
        <div class="cartend">
          <router-link to="/Checkout">
            <button>Check out</button>
          </router-link>
            {{ this.totalvalue}}
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
      total: 0
    }
  },
  methods: {
    findprice (name, quantity) {
      console.log(name)
      console.log(quantity)
      if (name !== undefined) {
        const test = this.inventory.find(Element => Element.name === name)
        const totalprice = test.price * quantity
        this.total = this.TotalPriceValue + totalprice
        console.log(this.total)
        return totalprice
      }
    },
    async getWare () {
      const response = await fetch(WaresURL)
      const data = await response.json()
      console.log(data)
      this.inventory = data
    },
    totalPrice () {
      for (const Element of this.cart) {
        this.total = this.total + Element.price
      }
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
      this.totalPrice()
    }, 500)
  }
}
</script>
