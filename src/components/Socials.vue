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
    justify-content: flex-end;
    padding: 16px 0;

    @include breakpoint($md) {
        position: fixed;
        bottom: 0;
        right: 0;
        padding: 32px 64px;
    }

    .social {
        margin-left: 16px;
    }
}
</style>
