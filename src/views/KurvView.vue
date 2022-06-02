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
            <button class="cartbtn" @click="removevare(i)"> X </button>
          </td>
        </tr>
      </tbody>
      <div class="cartend">
        <tr>
          <td> total price:</td>
          <td> 342 kr</td>
          <td>
            <button class="cardbtn">checkout</button>
          </td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
import inventory from '../Vare.json'
// @ is an alias to /src

export default {
  name: 'KurvView',
  props: ['addvare', 'cart', 'removevare'],
  data () {
    return {
      quantity: 0,
      inventory: inventory
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
    }
  }
}
</script>
