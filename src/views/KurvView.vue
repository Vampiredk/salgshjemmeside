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
          <td class="cartname"> {{ findprice(key) }}</td>
          <td class="cartname">
            <button class="cartbtn" @click="removevare(i)"> X </button>
          </td>
        </tr>
      </tbody>
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
    findprice (name) {
      console.log(name)
      if (name !== undefined) {
        const product = this.vare.find((p) => {
          return p.name === name
        })
        return product.price
      }
    }
  }
}
</script>
