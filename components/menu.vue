<script>
export default {
    name: 'menus',
    serverCacheKey () {
        return 'menus'
    },
    // eslint-disable-next-line
    render(h) {
        return (
            <div>
                <p>vue-router: <router-link to="/">index</router-link> | <router-link to="/post">posts</router-link></p>
            </div>
        )
    }
}
</script>

<style scoped>
p {
    font-size: 20px;
    text-align: center;
    padding: 100px;
    padding-bottom: 0;
}
</style>
