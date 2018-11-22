<template>
  <div class="infobody">
   <div class="title">个人信息</div>
   <div class="imgdiv"><img width="200px" src="@/images/avatar.jpg"></div>
   <div class="detial1">
     <span>袁镇耀</span>
     <p>求职意向：网页前端</p>
   </div>
   <div class="detial2">
     <table>
       <tr>
         <th>姓    名：</th>
         <th>袁镇耀</th>
       </tr>
       <tr>
         <th>出生年月：</th>
         <th>1996/12</th>
       </tr>
       <tr>
         <th>籍    贯：</th>
         <th>广东/广州</th>
       </tr>
       <tr>
         <th>学    历：</th>
         <th>大专</th>
       </tr>
       <tr>
         <th>联系电话：</th>
         <th>13640326306</th>
       </tr>
       <tr>
         <th>邮    箱：</th>
         <th>569687940@qq.com</th>
       </tr>
     </table>
   </div>
   <div class="detial3">
     <ul>
       <li>√ 计算机java2级</li>
       <li>√ 英语A级</li>
       <li>√ C1机动车驾驶证</li>
     </ul>
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
 
<style lang="stylus" scoped>
*
  margin: 0
  padding: 0
  font-family:"微软雅黑"
  .title
    width: 100%
    text-align: center
    font-size: 20px
    color: #303133
    font-weight: bold
    line-height: 30px
    margin-top: 5px
  .imgdiv
    width: 80%
    background: #fff
    margin: 8px auto;
    text-align: center
    border-radius: 25% 0 25% 0
    img
      width: 90%
      margin: 5% auto
      border-radius: 25% 0 25% 0
  .detial1
    width: 100%
    color: #303133
    text-align: center
    span
      font-size: 30px
    p
      color: #606266
      margin: 10px
  .detial2
    color:#606266
    font-size: 12px
    margin-top: 40px
    table
      margin: 0 auto
      th
        line-height: 20px
        text-align: left
        padding-top: 10px
      th:first-child
        text-align: right
  .detial3
    font-size: 10px
    color: #909399
    margin-top: 250%  
    margin-left: 15%
    margin-bottom: 30%
    ul
     list-style: none 

  .infobody
    width: 20%
    min-width: 210px
    float: left
    background: #e8ffe8
</style>
