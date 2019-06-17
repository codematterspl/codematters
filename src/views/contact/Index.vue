<template>
    <section class="contact">
        <h1>{{ $t('contact.header') }}</h1>

        <form class="form">
            <Input
                type="email"
                :required="true"
                :placeholder="$t('contact.form.email-placeholder')"
                v-model="model.email"
            />
            <Input
                :required="true"
                :placeholder="$t('contact.form.title-placeholder')"
                v-model="model.title"
            />
            <Textarea
                :required="true"
                :placeholder="$t('contact.form.message-placeholder')"
                v-model="model.message"
            />
            <button>{{ $t('contact.form.send') }}</button>
        </form>
    </section>
</template>
<script>
import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
export default {
    components: {
        Input,
        Textarea
    },
    data() {
        return {
            model: {
                email: '',
                title: '',
                message: ''
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.contact {
    .form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .input, .textarea {
            margin-bottom: 32px;
        }
    }
}
</style>
