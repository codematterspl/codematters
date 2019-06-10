<template>
    <nav class="topbar">
        <div class="topbar__brand">
            <span class="code">code</span>
            <span class="matters">matters</span>
        </div>
        <div class="topbar__menu">
            <router-link
                v-for="item in menu"
                :key="item.route"
                class="menu-item"
                :class="{ 'menu-item--active': item.route === currentRoute }"
                :to="item.route"
            >
                {{ item.title }}
            </router-link>
        </div>
        <div class="topbar__languages">
            <a
                class="lang"
                :class="{ 'lang--active': locale.locale === $i18n.locale }"
                @click="changeLanguage(locale.locale)"
                v-for="locale in locales"
                :key="locale.locale"
            >
                {{ locale.title }}
            </a>
        </div>
    </nav>
</template>
<script>
export default {
    computed: {
        currentRoute() {
            return this.$route.name;
        },
        menu() {
            return [{ route: 'home', title: this.$t('menu.home') },
                    { route: 'offer', title: this.$t('menu.offer') },
                    { route: 'contact', title: this.$t('menu.contact') }]
        },
        locales() {
            return [ { locale: 'en-US', title: 'EN' }, { locale: 'pl-PL', title: 'PL' } ]
        }
    },
    methods: {
        changeLanguage(locale) {
            this.$i18n.locale = locale
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~css/variables.scss';
@import '~css/breakpoints';

.topbar {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 16px;

    @include breakpoint($md) {
        flex-direction: row;
        align-items: center;
    }

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
            padding: 16px;
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
        align-self: flex-end;

        @include breakpoint($md) {
            align-self: center;
        }

        .lang {
            margin: 4px 16px;
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