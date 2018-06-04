export default {
  props: {
    label: String,
    value: String,
    error: String
  },

  computed: {
    input: {
      get () {
        return this.value
      },

      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
