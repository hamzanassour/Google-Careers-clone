<template>
  <header>
    <div class="nav-container">
      <div class="nav-wrapper">
        <a href="/" class="logo">{{ logo }}</a>
        <nav>
          <ul>
            <li
              v-for="item in menuItems"
              :key="item.id"
              data-test="main-nav-test-item"
            >
              <a href="#">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
        <div class="log">
          <ActionButton
            v-if="!isLoggedIn"
            data-test="login-button"
            text="Sign in"
            type="Primary"
            @click="login"
          ></ActionButton>
          <ProfileImage v-else data-test="profile-image"></ProfileImage>
        </div>
      </div>
      <Subnav></Subnav>
    </div>
  </header>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import Subnav from "./Subnav.vue";
export default {
  name: "NavBar",
  components: { ActionButton, ProfileImage, Subnav },
  data: function () {
    return {
      logo: "Google Careers",
      menuItems: [
        { id: 1, name: "Teams" },
        { id: 2, name: "Locations" },
        { id: 3, name: "Benefits" },
        { id: 4, name: "Jobs" },
        { id: 5, name: "Students" },
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
  },
};
</script>

<style scoped>
.nav-container {
  position: fixed;
  margin-top: 0;
  margin-left: 0;
  width: 100%;
  height: 64px;
  background-color: aqua;
}
.nav-wrapper {
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  background-color: white;
  padding-left: 32px;
  padding-right: 32px;
  border-bottom: 1px solid #dadce0;
}
.logo {
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  font-size: 20px;
  line-height: 28px;
}
nav {
  height: 100%;
  margin-left: 48px;
}
ul {
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 100%;
}
.log {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
}
li {
  margin-left: 38px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
