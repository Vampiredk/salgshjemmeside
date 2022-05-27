<template>
  <head>

  </head>
  <body>
    <div class="home">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div v-for="product in inventory.slice(0,4)" :key="product.id" class="card">
        <div class="cardtitle">
          {{ product.name }}
        </div>
        <div class="cardbody">
          <div class="cardDescription">
            NPM RUN SERVE
          </div>
          <div class="cardInfo">
            Price: {{ product.price}}<br>
            Stock: {{ product.stock}}
          </div>
        </div>
        <div class="cardInteraction">
          <div class="cardquntity">
            Quantity:
            <input type="number" v-model="product.quantity" min="0" max="100" step="1">
          </div>
          <div class="cardbtnPos">
            <button class="cardbtn" @click="addvare(product.name, product.quantity)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </body>

</template>

<script>
import vare from '../Vare.json'
// @ is an alias to /src

export default {

  name: 'HomeView',
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
    console.log(this.inventory)
  }
}
</script>
