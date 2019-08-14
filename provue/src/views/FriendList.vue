<template>
  <div>你是订饭了哈哈哈</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    this.getFriendList()
  },
  methods: {
    getFriendList () {
      axios.get('/friend').then((result) => {
        console.log('数据显示', result)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
