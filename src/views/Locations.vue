<template>
  <div class="locations">
    <h1>Welcome {{ usersName }}</h1>
    <LocationsDashboard />
  </div>
</template>

<script>
  import LocationsDashboard from '@/components/LocationsDashboard';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Locations',
    components: { LocationsDashboard },
    computed: {
      ...mapState('account', ['currentUser']),
      usersName() {
        if (this.currentUser) {
          // Use user in state
          return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
        } else {
          // Use user from local storage
          let savedUser = localStorage.getItem('currentUser');
          if (savedUser) {
            savedUser = JSON.parse(savedUser);
            // put user in state
            this.setCurrentUser(savedUser);
            return `${savedUser.firstName} ${savedUser.lastName}`;
          } else {
            return 'No User Found'
          }
        }
      }
    },
    methods: {
      ...mapActions('account', {
        setCurrentUser: 'setCurrentUser'
      })
    }
  }
</script>

<style scoped>

</style>