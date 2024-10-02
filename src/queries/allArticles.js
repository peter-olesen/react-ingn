export const allArticles = `
    query allArticles {
        stories {
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