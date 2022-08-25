<template>
  <div v-for="product in inventory" :key="product.id" class="card">
    <div class="cardtitle">
      {{ product.navn }}
    </div>
    <div class="cardbody">
      <div class="cardDescription">
        Type: {{ product.type}} <br>
        {{ product.beskrivelse}}
      </div>
      <div class="cardInfo">
        Price: {{ product.pris}}<br>
        Stock: {{ product.lager}}
      </div>
    </div>
    <div class="cardInteraction">
      <div class="cardquntity">
        Quantity:
        <input type="number" v-model="product.quantity" min="1" max="100" step="1">
      </div>
      <div class="cardbtnPos">
        <button class="cardbtn" @click="addvare(product.navn, product.quantity)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
const WaresURL = 'https://varedbrest.azurewebsites.net/api/vare/type'
// @ is an alias to /src

export default {
  name: 'ProductView',
  props: ['dropdown', 'addvare', 'cart', 'dropdownvalue'],
  data () {
    return {
      inventory: []
    }
  },
  methods: {
    async getWare (id) {
      const newURL = WaresURL + '/' + id
      console.log(newURL)
      const response = await fetch(newURL)
      const data = await response.json()
      console.log(data)
      this.inventory = data
      console.log('length' + this.inventory.length)
    }
  },
  created: function () {
    console.log(this.dropdown)
    setTimeout(() => {
      this.getWare(this.dropdown)
    }, 500)
    console.log(this.inventory)
  }
}
</script>
