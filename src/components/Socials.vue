<template>
	<div class="socials">
		<Icon class="social" name="facebook" />
		<Icon class="social" name="twitter" />
		<Icon class="social" name="linkedin" />
	</div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '~css/breakpoints';

.socials {
	display: flex;
	position: fixed;

	right: 8px;
	bottom: 8px;

	@include breakpoint($md) {
		right: 48px;
		bottom: 48px;
	}

	@include breakpoint($lg) {
		right: 64px;
		bottom: 64px;
	}

	.social {
		margin-left: 16px;
	}
}
</style>

