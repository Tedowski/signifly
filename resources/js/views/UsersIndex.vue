<template>
    <section class="section">
        <div class="container grid-body">
            <div class="span__8_l offset__2_l">
                <div class="loading" v-if="loading">
                    Loading...
                </div>

                <div v-if="error" class="error">
                    <p>{{ error }}</p>
                    <button @click.prevent="fetchData">Try again</button>
                </div>

                <ul v-if="users">
                    <li v-for="{ name, email } in users">
                        <strong>Name:</strong> {{ name }},
                        <strong>Email:</strong> {{ email }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import usersService from 'Services/usersService';
    export default {
        data() {
            return {
                loading: false,
                users: null,
                error: null,
            };
        },
        created() {
            this.loading = true
        },
        mounted() {
            this.fetchData();
        },
        methods: {
            async fetchData() {
                try {
                    this.users = (await usersService.index()).data;
                    this.error = null;
                    this.loading = false;
                } catch (error) {
                    this.loading = false;
                    this.error = error.response.data.message || error.message;
                }
            }
        }
    }
</script>