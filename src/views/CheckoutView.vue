<template>
    <div class="CheckoutBox">
        <div class="CheckoutTitle">
            Din Order
        </div>
        <div class="checkoutbody">
          <div class="cartbody">
              <tbody>
                  <tr v-for="(quantity, key, i) in cart" :key="i">
                      <td class="cartname"> {{ key }}</td>
                      <td class="cartname"> {{ quantity }} Stk.</td>
                      <td class="cartname"> {{ findprice(key) }} DKK</td>
                  </tr>
              </tbody>
          </div>
          <div class="checkoutend">
              Total Price: {{calculatetotal()}}<br>
              <button>Luk ordre</button><button>Køb Ordre</button>
          </div>
        </div>
    </div>
</template>

<script>
const WaresURL = 'https://restservicesalgside.azurewebsites.net/api/wares'

// @ is an alias to /src

export default {
  name: 'KurvView',
  props: ['addvare', 'cart', 'removevare', 'dropdownvalue', 'dropdown'],
  data () {
    return {
      quantity: 0,
      inventory: 0,
      TotalPriceValue: 0
    }
  },
  methods: {
    findprice (name) {
      const product = this.inventory.find((p) => {
        return p.name === name
      })
      return product.price
    },
    calculatetotal () {
      const total = Object.entries(this.cart).reduce((acc, curr, index) => {
        return acc + (curr[1] * this.findprice(curr[0]))
      }, 0)
      return total
      /// Navn: antal
    },
    async getWare () {
      const response = await fetch(WaresURL)
      const data = await response.json()
      console.log(data)
      this.inventory = data
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
