<template>
  <div class="connContainer">
     <info></info>
     <div class="connInfo">
       <p>联系我</p>
       <bottomline></bottomline>
       <ul>
         <li>qq: 569687940</li>
         <li>微信：just-691208</li>
         <li>邮箱：569687940@qq.com</li>
         <li>常用电话：13640326306</li>
         <li>现住地：广州市天河区渔兴东路三巷1号407</li>
         <li>家乡：广州市增城区石滩镇岳埔村街前东36号</li>
         <li>紧急联系人电话：13631321389（父亲）</li>
       </ul>
     </div>

     <div class="eduInfo">
       <p>教育信息</p>
       <bottomline></bottomline>
         <table>
           <tr>
             <th>学校</th>
             <th>地理位置</th>
             <th>教育程度</th>
             <th>学年</th>
             <th>职位</th>
           </tr>
           <tr>
             <th>广东农工商职业技术学院</th>
             <th>广州增城</th>
             <th>大专</th>
             <th>2015.9-2018.6</th>
             <th>社团部长</th>
           </tr>
           <tr>
             <th>广东华侨中学</th>
             <th>广州越秀</th>
             <th>高中</th>
             <th>2012.9-2015.6</th>
             <th>科代表</th>
           </tr>
           <tr>
             <th>石滩第一中学</th>
             <th>广州增城</th>
             <th>初中</th>
             <th>2009.9-2012.6</th>
             <th>科代表</th>
           </tr>
           <tr>
             <th>岳埔小学</th>
             <th>广州增城</th>
             <th>小学</th>
             <th>2003.9-2009.6</th>
             <th>科代表</th>
           </tr>
         </table>
     </div>
  </div>
</template>

<script>

  import info from "./homepage/info_left"
  import bottomline from "./homepage/bottomline"

export default {
  components: {
    info,
    bottomline
  }
}
</script>
 
<style scoped lang="stylus">
.connContainer
  float: left
  border-right: 1px solid #909299
  .connInfo
    float: left
    margin-left:40px
    margin-top: 30px
    margin-bottom: 30px
    p
      font-size:20px
    ul
      width: 600px
      border: 3px solid #909399
      list-style: none
      margin-top 40px
      li
        font-size: 16px
        padding: 10px
        margin-right: 30px
        border-bottom: 1px solid #909199
        &:last-child
          margin-bottom: 20px
  .eduInfo
    float: left
    margin: 40px
    p
      font-size:20px
    table
      margin-top: 50px  
      margin: 30px
      border: 1px solid #909399
      border-collapse: collapse
      tr
        th
          border: 1px solid #909399
          padding: 20px

</style>
