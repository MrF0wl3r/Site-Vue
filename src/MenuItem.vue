
<template>
    <a href="#" v-on:click="clicked">{{ item.name }}<span v-if="active.name==item.name"></span></a>
</template>

<script>
export default {
    name: 'MenuItem',
    props: ['item', 'active'],
    methods: {
        clicked: function() {
            // Pass this item through as selected to the nav-header (parent) component
            this.$emit('clicked', this.item);
        }
    }
}
</script>