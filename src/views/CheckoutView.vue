<template>
    <div class="CheckoutBox">
        <div class="CheckoutTitle">
            Din Order
        </div>
        <div class="checkoutbody">
          <div class="cartbody">
              <tbody>
                  <tr v-for="(quantity, key, i) in cart" :key="i">
                      <td class="cartname"> {{ key }}</td>
                      <td class="cartname"> {{ quantity }} Stk.</td>
                      <td class="cartname"> {{ findprice(key) }} DKK</td>
                  </tr>
              </tbody>
              Kreditkort<br>
              <input placeholder="Kreditkort"><br>
              Kreditkort Nummer<br>
              <input placeholder="Kreditkort nummer"><br>
              Sikkerheds Nummer<br>
              <input placeholder="Sikkerheds Nummer"><br>
              Udløbsdato<br>
              <input placeholder="Udløbsdato"><br>
              Navn<br>
              <input v-model="InNavn" placeholder="Navn"><br>
              Telefonnumer<br>
              <input v-model="InTele" placeholder="Telefon"><br>
              Addresse<br>
              <input v-model="inAddr" placeholder="Addresse"><br>
              Postnummer<br>
              <input v-model="inPost" placeholder="Postnummer"><br>
          </div>
              Total Price: {{calculatetotal()}}<br>
              <button>Luk ordre</button>
              <button @click="addKunde()">Køb Ordre</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
const kundeURL = 'https://varedbrest.azurewebsites.net/api/Kunde'
const WaresURL = 'https://varedbrest.azurewebsites.net/api/vare'

// @ is an alias to /src

export default {
  name: 'KurvView',
  props: ['addvare', 'cart', 'removevare', 'dropdownvalue', 'dropdown'],
  data () {
    return {
      quantity: 0,
      inventory: 0,
      TotalPriceValue: 0,
      Kunder: [],
      Ordre: [],
      Ordre_vare: []
    }
  },
  methods: {
    findprice (navn) {
      const product = this.inventory.find((p) => {
        return p.navn === navn
      })
      return product.pris
    },
    calculatetotal () {
      const total = Object.entries(this.cart).reduce((acc, curr, index) => {
        return acc + (curr[1] * this.findprice(curr[0]))
      }, 0)
      return total
      /// Navn: antal
    },
    async getWare () {
      const response = await fetch(WaresURL)
      const data = await response.json()
      console.log(data)
      this.inventory = data
    },
    async getKunde () {
      const response = await fetch(kundeURL)
      const data = await response.json()
      console.log(data)
      this.Kunder = data
    },
    async addKunde () {
      try {
        const response = await axios.post(kundeURL, this.kunde, '27 mARTS')
        this.adddata = 'response ' + response.status + ' ' + response.statusText
      } catch (ex) {
        alert(ex.message)
      }
    }
  },
  created: function () {
    console.log(this.inventory)
    setTimeout(() => {
      this.getWare()
      this.getKunde()
    }, 500)
  },
  computed: {
    kunde () {
      return { navn: this.InNavn, TelefonNummer: this.InTele, addresse: this.inAddr, Postnummer: this.inPost }
    }
  }
}
</script>
