<template>
    <div id="app">
        <page-header/>
        <div class="wrapper">
            <router-view/>
        </div>
    </div>
</template>
<script>
    import pageHeader from 'Components/Header'

    export default {
        name: 'App',
        components: {
            pageHeader
        }
    }
</script>