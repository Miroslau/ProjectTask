<template>
  <div id="app">
    <h1>Генеалогическое дерево VUE</h1>
    <hr/>
    <FamilyAdd
      @add-family="addFamily"
    />
    <hr/>
    <TreeFamily
     :node="root"
     @onClick="nodeWasClicked"
     />
     <hr/>
     <SearchFamily
     :node="root"
    />
  </div>
</template>

<script>
import TreeFamily from './components/TreeFamily.vue'
import FamilyAdd from './components/FamilyAdd.vue'
import SearchFamily from './components/SearchFamily.vue'
import root from './root.json'

export default {
  name: 'App',

  data() {
    return {
      root,
      myPlaceholder: 'Семья Васильевых',
      myName: ''
    }
  },

  methods: {
    nodeWasClicked(node) {
      console.log('we are clicked');
    },

    addFamily(family) {
      this.root.children.push(family);
    }
  },

  computed: {
  },

  components: {
    TreeFamily,
    FamilyAdd,
    SearchFamily
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
