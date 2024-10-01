export const allStories = `
    query allStories {
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