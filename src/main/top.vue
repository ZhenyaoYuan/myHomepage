<template>
    <div>
    <a href="/#">
      <div class="logo">
         <div class="imgdiv">
            <img src="../images/mylogo.jpg">
          </div>
          <div class="text">个人首页</div>
      </div>
    </a>
    <div class="link">
      <ul>
        <a href="/#"><li>首页</li></a>
        <a href="/animation"><li>动漫</li></a>
        <a href="/game"><li>游戏</li></a>
        <a href="/album"><li>相册</li></a>
        <a href="/connection"><li>联系</li></a>
      </ul>
    </div>
    <div class="topDesc">
      <div>欢迎来到这个无名小站，</div>
      <div>这里是用于收录本人信息的一个网站</div>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
 
<style  lang="stylus" scoped>
      .logo
         width: 90px
         float: left
         margin-left: 20px
         .imgdiv
          width: 50px
          height: 50px
          border-radius: 100%
          overflow: hidden
          margin-top: 5px
          margin-left: 20px
          img
            width: 100%
        .text
          width:100%
          color: #8f2deb
          font-size: 10px
          line-height: 16px
          white-space: nowrap
          text-align: center
          margin-top: 5px
      .link
         width: 90%
         position: relative
         ul
          display: inline-block
          margin-left: 5% 
          padding-left: 0
          list-style: none
          border: 1px solid #dcdfe6
          border-radius: 15px
          a
            color: #8f2deb
          li
            margin: 0 10px
            padding: 10px
            float: left
            &:hover
              background-color: #56f956
              color: white
      .topDesc
        color: #8f2deb
        position: absolute
        right: 12%
        top: 2%
        div
          margin-bottom: 5px
</style>
