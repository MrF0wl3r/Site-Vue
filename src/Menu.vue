
<template>
    <nav>
        <AMenuItem v-for="i in items" :active="active" :item="i" :key="i.name" v-on:clicked="makeActive"></AMenuItem>
    </nav>
</template>

<script>
import AMenuItem from './MenuItem.vue'
import home from './views/home.vue'
import blog from './views/blog.vue'
import project from './views/project.vue'

export default {
    name: 'menu',
    components: {AMenuItem, home, blog, project},
    data() {
        return {
            items: [
                { 'name': 'Home', 'component': home },
                { 'name': 'Blog', 'component': blog },
                { 'name': 'Projects', 'component': project }
            ],
            active: { 'name': 'Home', 'component': home }
        }
    },

    methods: {
        makeActive: function(activeItem) {
            this.active = activeItem;
            // Pass selection through to the activechange function 
            // on the root vue class
            this.$emit('activechange', this.active);
        }
    }
}
</script>

<style>

nav {
    height: 100vh;
    width: 160px;
    background-color:#4f5660;
    box-shadow:0 1px 1px #ccc;
    float: left;
}

nav a {
    display:list-item;
    padding: 18px 30px;
    color:#cdd1d6;
    font-weight:bold;
    font-size:16px;
    text-decoration:none;    
    line-height:1;
    text-transform: uppercase;
    background-color:transparent;
    border-top: 1px solid #4f5660;
    border-bottom: 1px solid #4f5660
}

nav a span {
    position: absolute;
    left: 160px;
    width: 0; 
    height: 0; 
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #4f5660;
}

nav a:hover {
    border-top: 1px solid #cdd1d6;
    border-bottom: 1px solid #cdd1d6;
}
</style>