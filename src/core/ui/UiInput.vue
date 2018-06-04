<template>

  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <textarea v-if="type === 'textarea'"
                :name="name"
                class="textarea"
                :class="{'is-danger': error}"
                v-model.trim="input"
                v-bind="$attrs"
      ></textarea>
      <input v-else
             :type="type"
             :name="name"
             class="input"
             :class="{'is-danger': error}"
             v-model.trim="input"
             v-bind="$attrs"
      >
    </div>
    <p v-if="error" class="help is-danger">{{ error }}</p>
  </div>

</template>

<script>
import field from '../mixins/field'

export default {
  extends: field,
  props: {
    type: {
      type: String,
      default: 'text'
    }
  }
}

</script>

<style lang="scss">

</style>
