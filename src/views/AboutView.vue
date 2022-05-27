<template>
  <div class="about">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AboutView',
  props: ['inventory', 'addvare', 'cart'],
  methods: {
  },
  created: function () {
    console.log(this.cart)
  }
}
</script>
