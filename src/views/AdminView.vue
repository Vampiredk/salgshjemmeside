<template>
  <head>

  </head>
  <body>
    <div class="home">
      <div class="card">
        <div class="cardtitle">
          <input v-model="inName" placeholder="Navn">
        </div>
        <div class="cardbody">
          <div class="cardDescription">
            <input v-model="inType" placeholder="Type">
            <br>
            <input v-model="inDesc" placeholder="Beskrivelse">
          </div>
          <div class="cardInfo">
            <input v-model="inPrice" type="number" min="0" placeholder="Pris">
            <input v-model="inStock" type="number" min="0" placeholder="Lager">
          </div>
        </div>
        <div class="cardInteraction">
          <div class="cardquntity">
            <button class="cardbtn" @click="addwarer()">Tilføj Vare</button>
          </div>
          <div class="cardbtnPos">
            <button class="cardbtn" @click="updateWare(UpdateID)">Update</button>
            <div>
              <input v-model="UpID" type="number" min="0" placeholder="ID" class="cardinput">
            </div>
          </div>
        </div>
      </div>
      <div v-for="product in inventory" :key="product.Vare_id" class="card">
        <div class="cardtitle">
           {{ product.navn }} #{{ product.Vare_id }}
        </div>
        <div class="cardbody">
          <div class="cardDescription">
            Type: {{ product.type}} <br>
            {{ product.beskrivelse}}
          </div>
          <div class="cardInfo">
            Pris: {{ product.pris}}<br>
            Lager: {{ product.lager}}
          </div>
        </div>
        <div class="cardInteraction">
          <div class="cardquntity">
            <button class="cardbtn" @click="removeWare(product.Vare_id)">Fjern</button>
          </div>
        </div>
      </div>
    </div>
  </body>

</template>

<script>
// import vare from '../Vare.json'
import axios from 'axios'
const WaresURL = 'https://varedbrest.azurewebsites.net/api/vare'
// @ is an alias to /src

export default {

  name: 'AdminView',
  props: ['addvare', 'cart', 'dropdownvalue', 'dropdown'],
  data () {
    return {
      quantity: 0,
      inventory: 0,
      inName: '',
      alerttext: ''
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
      if (this.inName.length < 45) {
        try {
          const response = await axios.post(WaresURL, this.Warer)
          this.adddata = 'response ' + response.status + ' ' + response.statusText
        } catch (ex) {
          alert(ex.message)
        }
        setTimeout(() => {
          this.getWare()
        }, 500)
      } else {
        this.alerttext += 'Navnet er for langt (maks 45 tegn)'
        alert(this.alerttext)
        this.alerttext = ''
      }
    },
    async updateWare (id) {
      try {
        const response = await axios.put(WaresURL + '/' + id, this.Updatewarer)
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
      return { navn: this.inName, type: this.inType, beskrivelse: this.inDesc, pris: this.inPrice, lager: this.inStock, kunde_id: this.UpdateID }
    },
    Updatewarer () {
      return { navn: this.inName, type: this.inType, beskrivelse: this.inDesc, pris: this.inPrice, lager: this.inStock, kunde_id: this.UpdateID }
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
