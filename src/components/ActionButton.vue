<template>
  <button class="button">Sign in</button>
</template>

<script>
export default {
  name: "ActionButton",
};
</script>
<style scoped>
.button {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 500;
  color: white;
  border-width: 0;
  border-radius: 4px;
  background-color: blue;
}
.button:hover {
  box-shadow: 0 0 2px 2px blue;
}
</style>
