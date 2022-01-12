<template>
  <div id="name">我叫{{ name }}</div>
</template>

<script>
export default {
  name: "User",
  props: {
    name: {
      require: true,
      type: String,
    },
  },
  data: function () {
    return {
      value: "zhangsan",
    };
  },
};
</script>

<style scoped>
#name {
  color: red;
}
</style>