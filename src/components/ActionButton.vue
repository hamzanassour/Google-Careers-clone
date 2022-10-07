<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text", "isPrimary"],
  // data() {
  //   return {
  //     primary: true,
  //   };
  // },
  computed: {
    buttonClass() {
      return {
        Primary: this.isPrimary,
        secondary: !this.isPrimary,
      };
    },
  },
};
</script>
<style scoped>
.Primary {
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
.secondary {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 500;
  border-width: 0;
  border-radius: 4px;
  color: blue;
  background-color: white;
  border: 1px solid blue;
}
.Primary:hover {
  box-shadow: 0 0 2px 2px blue;
}
.secondary:hover {
  background-color: blue;
  color: white;
  box-shadow: 0 0 2px 2px blue;
}
</style>
