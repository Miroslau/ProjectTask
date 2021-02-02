<template>
  <div>
    <h2>Поиск</h2>
    <input
      type="text"
      v-model="inputStr"
      v-bind:placeholder="myPlaceholder"
      required
    />
    <ul>
          <li v-for="family of filtredPeoples" :key="family.key">
            <div class="search_container">
              <span>{{ family.firstName }}</span>
              <span>{{ family.lastName }}</span>
            </div>
          </li>
        </ul>
  </div>
</template>

<script>
export default {
  created() {
      this.child = this.node.children.map(i => i)
      this.list = this.child.map(people => people.children);
      this.listPeople = this.list.flat();
  },

  data() {
    return {
      list: [],
      inputStr: "",
      myPlaceholder: "Марина Васильевна",
      child: [],
      listPeople: []
    };
  },

  props: {
    node: Object,
  },

  computed: {
    filtredPeoples() {
        if (this.inputStr) {
            return this.listPeople.filter(people => {
                let firstName = people.firstName.includes(this.inputStr);
                let lastName = people.lastName.includes(this.inputStr);
                return firstName || lastName;
            });
        }
        return this.listPeople;
    },
  },
};
</script>

<style scoped>
input {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}

ul {
  list-style: none;
}

.search_container {
  border: 1px solid black;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}

.search_container > span + span {
  display: inline-block;
  margin-left: 5px;
}
</style>