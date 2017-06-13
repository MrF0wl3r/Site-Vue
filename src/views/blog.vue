
<template>
    <div id="blogposts">
        <div v-for="post in posts">
            <h1>{{ post.title }}</h1>
            <hr />
            <div v-html="compiledMarkdown(post.content)"></div>
            <div>
                <span v-if="showComments" v-on:click="toggleComments">( - ) </span>
                <span v-else v-on:click="toggleComments">( + ) </span>
                Comments ({{ post.comments.length }})
                <div v-if="showComments">
                    <ul v-for="comment in post.comments">
                        <li>{{ comment.message }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import marked from 'marked'

export default {
    name: 'Blog',
    data() {
        return {
            posts: [
                { 
                    'title': 'First Post',
                    'content': 'Bacon ipsum dolor amet pork turkey boudin, burgdoggen drumstick kevin porchetta sirloin meatball rump pork loin leberkas venison cow pancetta.\n\n' +
                               '  \n\n' + 
                               ' Biltong landjaeger alcatra cupim, turkey brisket ball tip chuck short loin frankfurter. Short loin corned beef meatloaf, ribeye sirloin tenderloin ground round flank chuck shoulder beef fatback jerky. Pork chop venison strip steak, porchetta meatball pancetta bacon landjaeger. Ribeye pork chop frankfurter biltong. Beef short loin picanha, sausage strip steak biltong flank rump doner prosciutto brisket ribeye venison pork. Strip steak turkey pastrami beef pork. Bacon ground round shank landjaeger salami corned beef swine shankle beef ribs porchetta. Shoulder flank beef ribs doner jerky filet mignon sirloin rump fatback sausage boudin. Chuck prosciutto corned beef jowl, t-bone ham turducken drumstick pork belly salami cow. Frankfurter picanha tail shankle beef flank.',
                    'comments': [
                        { 'message': 'Nice post!' },
                        { 'message': 'Very meaty' }
                    ]
                }
            ],
            showComments: false
        }
    },
    methods: {
        compiledMarkdown: function (contents) {
            return marked(contents, { sanitize: true })
        },
        toggleComments: function () {
            this.showComments = !this.showComments;
        }
    }
}
</script>

<style>
#blogposts {
    padding: 10px;
}

#blogposts div div p {
    margin: 10px;
}
</style>