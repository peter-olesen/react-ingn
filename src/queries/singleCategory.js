export const singleCategory = `
query singleCategory($category: String!) {
  stories(where: { category: $category }) {
    category
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