
<template>
    <div id="blogposts">
        <div v-for="post in posts">
            <h1>{{ post.title }}</h1>
            <p v-html="post.content"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog',
    data() {
        return {
            posts: [
                { 
                    'title': 'First Post',
                    'content': '<strong>B</strong>acon ipsum dolor amet pork turkey boudin, burgdoggen drumstick kevin porchetta sirloin meatball rump pork loin leberkas venison cow pancetta. Biltong landjaeger alcatra cupim, turkey brisket ball tip chuck short loin frankfurter. Short loin corned beef meatloaf, ribeye sirloin tenderloin ground round flank chuck shoulder beef fatback jerky. Pork chop venison strip steak, porchetta meatball pancetta bacon landjaeger. Ribeye pork chop frankfurter biltong. Beef short loin picanha, sausage strip steak biltong flank rump doner prosciutto brisket ribeye venison pork. Strip steak turkey pastrami beef pork. Bacon ground round shank landjaeger salami corned beef swine shankle beef ribs porchetta. Shoulder flank beef ribs doner jerky filet mignon sirloin rump fatback sausage boudin. Chuck prosciutto corned beef jowl, t-bone ham turducken drumstick pork belly salami cow. Frankfurter picanha tail shankle beef flank.'
                }
            ]
        }
    },
    computed: {
        compiledMarkdown: function (contents) {
            return marked(contents, { sanitize: true })
        }
    }
}
</script>

<style scoped>
#blogposts {
    padding: 10px;
}
</style>