<template>
  <div v-for="product in inventory" :key="product.id" class="card">
        <div class="cardtitle">
          {{ product.name }}
        </div>
        <div class="cardbody">
          <div class="cardDescription">
            Beksrivelse af vare
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
</template>

<script>
const WaresURL = 'https://salgshjemmesiderestservice.azurewebsites.net/api/Wares'
// @ is an alias to /src

export default {
  name: 'KurvView',
  props: ['dropdown'],
  data () {
    return {
      inventory: 0
    }
  },
  methods: {
    async getWare (id) {
      const response = await fetch(WaresURL + '/' + id)
      const data = await response.json()
      console.log(data)
      this.inventory = data
    }
  },
  created: function () {
    console.log(this.dropdown)
    this.getWare(this.dropdown)
  }
}
</script>
