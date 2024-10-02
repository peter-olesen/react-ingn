export const singleArticle = `
query singleArticle($storySlug: String!) {
  story(where: { storySlug: $storySlug }) {
    id
    storyTitle
    storySlug
    byline
    datePublished
    storyContent
    storyImage {
      id
      url
    }
  }
}
`