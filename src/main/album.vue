<template>
  <div class="albumcontainer">

  	<div class="albumlist" v-show="ablistShow">
	  	<div class="album" v-for="item in photos" @click="toJudge(item)">
	  		<div class="albumImg"><img :src="'/static/images/photo/'+item.title+'/1.jpg'"></div>
	  		<div class="albumcount">{{item.count}}</div>
	  		<div class="albumtitle">{{item.title}}</div>
	  		<div class="albumislock" v-show="item.islock"><img src="/static/images/icon/lock.png"></div>
	  		
	  		<div class="inputpw" v-show="item.islockshow">
		  		<div>请输入密码</div>
		  		<input type="text" v-model="password"><br>
		  		<button>确定</button>
		  		<button>取消</button>
	  		</div>

	  	</div>
  	</div>

  	<div class="photowall" v-show="photowallShow">
  		<a href="/album"><div class="back">返回</div></a>
  		<div class="left"  @click="pageOpt" ><img class="toLast" src="/static/images/icon/left.png"></div>
  		<div class="right" @click="pageOpt" ><img class="toNext" src="/static/images/icon/right.png"></div>
  		<div class="content">
	  		<img v-for="(item, index) in photoshowList" :class="'p'+ (index+1)" :src="'/static/images/photo/'+ photoshowTitle +'/'+ item + '.jpg'">
  		</div>
  	</div>
<!--   	<button @click="test">测试</button>
 -->  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function () {
    return {
    	photos:[],
    	inputpwShow: false,
    	ablistShow: true,
    	photowallShow: false,
    	password: "",
    	photoshowTitle:"",
    	photoshowList:[],
    	photoshowCount:0,
    	page:0
    }
  },
  methods: {
  	test: function(){ 
  		console.log(this.photos)
  	},
    getData: function(){
    	axios.get('/api/data').then((response) =>{
    		this.photos=response.data.data.photo
    	})
    },
    toJudge: function(item){
    	if(item.islock){
	    	if(!this.inputpwShow){
		    	if(item.islock){
		    		item.islockshow = !item.islockshow
		    		this.inputpwShow = true
		    	}
		    }

		    var key=item.password
		    if(event.target.innerHTML=="确定"){
		    	if(this.password==key){
		    		item.islockshow=false
		    		this.inputpwShow=false
		    		this.ablistShow=false
		    		this.photowallShow=true
		    		
		    		this.showList(item)
		    	}else{
		    		alert("密码错误")
		    	}
		    }else if(event.target.innerHTML=="取消"){
		    	item.islockshow=false
		    	this.inputpwShow=false
		    }
		}else{
			item.islockshow=false
		    this.inputpwShow=false
		    this.ablistShow=false
		    this.photowallShow=true
		    
		    this.showList(item)
		}
    },
    showList: function(item){
    	this.photoshowTitle=item.title
    	this.photoshowCount=item.count
    	for(var i=0; i<item.count; i++){
    		if(i>9){
    			break
    		}
    		this.photoshowList.push(i+1)
    	}
    	console.log(this.photoshowList)
    	console.log(this.page)
    },
    pageOpt: function(){
    	if(event.target.className=="toLast"){
    		if(this.page>0){
    			this.page--
    			this.photoshowList.splice(0,this.photoshowList.length)
    			for(var i=0; i<this.photoshowCount; i++){
    				if(i>9){
    					break
    				}
	    			this.photoshowList.push(i+1)
    			}
    			
    			
    		}else{
    			alert("没有上一页了")
    		}
    	}else if(event.target.className=="toNext"){
    		this.page++
    		this.photoshowList.splice(0,this.photoshowList.length)
    		for(var i=this.page*10; i<this.photoshowCount; i++){	    		
	    		this.photoshowList.push(i+1)
    		}
    		 console.log(this.page)
    	}
    }
  },
  created:function(){
		this.getData()
	}
}
</script>
 
<style scoped lang="stylus">
.albumcontainer
	clear: both
	.albumlist
		margin: 10px
		cursor: pointer
		.album
			width: 200px
			height: 200px
			background: yellow
			position: relative
			float: left
			margin: 15px
			padding: 10px
			padding-right: 15px
			border-radius: 10px
			&:hover
				transform: scale(1.05)
			.albumImg
				overflow: hidden
				img
					width: 200px
					height: 160px
					border-radius: 5px
			.albumcount
				position:absolute
				right: 20px
				bottom: 60px
				font-size: 20px
				color: #303133
				background: #fff
				width: 30px
				text-align: center
				border-radius: 40%
				opacity: 0.8
			.albumtitle
				font-size: 22px
				margin-top: 10px
				padding-left: 10px
			.albumislock
				position: absolute
				right: 20px
				bottom: 8px
				img
					width: 25px
			.inputpw
				position: absolute
				top: 0
				background: rgba(0,0,0,0.6)
				left: 0
				width: 100%
				height: 100%
				text-align: center
				border-radius: 5%
				div
					width: 100%
					color: #fff
					text-align: center
					margin-top: 20%
				input
					margin: 10px
	.photowall
		background: url(/static/images/photo/background.jpg) no-repeat top center fixed
		background-size: 100% auto
		height: 900px
		.content
			width: 100%
			height: 900px
			position: relative
			img
				z-index: 1
				width: 25%
				height: auto
				position: absolute
				padding: 10px 10px 15px 10px
				box-shadow: 2px 2px 2px #000
				background: #fff
				&:hover
					z-index: 2
					transform: scale(1.5)
					box-shadow: -10px 10px 20px #000
			.p1
				left: -6%
				top: 10%
				transform: rotate(15deg)
			.p2
				left: 14%
				top: 6%
				transform: rotate(10deg)
			.p3
				left: 34%
				top: 8%
				transform: rotate(5deg)
			.p4
				left: 56%
				top: 9%
				transform: rotate(-10deg)
			.p5
				left: 12%
				top: 32%
				transform: rotate(-20deg)
			.p6
				left: -2%
				top: 60%
				transform: rotate(-10deg)
			.p7
				left: 20%
				top: 64%
				transform: rotate(10deg)
			.p8
				left: 42%
				top: 62%
				transform: rotate(20deg)
			.p9
				left: 62%
				top: 60%
				transform: rotate(10deg)
			.p10
				left: 42%
				top: 34%
				transform: rotate(10deg)
		.back
			width: 60px
			height: 30px
			background:#409eff
			text-align: center
			position: absolute
			top: 12%
			left: 11%
			padding: 3px
			border-radius: 10px
			font-size: 20px
			opacity: 0.8
			cursor: pointer
		.left
			z-index: 3
			position: absolute
			left: 2% 
			top: 40%
			cursor: pointer
		.right
			z-index: 3
			position: absolute
			right: 2%
			top: 40%
			cursor: pointer
</style>
