<template>
    <div id="app">
        <Topbar />
        <transition name="fade" mode="out-in">
            <router-view class="content" />
        </transition>
        <Socials />
    </div>
</template>
<script>
import Topbar from '@/components/Topbar'
import Socials from '@/components/Socials'
export default {
    components: {
        Topbar,
        Socials
    }
}
</script>

<style lang="scss">
@import '~css/variables.scss';
@import '~css/breakpoints.scss';
@import '~css/defaults.scss';

body {
    height: 100%;
    width: 100%;
    background-color: $backgroundColor;
    margin: 0;
    padding: 0;
    font-family: Lato;

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.15s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    #app {
        display: flex;
        flex-direction: column;
        padding: 0 16px;

        @include breakpoint($md) {
            padding: 0 64px;

            .content {
                padding-top: 128px;
            }
        }

        @include breakpoint($lg) {
            padding: 0 128px;

            .content {
                padding-top: calc(128px + 64px);
            }
        }
    }
}
</style>
