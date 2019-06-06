<template>
    <div id="app">
        <Topbar />
        <router-view />
    </div>
</template>
<script>
import Topbar from '@/components/Topbar'

export default {
    components: {
        Topbar
    }
}
</script>

<style lang="scss">
@import '~css/variables.scss';
@import '~css/breakpoints.scss';

body {
    height: 100%;
    width: 100%;
    background-color: $backgroundColor;
    margin: 0;
    padding: 0;
    font-family: Lato;

    #app {
        display: flex;
        flex-direction: column;
        padding: 0 8px;

        @include breakpoint($md) {
            padding: 0 32px;
        }

        @include breakpoint($lg) {
            padding: 0 64px;
        }
    }
}
</style>
