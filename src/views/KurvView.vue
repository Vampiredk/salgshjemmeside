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
          <td class="cartname"> 242</td>
          <td class="cartname">
            <button class="cartbtn"> X </button>
          </td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
import vare from '../Vare.json'
// @ is an alias to /src

export default {
  name: 'KurvView',
  props: ['addvare', 'cart'],
  data () {
    return {
      quantity: 0,
      inventory: vare
    }
  },
  methods: {
  },
  created: function () {
    console.log(this.cart)
  }
}
</script>
