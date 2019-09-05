<template>
  <p v-if="messages.length">
    <ul>
      <li 
        v-for="(message, index) in messages"
        :key="index"
        :class="`pure-alert ${cssClass}`"
      >
        {{ message }}
      </li>
    </ul>
  </p>
</template>

<script>
  export default {
    name: 'BaseMessages',
    props: {
      messages: {
        type: Array,
        default: () => []
      },
      cssClass: {
        type: String,
        default: () => ''
      }
    }
  }
</script>

<style scoped>
  ul {
    padding-left: 0;
  }
  ul li {
    list-style: none;
  }
</style>