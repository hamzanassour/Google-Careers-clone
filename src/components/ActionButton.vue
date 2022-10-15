<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  // we can  mention if a props is optional or required  and we can also give a default value to props
  name: "ActionButton",
  //props: ["text", "type"], legacy method
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "secondary",
      // we can use also validator ta validate our props value
      // validator(value) {
      //   return value == "primary";
      // },
    },
  },
  // data() {
  //   return {
  //     primary: true,
  //   };
  // },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
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
