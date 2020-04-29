const PostsQuery = `{
  posts: allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
    ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          category
          date_timestamp: date
          date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
          description
          title
        }
        exerpt(pruneLenght:5000)
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest
  }))

const queries = [
  {
    query: PostsQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    inexName: 'Posts',
    settings: {
      attributesToSnippet: ['excerpt:20']
    },
    matchFields: ['slug', 'modified'],
  }
]

module.exports = queries
