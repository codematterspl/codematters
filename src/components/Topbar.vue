<template>
    <nav class="topbar">
        <div class="topbar__brand">
            <span class="code">code</span>
            <span class="matters">matters</span>
        </div>
        <div class="topbar__menu">
            <router-link
                v-for="item in menu"
                :key="item"
                class="menu-item"
                :class="{ 'menu-item--active': item === currentRoute }"
                :to="item"
            >
                {{ item }}
            </router-link>
        </div>
        <div class="topbar__languages">
            <a class="lang lang--active">PL</a>
            <a class="lang">EN</a>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            menu: ['home', 'offer', 'contact']
        }
    },
    computed: {
        currentRoute() {
            return this.$route.name;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~css/variables.scss';

.topbar {
    display: flex;
    align-items: center;
    padding-top: 16px;

    &__brand {
        font-size: 48px;
        font-family: Helvetica;
        flex-grow: 1;
        cursor: default;

        .code {
            color: $colorPrimary;
        }

        .matters {
            color: $colorSecondary;
        }
    }

    &__menu {
        display: flex;

        .menu-item {
            padding-left: 16px;
            padding-right: 16px;
            font-size: 24px;
            font-family: Lato;
            color: $colorPrimary;
            text-decoration: none;
            transition: color .3s;

            &:hover, &:focus {
                color: $colorPrimaryHover;
            }

            &--active {
                color: $colorSecondary;
            }
        }
    }

    &__languages {
        display: flex;
        width: 150px;
        justify-content: flex-end;

        .lang {
            padding: 0 16px;
            color: $colorPrimary;
            cursor: pointer;
            opacity: 0.5;

            &--active {
                opacity: 1
            }
        }
    }
}
</style>