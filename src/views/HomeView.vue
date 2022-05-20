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
      <div class="card">
        <div class="cardtitle">
          Vare 1
        </div>
        <div class="cardbody">
          <div class="cardDescription">
            NPM RUN SERVE
          </div>
          <div class="cardInfo">
            Price: 42<br>
            Stock: 24
          </div>
        </div>
        <div class="cardInteraction">
          <div class="cardquntity">
            Quantity:
            <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="0">
          </div>
          <div class="cardbtnPos">
            <button class="cardbtn">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="cardtitle">
          Vare 2
        </div>
        <div class="cardbody">
          <div class="cardDescription">
            test
          </div>
          <div class="cardInfo">
            Price: 42<br>
            Stock: 24
          </div>
        </div>
        <div class="cardInteraction">
          <div class="cardquntity">
            Quantity:
            <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="0">
          </div>
          <div class="cardbtnPos">
            <button class="cardbtn">Add to Cart</button>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="cardtitle">
          Vare 3
        </div>
        <div class="cardbody">
          <div class="cardDescription">
            test
          </div>
          <div class="cardInfo">
            Price: 42<br>
            Stock: 24
          </div>
        </div>
        <div class="cardInteraction">
          <div class="cardquntity">
            Quantity:
            <input type="number" id="quantity" name="quantity" min="0" max="100" step="1" value="0">
          </div>
          <div class="cardbtnPos">
            <button class="cardbtn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
