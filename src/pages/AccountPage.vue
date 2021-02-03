<template>
  <section class="section">
    <account-helper>
      <h1 class="title" slot="title">Профильная страница</h1>
      <h2 slot="firstName"> {{family.firstName}}</h2>
      <h2 slot="lastName"> {{family.lastName}}</h2>
      <h2 slot="born"> {{family.born}}</h2>
      <h2 slot="died"> {{family.died}}</h2>
      <h2 slot="description"> {{family.description}}</h2>
    </account-helper>
  </section>
</template>

<script>
import AccountHelper from "../AccountHelper/AccountHelper.vue";

export default {
  created() {
    console.log(this.family);
  },

  props: {
    family: Object
  },

  components: {
    AccountHelper
  },
};
</script>

<style scoped>
.title {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 44px;
  color: #2c2738;
}

h2 {
    font-size: 15px;
}

@media(min-width: 320px) and (max-width: 767px) {
  .title {
    font-size: 20px;
  }
}
</style>