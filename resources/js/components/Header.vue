<template>
    <header class="header">
        <div class="container grid-body">
            <div class="span__2_l align-items-center">
                <div class="logo">
                    <router-link :to="{ name: 'home' }">Index</router-link>
                </div>
            </div>
            <div class="span__8_l align-items-center">
                <div class="nav">
                    <router-link
                            class="nav-link"
                            :to="{ name: 'hello' }">
                        Hello page
                    </router-link>
                    <router-link
                            class="nav-link"
                            :to="{ name: 'project.create' }">
                        Project
                    </router-link>
                </div>
            </div>
            <div class="span__2_l align-items-center justify-end-m-up">
                <div class="header__user">
                    User
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {}
</script>