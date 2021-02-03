<template>
  <div class="account__helper">
    <header class="header">
      <div class="header__container">
        <slot name="title"></slot>
        <div class="header__navigation">
            <nav>
                <div class="backHome">
                    <button class="button-6">
                        <router-link class="span" to="/">На главную</router-link>
                    </button>
                </div>
                <div class="backHome">
                    <button class="button-6">
                        <router-link class="span" :to="{name: 'search'}">Поиск</router-link>
                    </button>
                </div>
            </nav>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="section__container">
        <div class="image_photo"></div>
        <div class="section__info">
          <h2>Персональные данные</h2>
          <div class="data">
              <p>
                  <span>Имя</span>
                  <slot name="firstName"></slot>
              </p>
              <p>
                  <span>Фамилия</span>
                  <slot name="lastName"></slot>
              </p>
          </div>
          <div class="data">
              <p>
                  <span>Год рождения</span>
                  <slot name="born"></slot>
              </p>
              <p>
                  <span>Год смерти</span>
                  <slot name="died"></slot>
              </p>
          </div>
          <div class="data">
              <p>
                  <span>Описание</span>
                  <slot name="description"></slot>
              </p>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
        <div class="footer__container"></div>
    </footer>
  </div>
</template>

<script>
import img from "../assets/avatar.png";
export default {
  created() {
  },
  data() {
    return {
      urlImg: img,
    };
  },

  props: {
      node: Object
  }
};
</script>

<style scoped>
.account__helper {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Header */

.header {
  width: 100%;
  position: relative;
  font-family: "Merriweather", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 50px;
}

.header__container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
}

.header__navigation {
    max-width: 500px;
    width: 100%;
}

.header__navigation > nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 25px;
}

.backHome {
    width: 100px;
    height: 40px;
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

/* Section */

.section {
  width: 100%;
  position: relative;
}

.section__container {
  max-width: 1200px;
  width: 100%;
  background: #f5f5f5;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
}

.image_photo {
    max-width: 300px;
    width: 100%;
    background: url(../assets/avatar.png) no-repeat center;
    background-size: contain;
}

.section__info {
  max-width: 541px;
  width: 100%;
  background: #ffffff;
  border-radius: 6.21965px;
}

.section__info > h2 {
  width: 200px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #2c2738;
  margin: 0 auto;
  margin-top: 20px;
}

.section__info > .data{
  max-width: 280px;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 15px;
}

.section__info > .data > p > span {
    font-size: 13px;
}

.footer {
    width: 100%;
    position: relative;
}

.footer__container {
    max-width: 1200px;
    width: 100%;
    background: black;
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 50px;
}

@media(min-width: 320px) and (max-width: 767px) {
  .header__container  {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .header__navigation > nav {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 0;
  }

  .backHome {
    margin-bottom: 20px;
  }

  .section__container{
    flex-direction: column;
  }

  .image_photo {
    margin: 0 auto;
    height: 200px;
  }

  .section__info {
    margin-top: 20px;
  }

  .footer {
  }
}
</style>