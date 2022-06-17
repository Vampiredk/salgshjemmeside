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
          <td class="cartname"> {{ quantity }}</td>
          <td class="cartname"> {{ findprice(key, quantity) }}</td>
          <td class="cartname">
            <button class="cartbtn" @click="removevare(key)"> X </button>
          </td>
        </tr>
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
      inventory: 0
    }
  },
  methods: {
    findprice (name, quantity) {
      console.log(name)
      console.log(quantity)
      if (name !== undefined) {
        const test = this.inventory.find(Element => Element.name === name)
        const totalprice = test.price * quantity
        return totalprice
      }
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
