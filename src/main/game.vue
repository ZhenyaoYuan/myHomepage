<template>
  <div id="gameContainer">
     

  	 <div>
  	 	<div class="gameType" @click="show1=!show1">
  	 		<div>网游</div>
  	 		<img v-if="show1" src="../images/icon/up.png">
  	 		<img v-if="!show1" src="../images/icon/down.png">
  	 	</div>
  	 	<transition name="display-down">
  	 	<div class="gameList" v-if="show1">
  	 		<div v-for="item in onlineGames">
  	 		<a :href="item.url"  target="_blank"><div class="gameItem">
  	 			<img :src="'/static/images/game/' + item.imgUrl">
  	 			<div class="gameName">{{item.name}}</div>
  	 		</div></a>
  	 		</div>
  	 	</div>
  	 	</transition>
  	 </div>

     <div>
      <div class="gameType" @click="show2=!show2">
        <div>单机</div>
        <img v-if="show2" src="../images/icon/up.png">
        <img v-if="!show2" src="../images/icon/down.png">
      </div>
      <transition name="display-down">
      <div class="gameList" v-if="show2">
        <div v-for="item in offlineGames">
        <a :href="item.url"  target="_blank"><div class="gameItem">
          <img :src="'/static/images/game/' + item.imgUrl">
          <div class="gameName">{{item.name}}</div>
        </div></a>
        </div>
      </div>
      </transition>
     </div>

     <div>
      <div class="gameType" @click="show3=!show3">
        <div>手游</div>
        <img v-if="show3" src="../images/icon/up.png">
        <img v-if="!show3" src="../images/icon/down.png">
      </div>
      <transition name="display-down">
      <div class="gameList" v-if="show3">
        <div v-for="item in phoneGames">
        <a :href="item.url"  target="_blank"><div class="gameItem">
          <img :src="'/static/images/game/' + item.imgUrl">
          <div class="gameName">{{item.name}}</div>
        </div></a>
        </div>
      </div>
      </transition>
     </div>

      <!-- <button @click="test">test</button>  -->
  </div>
</template>

<script>
import axios from 'axios'
import bottomline from "./homepage/bottomline"

export default {
  data: function () {
    return {
    	show1:true,
    	show2:false,
    	show3:false,
    	games:[],
    	onlineGames:[],
        offlineGames:[],
        phoneGames:[]
    }
  },
  component: {
    bottomline
  },
  methods: {
  	test: function(){ 
  		console.log(this.offlineGames)
  	},
    getData: function(){
    	axios.get('/api/data').then((response) =>{
    		this.games=response.data.data.game

    		for(var i in this.games){
    			if(this.games[i].type=="网游"){
    				this.onlineGames.push(this.games[i])
    			}
    		}

            for(var i in this.games){
              if(this.games[i].type=="单机"){
                this.offlineGames.push(this.games[i])
              }
            }

            for(var i in this.games){
              if(this.games[i].type=="手游"){
                this.phoneGames.push(this.games[i])
              }
            }


    	})
    }
  },
  created:function(){
		this.getData()
	}
}
</script>
 
<style scoped lang="stylus">
#gameContainer
	width: 90%
	min-height: 700px
.gameType
	width: 100%
	background: #e5ffe4
	padding: 5px
	float: left
	border: 2px solid #dcdfe6
	border-radius: 8px
	margin-top: 5px
	cursor: pointer
	&:hover
		background: yellow
	div
		margin-left: 20px
		font-size: 18px
		float: left
		font-weight: 600
	img
		margin-right:5%
		width: 25px
		float: right
.gameList
	clear: both
	margin: 0 auto
	column-width: 200px
	column-gap: 15px
	padding-top: 10px
	.gameItem
		position: relative
		margin: 10px
		img
			width: 200px 
		div
			position: absolute
			top: 80%
			opacity: 0
			background: white
			width: 130%
			height: 100%
			line-height: 15px
			font-size: 15px
			padding-left: 10px
			padding-top: 2px
		&:hover
			transform: scale(1.08)
			div
				opacity: 0.8
				
		
.display-down-enter-active
	transition: all 1s ease
.display-down-leave-active
	transition: all 0.3s ease
.display-down-enter,.display-down-leave-to
	transition: translateY(20px)
	opacity: 0
</style>
