<template>
	<div>
		<!-- 监听事件 -->
		<div>		
			<button v-on:click="counter += 1">Add 1</button>
			<p>The button above has been clicked {{counter}} times.</p>
		</div>
		<!-- 复杂逻辑时，v-on接收一个方法名 -->
		<div>
			<button v-on:click="greet">Greet</button>
		</div>
		<!-- 内联js语句中调用 -->
		<div v-on:scroll.passive="onScroll">
			<!-- 事件修饰符 -->
			<button @click.once="say('hi')">Say hi</button>
			<!-- 系统修饰符，当按下相应按键是触发鼠标或键盘事件 ,exact修饰符是当且仅当只有alt被按下时触发-->
			<button @click.alt.exact="say('what')">Say what</button>
			<!-- 用特殊变量$event可以把内联语句处理器中访问的原始DOM事件 -->
			<!-- 鼠标修饰符.right -->
			<button @click.right="warn('Form cannot be submitted yet.', $event)">Submit</button>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				counter: 0,
				name: 'Vue.js'
			}
		},
		methods: {
			greet(event) {
				alert('Hello ' + this.name + '!')
				if (event) {
					alert(event.target.tagName)
				}
			},
			say(message) {
				alert(message)
			},
			warn(message, event) {
				if (event)event.preventDefault()
				alert(message)
			}
		} 
	}
</script>