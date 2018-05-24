<!-- v-bind:class的对象语法十分直观，和css很像，css属性名可以用驼峰或者短横线分隔来命名 -->
<template>
	<!-- <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div> -->
	<!-- 使用样式对象更好 -->
	<div v-bind:style="styleObject">
		这里显示
	</div>
</template>

<script>
export default {
	data () {
		return {
			styleObject: {
				// activeColor: 'red',
				// fontSize: 13px
				color: 'red',
				fontSize: '13px'
			}
		}
	}
}
</script>

<!-- v-bind:style的数组语法可以将多个对象应用到同一个元素上 -->
<!-- 同样，对象语法可以结合对象的计算属性使用 -->