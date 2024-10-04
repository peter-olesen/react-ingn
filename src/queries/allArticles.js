export const allArticles = `
    query allArticles {
        stories (first: 100) {
            storyTitle
            storySlug
            byline
            category
            datePublished
            id
            storyContent
            storyImage {
                url
            }
        }
    }
`