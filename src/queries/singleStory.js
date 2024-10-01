export const singleStory = `
query singleStory {
  story(where: {id: "cm1osh93z0xtb07l2xzt5t70z"}) {
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