<template>

  <div class="query-form card">
    <div class="card-content">

      <h2 class="title">Have a query?</h2>
      <h3 class="subtitle">Fill out your details below and we'll be in touch.</h3>

      <div class="notification is-danger" v-if="message">
        {{ message }}
      </div>

      <form class="form" action="" @submit.prevent="validate">
        <ui-input label="First Name"
                  name="firstName"
                  v-model="values.firstName"
                  v-validate="'required'"
                  :error="getError('firstName')"
        />
        <ui-input label="Last Name"
                  name="lastName"
                  v-model="values.lastName"
                  v-validate="'required'"
                  :error="getError('lastName')"
        />
        <ui-input label="Email Address"
                  name="email"
                  v-model="values.email"
                  v-validate="'required|email'"
                  :error="getError('email')"
        />
        <ui-input label="Question (optional)"
                  v-model="values.text"
                  multiline="true"
        />
        <div class="field is-grouped">
          <ui-button :disabled="submitting" @click="validate">Submit</ui-button>
          <ui-button :disabled="submitting" @click="close" type="text">Cancel</ui-button>
        </div>
      </form>

    </div>
  </div>

</template>

<script>
/**
   * @event close the modal was closed
   */
export default {

  data,

  methods: {
    validate () {
      this.$validator
        .validate()
        .then(state => {
          if (state) {
            return this.submit()
          }
          this.message = 'Your form has errors. Please correct then, then submit again.'
        })
    },

    submit () {
      this.submitting = true
      this.$store
        .dispatch('queries/addQuery', Object.assign({}, this.values))
        .then(this.close)
        .catch(() => {
          this.message = 'There was a problem submitting the form. Please try again!'
          this.submitting = false
        })
    },

    reset () {
      this.$validator.reset()
      Object.assign(this, data())
    },

    close () {
      this.reset()
      this.$emit('close')
    },

    getError (name) {
      return (this.errors.first(name) || '').replace(/The .+ field/, 'This field')
    },

  }
}

function data () {
  return {
    values: {
      firstName: '',
      lastName: '',
      email: '',
      text: ''
    },

    submitting: false,

    message: ''
  }
}

</script>

<style lang="scss">
</style>
