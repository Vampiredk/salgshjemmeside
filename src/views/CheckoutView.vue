<template>
    <div class="CheckoutBox">
        <div class="CheckoutTitle">
            Din Order
        </div>
        <div class="cartbody">
            <tbody>
                <tr v-for="(quantity, key, i) in cart" :key="i">
                    <td class="cartname"> {{ key }}</td>
                    <td class="cartname"> {{ quantity }} Stk.</td>
                    <td class="cartname"> {{ findprice(key, quantity) }} $</td>
                </tr>
            </tbody>
        </div>
        <div>
            Total Price: {{calculatetotal()}}
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
        console.log(curr[2])
        return acc + (curr[1] * this.findprice(curr[0]))
      }, 0)
      return total
    },
    async getWare () {
      const response = await fetch(WaresURL)
      const data = await response.json()
      console.log(data)
      this.inventory = data
    }
  },
  computed: {
    Updatewarer () {
      return { name: this.inName, price: this.inPrice, stock: this.inStock, id: this.UpdateID }
    },
    UpdateID () {
      return this.UpID
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
