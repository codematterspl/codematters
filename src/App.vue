<template>
    <div id="app" :class="route">
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
    },
    computed: {
        route() {
            const route = {}
            route[this.$route.name] = true

            return route
        }
    }
}
</script>

<style lang="scss">
@import '~css/variables.scss';
@import '~css/breakpoints.scss';
@import '~css/defaults.scss';

body {
    height: 100vh;
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
        height: 100%;
        transition: background-image 0.3s ease-in-out;

        &.home {
            @include breakpoint($md) {
                background: linear-gradient(-270deg, $backgroundColor, rgba(255, 255, 255, 0)) fixed,
                            linear-gradient(90deg, $backgroundColor, rgba(255, 255, 255, 0)) fixed,
                            url('~images/home.jpg') fixed;
                background-size: cover;
                background-position: center right;
                background-repeat: no-repeat;
            }
        }

        &.contact {
            @include breakpoint($md) {
                background: linear-gradient(-270deg, $backgroundColor, rgba(255, 255, 255, 0)) fixed,
                            linear-gradient(90deg, $backgroundColor, rgba(255, 255, 255, 0)) fixed,
                            url('~images/contact.jpg') fixed;
                background-size: cover;
                background-position: center right;
                background-repeat: no-repeat;
            }
        }

        &.offer {
            @include breakpoint($md) {
                background: linear-gradient(-270deg, $backgroundColor, rgba(255, 255, 255, 0)) fixed,
                            linear-gradient(180deg, $backgroundColor, rgba(255, 255, 255, 0)) fixed,
                            url('~images/offer.jpg') fixed;
                background-size: cover;
                background-position: center right;
                background-repeat: no-repeat;
            }
        }

        .content {
            width: 100%;
        }

        @include breakpoint($md) {
            padding: 0 64px;

            .content {
                padding-top: 128px;
                width: 50%;
            }
        }

        @include breakpoint($lg) {
            padding: 0 128px;

            .content {
                padding-top: calc(128px + 64px);
                width: 50%;
            }
        }
    }
}
</style>
