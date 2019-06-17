<template>
    <label class="textarea">
        <span class="label" :class="{ 'label--visible': visible }">{{ placeholder }}</span>
        <textarea
            :value="value"
            :placeholder="placeholder"
            :required="required"
            @input="onChange"
            @focus="focused = true"
            @blur="focused = false"
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
@import '~css/breakpoints';
@import '~css/mixins';

.textarea {
    position: relative;
    padding-top: 16px;

    .label {
        @include input-label;
    }

    > textarea {
        @include input;
        padding-top: 0px;

        @include breakpoint($md) {
            min-width: 300px;
        }
    }
}
</style>
