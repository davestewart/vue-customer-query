<template>

  <div class="queries">

    <table class="table is-fullwidth" v-if="items.length">
      <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Query</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ `${item.firstName} ${item.lastName}` }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.text }}</td>
        </tr>
      </tbody>
    </table>

    <div v-else>There are no queries</div>

  </div>

</template>

<script>
export default {
  computed: {
    items () {
      return this.$store.state.queries.items.slice().reverse()
    }
  }
}
</script>

<style scoped>

</style>
