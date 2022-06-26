<template>
  <head>

  </head>
  <body>
    <div class="home">
      <div class="card">
        <div class="cardtitle">
          <input v-model="inName" placeholder="Add Name">
        </div>
        <div class="cardbody">
          <div class="cardDescription">
            <input v-model="inType" placeholder="Type">
            <br>
            <input v-model="inDesc" placeholder="Descript">
          </div>
          <div class="cardInfo">
            <input v-model="inPrice" type="number" min="0" placeholder="Price">
            <input v-model="inStock" type="number" min="0" placeholder="Stock">
          </div>
        </div>
        <div class="cardInteraction">
          <div class="cardquntity">
            <button class="cardbtn" @click="addwarer()">Add Ware</button>
          </div>
          <div class="cardbtnPos">
            <button class="cardbtn" @click="updateWare(UpdateID)">Update</button>
            <div>
              <input v-model="UpID" type="number" min="0" placeholder="ID" class="cardinput">
            </div>
          </div>
        </div>
      </div>
      <div v-for="product in inventory" :key="product.id" class="card">
        <div class="cardtitle">
           {{ product.name }} #{{ product.id }}
        </div>
        <div class="cardbody">
          <div class="cardDescription">
            Type: {{ product.type}} <br>
            {{ product.description}}
          </div>
          <div class="cardInfo">
            Price: {{ product.price}}<br>
            Stock: {{ product.stock}}
          </div>
        </div>
        <div class="cardInteraction">
          <div class="cardquntity">
            <button class="cardbtn" @click="removeWare(product.id)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </body>

</template>

<script>
// import vare from '../Vare.json'
import axios from 'axios'
const WaresURL = 'https://salgshjemmesiderestservice.azurewebsites.net/api/Wares'
// @ is an alias to /src

export default {

  name: 'AdminView',
  props: ['addvare', 'cart', 'dropdownvalue', 'dropdown'],
  data () {
    return {
      quantity: 0,
      inventory: 0,
      inName: ''
    }
  },
  methods: {
    async getWare () {
      const response = await fetch(WaresURL)
      const data = await response.json()
      console.log(data)
      this.inventory = data
    },
    async removeWare (id) {
      fetch(WaresURL + '/' + id, { method: 'DELETE' })
      setTimeout(() => {
        this.getWare()
      }, 500)
    },
    async addwarer () {
      try {
        const response = await axios.post(WaresURL, this.Warer)
        this.adddata = 'response ' + response.status + ' ' + response.statusText
      } catch (ex) {
        alert(ex.message)
      }
      setTimeout(() => {
        this.getWare()
      }, 500)
    },
    async updateWare (id) {
      try {
        const response = await axios.put(WaresURL + '/' + id, this.Updatewarer)
        console.log(this.updateWare)
        this.adddata = 'response ' + response.status + ' ' + response.statusText
        this.UpID = 0
      } catch (ex) {
        alert(ex.message)
      }
      setTimeout(() => {
        this.getWare()
      }, 500)
    }
  },
  computed: {
    Warer () {
      return { name: this.inName, type: this.inType, description: this.inDesc, price: this.inPrice, stock: this.inStock, id: 5 }
    },
    Updatewarer () {
      return { name: this.inName, type: this.inType, description: this.inDesc, price: this.inPrice, stock: this.inStock, id: this.UpdateID }
    },
    UpdateID () {
      return this.UpID
    }
  },
  created: function () {
    console.log(this.inventory)
    this.getWare()
  }
}
</script>
