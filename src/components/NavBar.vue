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
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
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
    };
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
li {
  margin-left: 38px;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
