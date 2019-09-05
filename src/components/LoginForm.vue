<template>
  <form
    class="pure-form pure-form-stacked pure-u-1"
    novalidate
    @submit="handleSubmit"
  >
    <LoginFormMessages
      :messages="messages"
      :css-class="cssClass"
    />
    <p v-if="isFetching">
      {{ isFetching }}
      Loading...
    </p>
    <LoginFormControls
      v-model="payload"
    />
    <div class="pure-controls">
      <button
        type="submit"
        class="pure-button pure-button-primary"
      >
        Login
      </button>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LoginFormControls from '@/components/LoginFormControls.vue';
import LoginFormMessages from '@/components/LoginFormMessages.vue';

export default {
  name: 'LoginForm',
  components: {
    LoginFormControls,
    LoginFormMessages
  },
  data () {
    return {
      payload: {},
    }
  },
  computed: mapState('account', ['isFetching', 'messages', 'cssClass']),
  methods: {
    ...mapActions('account', {
      login: 'loginRequest',
      validateLoginFields: 'validateLoginFields'
    }),
    async handleSubmit(event) {
      event.preventDefault();
      this.validateLoginFields(this.payload);
      if (this.messages.length === 0) {
        this.login({
          payload: this.payload,
          router: this.$router
        });
      }
    },
  }
}
</script>

<style scoped>
  form {
    margin: 45px 0;
  }
</style>