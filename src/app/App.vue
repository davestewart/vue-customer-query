<template>
  <div id="app">

    <div class="container">
      <h1 class="is-size-1">Customer Query Application</h1>

      <div class="level">
        <ui-button @click="modal=true">Add new query</ui-button>
      </div>

      <query-list/>

      <ui-modal :active="modal" @close="modal = false">
        <query-form  @close="modal = false"/>
      </ui-modal>

    </div>

  </div>
</template>

<script>

import QueryList from './components/QueryList'
import QueryForm from './components/QueryForm'

export default {
  data () {
    return {
      modal: false
    }
  },

  components: {
    QueryList,
    QueryForm
  }

}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 2rem;
  }
</style>
