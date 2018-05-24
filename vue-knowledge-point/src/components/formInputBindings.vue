<template>
	<div>
		<!-- 基础用法 -->
		<div>
			<!-- 修饰符 -->
			<input v-model.lazy.number.trim="message1" placeholder="edit me">
			<p>Message is: {{ message1 }}</p>
		</div>
		<!-- 多行文本 -->
		<div>
			<span>Multiline message is:</span>
			<p style="white-space: pre-line;">{{ message2 }}</p>
			<br>
			<textarea v-model="message2" placeholder="add multiple lines"></textarea>
		</div>
		<!-- 复选框 -->
		<div>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" >
      <label for="jack">Jack</label>
			<input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
			<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked Names: {{ checkedNames }}</span>
		</div>
		<!-- 单选按钮 -->
		<div>
			<input type="radio" id="one" value="One" v-model="picked">
			<label for="one">One</label>
			<br>
			<input type="radio" id="two" value="Two" v-model="picked">
			<label for="two">Two</label>
			<br>
			<input type="radio" id="three" value="Three" v-model="picked">
			<label for="three">Three</label>
			<br>
			<span>Picked: {{ picked }}</span>
		</div>
		<!-- 选择框 -->
		<div>
			<select v-model="selected1">
		    <option disabled value="">请选择</option>
		    <option>A</option>
		    <option>B</option>
		    <option>C</option>
		  </select>
		  <span>Selected: {{ selected1 }}</span>
		</div>
		<!-- 多选时选择框 -->
		<div>
			<select v-model="selected2" multiple style="width: 50px;">
		    <option>A</option>
		    <option>B</option>
		    <option>C</option>
		  </select>
		  <br>
		  <span>Selected: {{ selected2 }}</span>
		</div>
		<!-- v-for动态渲染 -->
		<div>
			<select v-model="selected">
				<option v-for="option in options" v-bind:value="option.value">
					{{ option.text}}
				</option>
			</select>
			<span>Selected: {{ selected }}</span>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
         message1: '',
         message2: '',
         checkedNames: [],
         picked: '',
         selected1: '',
         selected2: [],
         selected: 'A',
         options: [
           { text: 'One', value: 'A'},
           { text: 'Two', value: 'B'},
           { text: 'Three', value: 'C'},
         ]
			}
		}
	}
</script>
