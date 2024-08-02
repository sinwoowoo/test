<template>
    <div>
        <h3>Due to following reasons an error has occurred...</h3>
        <ul>
            <li>status_code: {{ $store.state.statusCode }}</li>
            <li>exception_type: {{ $store.state.exceptionType }}</li>
            <li>message: {{ $store.state.errorMessage }}</li>
            <li>exception: {{ $store.state.exception }}</li>
            <li>request_uri: {{ $store.state.requestUri }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage',
    computed: {
        $store() {
            return this.$store.state;
        }
    }
}
</script>

<style scoped>
h3 {
    font-size: 18px;
    font-weight: bold;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}
</style>