<template>
  <div class="section__home">
    <h1>Генеалогическое дерево VUE</h1>
    <hr />
    <FamilyAdd 
      @add-family="addFamily" 
    />
    <hr />
    <div class="searchFamily">
        <router-link :to="{name: 'search'}">Поиск родителя</router-link>
    </div>
    <TreeFamily 
      :node="$myRoot" 
      @onClick="nodeWasClicked" 
    />
    <!--<hr />
    <SearchFamily 
     :node="root" 
    />-->
  </div>
</template>

<script>
import TreeFamily from "./components/TreeFamily.vue";
import FamilyAdd from "./components/FamilyAdd.vue";
import SearchFamily from "./components/SearchFamily.vue";
import root from "./root.json";

export default {
  name: "App",

  created() {
    console.log(this.$myRoot)
  },

  data() {
    return {
      root,
      myPlaceholder: "Семья Васильевых",
      myName: "",
    };
  },

  methods: {
    nodeWasClicked(node) {
      console.log("we are clicked");
    },

    addFamily(family) {
      this.root.children.push(family);
    },
  },

  computed: {},

  components: {
    TreeFamily,
    FamilyAdd,
    SearchFamily,
  },
};
</script>