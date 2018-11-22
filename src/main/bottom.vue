<template>
    <div class="bottomlink">
      <a href="#"><input type="button" value="回到顶部"></a><br>
      <div class="list">
        <ul>
          <a href="/#"><li>首页</li></a>
          <a href="/animation/"><li>动漫</li></a>
          <a href="/game"><li>游戏</li></a>
          <a href="/album"><li>相册</li></a>
          <a href="/connection"><li>联系</li></a>
        </ul>
      </div>
      <p>Copyright © 2013-2018 ****.com All Rights Reserved. 京ICP备11238023号 京公网安备11234802013056</p>
    </div>
</template>

<script>
export default {
 
}
</script>
 
<style  lang="stylus" scoped>
.bottomlink
  width: 100%
  height: 10%
  background: #e5e7ed
  text-align: center
.list
  display: inline-block
  ul
    list-style: none
    a
      border-left: 1px solid black
      padding: 0 10px
      text-decoration: none
      float: left
      &:first-child
        border: none
p
  margin: 10px auto
  color: #909399
</style>
