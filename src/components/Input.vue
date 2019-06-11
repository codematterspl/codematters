<template>
	<label class="input">
		<span class="label" :class="{ 'label--visible': visible }">{{ placeholder }}</span>
		<input
			:type="type"
			:value="value"
			:required="required"
			@input="onChange"
			@focus="focused = true"
			@blur="focused = false"
			:placeholder="placeholder"
		/>
	</label>
</template>
<script>
export default {
	props: {
		value: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: 'text'
		},
		required: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			focused: false
		}
	},
	computed: {
		visible() {
			return this.focused || !!this.value;
		}
	},
	methods: {
		onChange(event) {
			this.$emit('input', event.target.value)
		}
	}
}
</script>
<style lang="scss" scoped>
@import '~css/variables';
@import '~css/mixins';

.input {
	position: relative;

	.label {
		@include input-label;
	}

	> input {
		@include input;
	}
}
</style>
