<template>
  <div class="blog">
      标题：{{blog.title}}
      内容：{{blog.content}}
      <slot></slot>
      <button @click="deleteBlog()">删除</button>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: {
    blog: {
      require: true,
      type: Object,
    },
  },
  methods: {
      deleteBlog(){
          this.blog.isDeleted = true
          console.log(this.blog);
        // this.$emit('deleteBlog', this.blog)
      }
  }
};
</script>

<style scoped>
</style>