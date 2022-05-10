<template>
  <nav>
    <div id="topbar">
      <div id="topbarcolour">
      </div>
      <div class="topbarcontent">
        <div class="topbarcontentpos">
          <router-link to="/">
            <button class="topbarbtn">Home</button>
          </router-link>
          <router-link to="/about">
            <button class="topbarbtn">about</button>
          </router-link>
          <div class="topbarcontentright">
            <button class="topbarbtn">kurv</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style>
</style>
