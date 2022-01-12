<template>
  <div id="app">
    <User :name="name" />

    <Blog v-for="blog in notDeletedBlogs" :blog='blog' :key="blog.id" @deleteBlog="deleteBlog"></Blog>
  </div>
</template>

<script>
import User from './components/User.vue';
import Blog from './components/Blog.vue';

export default {
  name: "App",
  data: function () {
    return {
      name: 'zhangsan',
      age: 18,
      users: [
          {id: 1,name: '张三', age: '23', city: '兰州'},
          {id: 2,name: '李四', age: '21', city: '白银'},
          {id: 3,name: '王小红', age: '22', city: '天水'},
          {id: 4,name: '韩梅梅', age: '24', city: '金昌'},
      ],
      blogs: [
          {id: 1, title: '文章标题1', content: '内容1内容1内容1', isDeleted: false, creatorId: 1},
          {id: 2, title: '文章标题2', content: '内容2内容2内容2', isDeleted: false, creatorId: 2},
          {id: 3, title: '文章标题3', content: '内容3内容3内容3', isDeleted: false, creatorId: 3},
          {id: 4, title: '文章标题4', content: '内容4内容4内容4', isDeleted: false, creatorId: 4},
          {id: 5, title: '文章标题5', content: '内容5内容5内容5', isDeleted: true, creatorId: 4},
      ]
    };
  },
  components: {
      User,
      Blog,
  },
  methods: {
      deleteBlog(blog){
          console.log(blog)
        blog.isDeleted = true
      }
  },
  computed: {
      notDeletedBlogs(){
          console.log(this.blogs)
          return this.blogs.filter(blog => !blog.isDeleted)
      }
  }
};
</script>

<style scoped>
    #app{
        border: 1px solid red;
    }
</style>