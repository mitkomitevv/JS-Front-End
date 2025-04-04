function attachEvents() {
    let postUrl = 'http://localhost:3030/jsonstore/blog/posts';
    let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    document.getElementById('btnLoadPosts').addEventListener('click', () => { onPostsRequest(postUrl) });
    document.getElementById('btnViewPost').addEventListener('click', () => { onViewPost(commentsUrl) });
}

async function onPostsRequest(url) {
    let data;

    try {
        let response = await fetch(url);
        data = await response.json();
    } catch {
        return;
    }

    let selectPost = document.getElementById('posts');

    for (let [key, value] of Object.entries(data)) {
        let option = document.createElement('option');

        option.textContent = value.title;
        option.value = key;

        selectPost.appendChild(option);
    }
}

async function onViewPost(url) {
    let post = document.getElementById('posts');
    let postComments;
    let postData;

    try {
        const [postResponse, commentsResponse] = await Promise.all([
            fetch('http://localhost:3030/jsonstore/blog/posts'),
            fetch(url)
        ]);

        postData = await postResponse.json();

        let commentsData = await commentsResponse.json();
        postComments = Object.values(commentsData).filter(comment => comment.postId === post.value);
    } catch {
        return;
    }

    document.getElementById('post-title').textContent = post.selectedOptions[0].textContent;
    document.getElementById('post-body').textContent = postData[post.value].body;
    
    let comments = document.getElementById('post-comments');
    comments.replaceChildren();

    for (let comment of postComments) {
        let li = document.createElement('li');
        li.textContent = comment.text;
        li.id = comment.id;

        comments.appendChild(li);
    }
}   

attachEvents();