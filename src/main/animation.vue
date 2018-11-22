<template>
  <div id="aniContainer">
  	<!-- <button @click="test">测试</button> -->
    <div class="typeContainer">
      <input class="listType" type="button" value="热血" @click="setType">
      <input class="listType" type="button" value="搞笑" @click="setType">
      <input class="listType" type="button" value="恋爱" @click="setType">
      <input class="listType" type="button" value="恐怖" @click="setType">
      <input class="listType" type="button" value="日常" @click="message">
      <input class="listType" type="button" value="推理" @click="message">
    </div>

    <div v-show="isShow">
       <div class="listcontainer"  v-for="item in showList" @click="toDetialpage(item)">
           <img :src="'/static/images/animation/' + item.imgUrl" width="100px" height="120"><br>
           <p>{{item.title}}</p>
        </div>
        <div class="page">
           <button @click="pageOperation">上一页</button>
           <button @click="pageOperation" v-for="(item,index) in page">{{index+1}}</button>
           <button>...</button>
           <button @click="pageOperation">下一页</button>
        </div>
      </div>
      <br>

    <div class="detialPage" v-if="!isShow">

        <div class="detialLink">
            <a href="/#">首页 ></a>
            <a href="/animation"> 动漫 ></a>
            <a href="/animation">{{animationType}} ></a> 
            <a href="#">{{clickAni.title}}</a>
        </div>

        <div class="detialContent">

            <div class="detialTop">
              	<img :src="'/static/images/animation/' + clickAni.imgUrl">

                <div class="detialInfo">
                  <span class="title">{{clickAni.title}}</span>
                  <div class="score"><span>个人评分：</span>{{clickAni.score}}<span>分</span></div>
                  <br>
                  <div class="keyWord"><span v-for="item in clickAni.keyWord" >{{item}}</span></div> <br>
                  <span class="publishTime">{{clickAni.publishTime}} 开播</span><br>
                  <div class="discript">简介：{{clickAni.descript}}</div>
                </div>

            </div>

            <div class="detialCenter" >
              <div class="roleTitle">声优列表：</div>
              <div class="roleList" v-for="item in clickAni.role">{{item}}</div>
            </div>

            <div class="detialButtom">
              <div class="commentTitle">个人漫评：</div>
              <div class="comment">{{clickAni.comment}}</div>
            </div>

         </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      animations:[],
      showList:[],
      animationType:"热血",
      keyWords:[],
      isShow: true,
      page:[0,1],
      pageNum: 0,
      clickAni:null
    }
  },
  methods: {
  	test: function(){
  		var lists=null
  		for(var i=0; i<2; i++){
  			for(var j=0; j<this.animations[i].keyWord.length; j++){
  				var keyWord=this.animations[i].keyWord[j] 
  				this.keyWords.push(keyWord)
  			}
  		}
  		console.log(this.keyWords)

  		var n=[]
  		for(var i=0; i<this.keyWords.length; i++){
  			if(n.indexOf(this.keyWords[i])==-1){
  				n.push(this.keyWords[i])
  			}
  		}
  		console.log(n)
  	},

    getData: function(){
      axios.get('/api/data').then((response) =>{
        //获取全部数据
        this.animations=response.data.data.animation
        //初始化列表为热血类型的动画
         for(var i=0; i<this.animations.length; i++){
            if(this.animations[i].type == "热血"){
                this.showList.push(this.animations[i])
              }
            if(this.showList.length>17){
                break
              }
         }
         this.clickAni=this.animations[0]
      })
    },

    setType: function(){
      this.animationType=event.target.value
      this.isShow=true
      this.pageNum=0
      this.getShowList()
    },

    getShowList: function(){

      var showList = this.showList
      var animations = this.animations
      var page= this.page

      page.splice(0,page.length)
      showList.splice(0,showList.length)


      for(var i=this.pageNum*12; i<animations.length; i++){
        if(animations[i].type == this.animationType){
          showList.push(animations[i])
        }
        if(showList.length>17 || this.pageNum!=0 ){
          break
        }
      } 

      for(var i=0; i<parseInt(showList.length/10)+1;i++){
         this.page.push(i)
      }

    },

    pageOperation: function(){
      if(event.target.innerHTML=="上一页"){
        if(this.pageNum==0){
          alert("已经是第一页了")
        }else{
          this.pageNum--
        }
      }else if(event.target.innerHTML=="下一页"){
          this.pageNum++
      }else{
          this.pageNum=event.target.innerHTML -1
      }

      this.getShowList()
    },

    toDetialpage: function(item){
      this.isShow=false
      this.clickAni=item
    },

    message: function(){
    	alert("栏目类容尚未填充")
    }
  },
  created: function () {
    this.getData()
  }
}
</script>

<style scoped lang="stylus">
#aniContainer
  width:920px
  margin: 0 auto
  .typeContainer
    margin: 20px 50px
    height: 40px
    .listType
      position: relative
      min-width: 100px
      padding: 8px 15px
      margin: 0px 10px
      border-radius: 10px
      border: 1px solid
      border-color: #2f71a3 #265a82 #1e4766 #265a82
      background: #3e9ed6
      font-weight: bold
      font-size: 24px
      line-height: 1
      letter-spacing: 10px
      text-align: center
      text-shadow: 0px -1px 0px rgba(0,0,0,0.5)
      box-shadow: inset 0px -4px 5px rgba(255,255,255,0.2),
                  inset 0px 1px 5px rgba(255,255,255,0.2),
                  0px 2px 0px #1e4766,
                  0px 4px 0px #1e4766,
                  0px 6px 0px #1e4766,
                  0px 8px 5px rgba(0,0,0,0.5)
      color: #fff
      &:hover
        background-color: #8AC5FD
        color: yellow  
        top: -2px 
        right: 2px 
  .listcontainer
    display: inline-block
    margin: 10px 20px  
    width: 100px
    cursor: pointer
    :hover
     color: red
    img:hover
     transform: scale(1.1)
    p
      color: #303133
      text-align: center
      font-size: 15px
      white-space: nowrap
  .page
    width: 40%
    margin: 0 auto
    button
      line-height: 20px
      margin: 0 2px

.detialPage
	.detialLink
	    width: 100%
	    height: 30px
	    background: #d3d3d3
	    a
	      display: inline-block
	      color: #303133
	      text-decoration: none
	.detialContent
		margin: 5px 0
		.detialTop
			width: 100%
			background: #e0f0e9
			display: inline-block
			img
		        width: 210px
		        height: 280px
		        border: 5px solid gray
		        border-radius: 5px 
		        margin: 20px 20px  
		        float: left
		    .detialInfo
        		padding-top: 20px
        		.title
          			color: #303133
          			font-size: 25px
          			font-weight: bold
          		.keyWord
			        margin-top: 20px 
			        span
			            margin-right: 10px
			            padding: 5px
			            border: 1px solid #606266
			            border-radius: 6px
			    .publishTime
			        color: green
			    .discript
			    	width: 95%
			    	color: #909399
			    	margin-top: 10px
			   	.score
			   		font-size: 30px
			   		color: #fa8c35
			   		float: right
			   		padding-right: 50px
			   		span
			   			font-size: 10px
		.detialCenter
			margin-left: 20px
			.roleTitle
		        width: 90%
		        clear: both
		        padding: 20px
		        margin-left: -20px
		        padding-bottom: 5px
		        border-bottom: 1px solid gray
		        margin-bottom: 10px
		    .roleList
		    	width: 15%
		    	float: left
		    	margin-right: 20px
		    	margin-bottom: 5px
		.detialButtom
			clear: left
			.commentTitle
		        width: 90%
		        padding: 15px
		        padding-bottom: 5px
		        border-bottom: 1px solid gray
		    .comment
		        width: 80%
		        height: 300px
		        padding:10px
		        text-indent:40px
</style>