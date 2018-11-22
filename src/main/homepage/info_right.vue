<template>
  <div class="container">
    <div class="topbar">
      <div></div>
      <span>详细信息</span>
      <div></div>
    </div><br>
    
    <div class="eduinfo">
      <div class="title">
        教育经历
      </div>
      <bottomline></bottomline>
      <p>学校： 广东农工商职业技术学院</p>
      <p>学年： 2015年9月-2018年6月</p>
      <p>专项技能： java，sql，html5+css3，javaScript，jquery，vue,ps</p>
    </div>

    <div class="projectinfo">
      <p class="title">项目经验</p>
      <bottomline></bottomline>
      <div class="projectlist">
        <div class="project">
          <p>《个人简介》网站建设</p>
          <table>
            <tr>
              <th>项目描述：</th>
              <th>作为个人简介和面试作品所创作的作品</th>
            </tr>
            <tr>
              <th>运用软件：</th>
              <th>sublime</th>
            </tr>
            <tr>
              <th>主要技术：</th>
              <th>html5+css3,javascript,vue,stylus</th>
            </tr>
            <tr>
              <th>工作内容：</th>
              <th>1，页面整体的架构设计<br>
                  2，版面内容填充<br>
                  3，页面样式调整<br>
                  4，添加动画效果以及页面逻辑
              </th>
            </tr>
          </table>
        </div>

        <div class="project">
          <p>微信公众号管理</p>
          <table>
            <tr>
              <th>项目描述：</th>
              <th>对微信公众号的内容进行日常维护更新</th>
            </tr>
            <tr>
              <th>运用软件：</th>
              <th>135编辑器，Photoshop</th>
            </tr>
            <tr>
              <th>主要技术：</th>
              <th>Photoshop</th>
            </tr>
            <tr>
              <th>工作内容：</th>
              <th>1，微信公众号功能设计<br>
                  2，日常推文编辑<br>
              </th>
            </tr>
          </table>
        </div>

        <div class="project">
          <p>图标设计</p>
          <table>
            <tr>
              <th>项目描述：</th>
              <th>logo，海报设计</th>
            </tr>
            <tr>
              <th>运用软件：</th>
              <th>Photoshop</th>
            </tr>
            <tr>
              <th>主要技术：</th>
              <th>Photoshop</th>
            </tr>
            <tr>
              <th>工作内容：</th>
              <th>1，网络素材收集<br>
                  2，图标制作<br>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="selfintroduction">
          <p class="title">自我介绍</p>
          <bottomline></bottomline>
          <div class="selfintroductionvalue">
            本人热爱学习，对新鲜的技术有浓厚的学习兴趣。面对新环境，新团队，有良好的适应性，可以很快地适应接受新思维，新方式。在分析问题的时候要求自己要有独立的思考，不能人云亦云。对web前端工作有浓厚的学习兴趣，，希望以后能从事这方面的职业。热爱生活，热爱动漫，想要将无聊的日常变得有趣起来，那就去做出自己的改变，填写空白的日常吧！<br>
          </div>
          <div class="selfintroductionvalue">
            No change no chance
          </div>
        </div>
  </div>
</template>

<script>
  import bottomline from "./bottomline"
  export default {
  components: {
    bottomline
  }
}
</script>
 
<style lang="stylus" scoped>
  .container
    margin: 10px
    border-right: 1px solid #dcdfe6
    .topbar
      div
        width: 74%
        height: 30px
        background: #E8FFE8
        float: right
      div:first-child
        width: 8%
        float: left
        margin-right: 20px
      span
        width: 9%
        font-size: 22px
        font-family: "微软雅黑"
        letter-spacing:4px
        margin-right: 20px
    .eduinfo
      margin-bottom: 40px
      margin-top: 20px
      margin-left: 20px
      font-size: 20px
      .title
        font-size: 30px
        padding-bottom: 10px
    .projectinfo 
      margin-left: 20px
      p
        font-size: 30px
      .projectlist
        margin: 20px
        .project
          padding-top: 20px
          p
            color: #303133
            font-size: 25px
            font-weight: bold
            line-height: 5px
            letter-spacing: 1px 
          table
            font-size: 22px
            color: #303133
            margin-left: 40px
            tr th
              text-align: left
    .selfintroduction
      margin: 20px
      margin-top: 40px
      .selfintroductionvalue
        color: #303133
        text-indent:30px
        line-height: 22px

  .title
    color: #303133
    font-size: 20px
    font-weight: bold
    line-height: 10px
    letter-spacing: 1px
</style>
