<template>
	<div id="computed">
		<p>Original message: {{ message }}</p>
		<p>Computed reversed message: {{ reversedMessage }}</p>
		<p>{{ fullName }}</p>
	</div>
</template>

<script>
	export default{
		name: "computed",
		data () {
			return {
				message: 'Hello!',
				firstName: 'Foo',
				lastName: 'Bar'
			}
		},
		computed: {
			reversedMessage: function () {
				return this.message.split(' ').reverse().join('')
			},
			fullName: {
				//计算属性默认是只有getter方法
				get: function () {
					return this.firstName + ' ' + this.lastName
				},
				//不过在需要时可以提供一个setter方法
				set: function (newValue) {
					let names = newValue.split(' ')
					this.firstName = names[0]
					this.lastName = names[names.length-1]
				}
			}
		}
	}
</script>