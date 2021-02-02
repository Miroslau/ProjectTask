<template>
  <div>
    <h1>Добавление новой семьи</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="name" v-bind:placeholder="myPlaceholder" required />
      <h2>Мать</h2>
      <input type="text" v-model="firstNameMother" v-bind:placeholder="motherNamePlaceholder" required />
      <input type="text" v-model="lastNameMother" v-bind:placeholder="motherLastnamePlaceholder" required />
      <h2>Отец</h2>
      <input type="text" v-model="firstNameFather" v-bind:placeholder="fatherNamePlaceholder" required />
      <input type="text" v-model="lastNameFather" v-bind:placeholder="fatherLastnamePlaceholder" required />
      <button class="button" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            myPlaceholder: 'Семья Васильевых',
            motherNamePlaceholder: 'Марина',
            motherLastnamePlaceholder: 'Васильевна',
            fatherNamePlaceholder: 'Иван',
            fatherLastnamePlaceholder: 'Иванов',
            name: '',
            firstNameMother: '',
            lastNameMother: '',
            firstNameFather: '',
            lastNameFather: '',
            sex: ''
        };
    },

    methods: {
      onSubmit() {
        if(this.name.trim()) {
          const newRoot = {
            name: this.name,
            children: [
              {
                firstName: this.firstNameMother,
                lastName: this.lastNameMother,
                born: Math.floor(Math.random() * (2000 - 1000) + 1000),
                died: Math.floor(Math.random() * (2000 - 1000) + 1000),
                description: 'description',
                humanUId: 'VasielvevnaOne',
                sex: 2
              },
              {
                firstName: this.firstNameFather,
                lastName: this.lastNameFather,
                born: Math.floor(Math.random() * (2000 - 1000) + 1000),
                died: Math.floor(Math.random() * (2000 - 1000) + 1000),
                description: 'description',
                humanUId: 'VasielvevOne',
                sex: 1
              }
            ]
          };

          this.$emit("add-family", newRoot);
        }
      }
    }
};
</script>

<style scoped>
h1 {
  font-size: 15px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  max-width: 400px;
  width: 100%;
  margin-top: 10px;
}

.button {
  max-width: 408px;
  width: 100%;
  margin-top: 10px;
}

.select {
  max-width: 408px;
  width: 100%;
}
</style>