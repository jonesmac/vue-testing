<template>
  <div class="locations">
    <h1>Welcome {{ usersName }}</h1>
    <p
      v-if="usersName === ''"
      class="pure-alert-error"
    >
      User not found.  Please <router-link to="/login">
        Login
      </router-link>
    </p>
    <LocationsDashboard :locations="myLocations" />
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
      ...mapState('locations', ['myLocations']),
      usersName() {
        if (this.currentUser.id) {
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
            return ''
          }
        }
      }
    },
    mounted() {
      this.getLocations();
    },
    methods: {
      ...mapActions({
        setCurrentUser: 'account/setCurrentUser',
        getLocations: 'locations/getLocations'
      })
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>