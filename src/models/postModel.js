let posts = [{ id: 1, title: 'Teste', content: 'lorem inpsum...', createAt: new Date(), updateAt: new Date() }]

// Post { id, title, content, createAt, updatedAt }

const postModel = {
    getAllPosts() {
        return posts
    },

    getPostByID(id) {
        return posts.find(post => post.id === id)
    },

    createPost(title, content) {
        const post = {
            id: Date.now().toString(),
            title: title,
            content: content,
            createAt: new Date(),
            updateAt: new Date()
        }
        return post
    },

    savePost(post) {
        posts.unshift(post)
    },

    updatePost(id, updatePost) {
        const index = posts.findIndex(post => post.id === id)
        posts[index] = { ...posts[index], ...updatePost, updateAt: new Date() }
    },

    deletePost(id) {
        posts = posts.filter(post => post.id !== id)
    }
}

module.exports = postModel