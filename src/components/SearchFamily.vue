<template>
  <section class="section__search">
    <div class="section__container">
      <h1>Поиск человека в семье</h1>
      <div class="main_info">
        <div>
          <div class="backHome">
            <button class="button-6">
              <router-link class="span" to="/">На главную</router-link>
            </button>
          </div>
        </div>
        <div class="search__block">
          <div class="form__group">
            <input
              type="text"
              name="name"
              v-model="inputStr"
              v-bind:placeholder="myPlaceholder"
              required
            />
          </div>
          <div class="table__data">
            <table class="table_dark">
              <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Ссылка на страницу</th>
              </tr>
              <tr v-for="family of filtredPeoples" :key="family.key">
                <td>{{ family.firstName }}</td>
                <td>{{ family.lastName }}</td>
                <td>
                  <router-link class="td_pointer" :to="{name: 'accountpageId', params: {id: family.humanUId, family: family}}">Подробнее</router-link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  created() {
    this.child = this.$myRoot.children.map((i) => i);
    this.list = this.child.map((people) => people.children);
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
  },

  computed: {
    filtredPeoples() {
      if (this.inputStr) {
        return this.listPeople.filter((people) => {
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
.section__search {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.section__container {
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.section__container > h1 {
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(249, 79, 212, 1) 48%,
    rgba(255, 255, 255, 1) 100%
  );
  color: white;
  font-size: 40px;
  animation: moution 1s linear;
}

@keyframes moution {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: translateY(-50px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes moutionHorilontal {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    transform: translateX(-50px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

.main_info {
  display: flex;
  justify-content: space-between;
}

.backHome {
  position: absolute;
  left: 0;
  width: 100px;
  height: 40px;
  animation: moutionHorilontal 1s linear;
}

.button-6 {
  background: transparent;
  border-width: 0;
  position: relative;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  transition: 0.3s;
}

.button-6 .span {
  width: 100px;
  text-decoration: none;
  display: block;
  position: relative;
  z-index: 3;
  background: #41294a;
  color: white;
  padding: 0 30px;
  line-height: 40px;
  transition: color 0.2s linear;
}

.button-6:before {
  content: "";
  position: absolute;
  width: calc(100% + 5px);
  height: calc(100% + 5px);
  left: -5px;
  top: -5px;
  background: #ff2c54;
  z-index: 1;
  transition: 0.4s ease-out;
}

.button-6:after {
  content: "";
  position: absolute;
  width: calc(100% + 5px);
  height: calc(100% + 5px);
  right: -5px;
  bottom: -5px;
  background: #41ebdf;
  transition: 0.4s ease-out 0.1s;
}

.button-6 .span:hover {
  color: #813baf;
}

.button-6:hover:before {
  transform: translate(5px, 5px);
}
.button-6:hover:after {
  transform: translate(-5px, -5px);
}

.search__block {
  max-width: 800px;
  width: 100%;
  padding-bottom: 50px;
}

@keyframes moutionHorilontalRight {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  50% {
    transform: translateX(50px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

.form__group input {
  width: 350px;
  height: 42px;
  padding-left: 15px;
  border-radius: 42px;
  border: 2px solid #324b4e;
  background: #f9f0da;
  outline: none;
  position: relative;
  animation: moutionHorilontalRight 1s linear;
}

.table__data {
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.table_dark {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  max-width: 640px;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  background: #252F48;
  margin: 10px;
  animation: moutionHorilontalRight 1s linear;
}

.table_dark th {
  color: #EDB749;
  border-bottom: 1px solid #37B5A5;
  padding: 12px 17px;
}

.table_dark td {
  color: #CAD4D6;
  border-bottom: 1px solid #37B5A5;
  border-right:1px solid #37B5A5;
  padding: 7px 17px;
}
.table_dark tr:last-child td {
  border-bottom: none;
}
.table_dark td:last-child {
  border-right: none;
}
.table_dark tr:hover td {
  text-decoration: underline;
}

.td_pointer {
  cursor: pointer;
  color: #CAD4D6;
  text-decoration: none;
}

@media(min-width: 320px) and (max-width: 767px) {
  .section__container {
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  .section__container h1 {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 25px;
  }

  .main_info {
    flex-direction: row;
    align-items: flex-start;
  }

  .backHome {
    left: 70px;
    top: 150px;
  }

  .form__group {
    margin-top: 100px;
  }
  
  .form__group input {
    width: 250px;
  }

  .table_dark {
    font-size: 12px;
  }
}
</style>