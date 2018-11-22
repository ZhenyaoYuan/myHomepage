<template>
  <div class="container">
    <div class="top"><top></top></div>
    <div class="content">
        <router-view/> 
    </div>
    <div class="footer"><bottom></bottom></div>
  </div>
</template>

<script>

  import top from './main/top'
  import bottom from './main/bottom'

export default {
  components: {
    top,
    bottom
  }
}
</script>

<style lang="stylus">
body
  margin: 0px
  padding: 0px
  .container
    .top
      width: 100%
      height: 10%
      background: #cdffcd
      border-bottom: 1px solid #dcdfe6
    .content
      width: 80%
      min-width: 1080px
      margin-left: 10%
    .footer
      width: 80%
      min-width: 1080px
      margin-left: 10%
      clear: both
</style>
