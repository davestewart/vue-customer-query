<template>

  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <textarea v-if="multiline"
                class="textarea"
                :class="{'is-danger': error}"
                v-model.trim="input"
                v-bind="$attrs"
      ></textarea>
      <input v-else
             type="text"
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
    multiline: true
  }
}

</script>

<style lang="scss">

</style>
