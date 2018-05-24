<!-- 大多数情况下计算属性更合适，但是有时也需要一个自定义的侦听器。 -->
<!-- vue通过watch选项提供了一个更通用的方法来响应数据的变化。 -->
<!-- 当数据变化执行异步或者开销较大的操作时，这个方式是最有用的 -->
<template>
	<div id="watcher">
		<p>Ask a yes/no question:
           <input v-model="question">
		</p>
		<p>{{ answer }}</p>
	</div>
</template>

<script>
import Axios from "axios/dist/axios.min.js"
import An from "lodash/lodash.min.js"
export default {
	name: 'watcher',
	data () {
		return {
			question: '',
			answer: 'I cannot give you an answer until you ask a question!'
		}
	},
	//watch选项允许我们执行异步操作，限制我们执行该操作的频率，并在我们得到最终结果钱，设置中间状态。
	watch: {
		//如果question发声变换这个函数就会运行
		question: function (newQuestion, oldQuestion) {
			this.answer = 'Waiting for you to stop typing...'
			this.getAnswer()
		}
	},
	methods: {
		//_.debounce是一个通过Lodash限制操作频数的函数
		getAnswer: _.debounce(
		 function () {
	         if (this.question.indexOf('?') === -1){
	         	this.answer = 'Question usually contain a question mark. ;-)'
	         	return
	         } 
	         this.answer = 'Thinking...'
	         let vm = this
	         Axios.get('https://yesno.wtf/api')        
	            .then(function (response) {
	            	vm.answer = _.capitalize(response.data.answer)
	            })
	            .catch(function (error) {
	            	vm.answer = 'Error!Could not reach the API. ' + error 
	            })
		},
			//这时我们为判定用户停止输入等待的毫秒数
		500
		)
	}
}
</script>