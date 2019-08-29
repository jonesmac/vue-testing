<template>
  <p v-if="errors.length">
    <ul class="errors">
      <li 
        v-for="(error, index) in errors"
        :key="index"
        class="error-message"
      >
        {{ error }}
      </li>
    </ul>
  </p>
</template>

<script>
  export default {
    name: 'LoginFormErrors',
    props: {
      errors: {
        type: Array,
        default: () => []
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>