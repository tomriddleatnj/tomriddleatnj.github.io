<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container">
        <!--<span class="navbar-brand">WZL</span>-->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'home'}" :class="{active: mmActiveName === 'home'}">
                        <span class="bold">首页</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'lunch'}" :class="{active: mmActiveName === 'lunch'}">
                        <span class="bold">中午吃什么？</span>
                    </router-link>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'biography'}" :class="{active: mmActiveName === 'biography'}">
                        <span class="bold">WZL传记</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>

export default {
    data() {
        return {
            mmActiveName: 'home'
        }
    },
    created() {
        this.$root.eventHub.$on('mmActive', this.mmActive)
    },
    beforeDestroy() {
        this.$root.eventHub.$off('mmActive', this.mmActive)
    },
    methods: {
        mmActive(am) {
            this.mmActiveName = am
        }
    }
}
</script>

<style scoped>
span.bold {
    font-weight: bold;
}
</style>