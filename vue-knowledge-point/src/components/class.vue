<template>
	<div v-bind:class="classObject">
		在这里显示
	</div>
	<!-- 传递个v-bind:class一个对象 -->
	<!-- 绑定的数据不必内联定义在模板里 -->
</template>

<script>
export default {
	data () {
		return {
			//可以在这里定义
			//classObject：{
				// active: true,
				// 'text-danger': false
			// }
			//也可以绑定一个返回对象的计算属性
			isActive: false,
			error: null
		}
	},
	computed: {
		classObject: function () {
			return {
				active: this.isActive && !this.error,
				'text-danger': this.error && this.error.type === 'fatal'
			}
		}
	}
}
</script>


<!-- 我们也可以将一个数组传递给v-bind:class -->
<!-- 组件开发时，给组件添加的class属性，这些类会被添加到该组件的根元素上面这个元素上已经存在类不会被覆盖 -->