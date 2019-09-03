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
import { Routes } from '@/constants/routes';

export default {
  name: 'LoginForm',
  components: {
    LoginFormControls,
    LoginFormMessages
  },
  data () {
    return {
      payload: {},
      messages: [],
      errorMessages: {
        emailRequired: 'Email is required',
        passwordRequired: 'Password is required'
      },
      resetMessages: () => {
        this.messages = [];
        this.cssClass = '';
      },
      cssClass: '',
      Routes,
      accountStoreSubscription: null
    }
  },
  computed: mapState('account', ['isFetching']),
  mounted() {
    this.accountStoreSubscription = this.$store
      .subscribe(({ type }, { account }) => {
      switch(type) {
        case 'account/setCurrentUser': {
          this.cssClass = 'pure-alert-success';
          this.messages.push('Logged In Successfully!')
          setTimeout(() => {
            this.$router.push(this.Routes.LOCATIONS)
          }, 2000)
          break;
        }
        case 'account/setErrors': {
          if (account.error) {
            this.cssClass = 'pure-alert-error';
            this.messages.push('Login Request Failed');
          }
          break;
        }
        default: return;
      }
    });
  },
  destroyed() {
    // cleanup to prevent duplicate subscriptions to the store
    this.accountStoreSubscription();
  },
  methods: {
    ...mapActions('account', {
      login: 'loginRequest'
    }),
    async handleSubmit(event) {
      event.preventDefault();
      this.resetMessages();
      if (!this.payload.email) {
        this.cssClass = 'pure-alert-error';
        this.messages.push(this.errorMessages.emailRequired);
      }
      if (!this.payload.password) {
        this.cssClass = 'pure-alert-error';
        this.messages.push(this.errorMessages.passwordRequired);
      }
      if (this.messages.length === 0) {
        this.resetMessages();
        this.login(this.payload);
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