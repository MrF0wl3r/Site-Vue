Vue.component('nav-item', {
    props: ['item', 'active'],
    template: '<a href="#" v-on:click="clicked">{{ item }}<span v-if="active==item" >></span></a>',
    methods: {
        clicked: function() {
            this.$emit('clicked', this.item);
        }
    }
})

Vue.component('nav-header', {
    template:   '<nav>' +
                    '<nav-item v-for="i in items" :active="active" :item="i" :key="i" v-on:clicked="makeActive"></nav-item>' +
                '</nav>',
    
    data: function() {
        return {
            items: [
                'Home',
                'Blog',
                'Projects'
            ],
            active: 'Home'
        }
    },

    methods: {
        makeActive: function(activeItem) {
            this.active = activeItem;
        }
    }
})

new Vue({
    el: '#app',
    template: '<nav-header></nav-header>'
})