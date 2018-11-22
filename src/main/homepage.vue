<template>
  <div>
  	<infoleft></infoleft>
  	<div class="right"><inforight></inforight></div>
  </div>
</template>

<script>

	import infoleft from "./homepage/info_left"
	import inforight from "./homepage/info_right"

export default {
	components: {
		infoleft,
		inforight
	}
}
</script>
 
<style scoped lang="stylus">
	.right
		width: 80%
		float: left
</style>
