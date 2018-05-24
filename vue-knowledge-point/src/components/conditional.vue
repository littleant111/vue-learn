<template>
  <div>
  	<button @click="toggleLoginType">toggle login type</button>
	<div v-if="loginType === 'username'">
		<label>Username</label>
		<input placeholder="Enter your username" key="username-input">
		<div v-if="Math.random() > 0.5">Now you see me</div>
		<div v-else>Now you don't</div>
	</div>
	<div v-else>
		<label>Email</label>
		<!-- 添加一个具有唯一值的 key 属性 -->
		<input placeholder="Enter your email address" key="email-input">
	</div>
	
  </div>
</template>

<script>
	export default {
		data () {
			return {
                loginType: 'username'
			}
		},
		methods: {
			toggleLoginType: function () {
				return this.loginType = this.loginType === 'username' ? 'email' : 'username'
			}
		}
	}
</script>
