<template>
  <head>

  </head>
  <body>
    <div class="home">
      <div v-for="product in inventory" :key="product.id" class="card">
        <div class="cardtitle">
          {{ product.name }}
        </div>
        <div class="cardbody">
          <div class="cardDescription">
            Type: {{ product.type}} <br>
            {{ product.description}}
          </div>
          <div class="cardInfo">
            Price: {{ product.price}} DKK<br>
            Stock: {{ product.stock}}
          </div>
        </div>
        <div class="cardInteraction">
          <div class="cardquntity">
            Quantity:
            <input type="number" v-model="product.quantity" min="1" max="100" step="1">
          </div>
          <div class="cardbtnPos" v-if="product.stock > 0">
            <button class="cardbtn" @click="addvare(product.name, product.quantity)">Add to Cart</button>
          </div>
          <div class="cardbtnPos" v-else-if="product.stock === 0">
            <button class="cardbtn">Out of Stock</button>
          </div>
        </div>
      </div>
    </div>
  </body>

</template>

<script>
// import vare from '../Vare.json'
const WaresURL = 'https://salgshjemmesiderestservice.azurewebsites.net/api/Wares'
// @ is an alias to /src

export default {

  name: 'HomeView',
  props: ['addvare', 'cart', 'dropdownvalue', 'dropdown'],
  data () {
    return {
      quantity: 0,
      inventory: []
    }
  },
  methods: {
    async getWare () {
      const response = await fetch(WaresURL)
      const data = await response.json()
      console.log(data)
      this.inventory = data
      console.log(this.inventory.length)
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
