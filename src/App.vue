<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body,html,#app{
    padding: 0;
    margin: 0;
  }
  /*#app ::-webkit-scrollbar{*/
  /*  display:none;*/
  /*}*/
  #app{
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  }
</style>
