<template>
  <div>
    <h2>Home</h2>
    <nav>
      <router-link
        to="/"
        active-class="link--active"
        exact
        class="link"
      >Home</router-link>
      <router-link
        to="/users"
        active-class="link--active"
        exact
        class="link"
      >Users</router-link>
    </nav>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment', 2);
    },
    decrement() {
      this.$store.commit('decrement', 2);
    }
  }
}
</script>

<style scoped>
  .link {
    margin-right: 10px;
  }
  .link--active {
    font-size: 20px;
  }
</style>
