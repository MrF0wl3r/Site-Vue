
<template>
    <div id="blogposts">
        <div v-for="post in posts">
            <h1>{{ post.title }}</h1>
            <hr />
            <div id="postcontent" v-html="compiledMarkdown(post.content)"></div>
            <div id="postcomments">
                <p v-on:click="toggleComments">
                    Comments ({{ post.comments.length }})
                </p>
            </div>
            <div v-if="showComments" v-for="comment in post.comments">
                <div id="comment">
                    <p id="commentname" class="uppercase">{{ comment.name }}</p>
                    <p id="commentmessage">{{ comment.message }}</p>
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
                        { 'name': 'Bob', 'message': 'Nice post!' },
                        { 'name': 'Dylan', 'message': 'Very meaty' }
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

#postcontent p {
    margin: 10px;
}

#postcomments {
    background-color: #4f5660;
    color: #cdd1d6;
}

#postcomments p {
    padding: 4px;
}

#comment {
    margin-top: 10px;
    margin-left: 10px;
    border: 1px solid #4f5660;
}

#commentname {
    background-color: #4f5660;
    color: #cdd1d6;
    padding: 4px;
}

#commentmessage {
    padding: 4px;
}
</style>