const createPosts = require(`./src/routing/createPosts`)
const createCategories = require(`./src/routing/createCategories`)
// const createPages = require(`./src/routing/createpages`)
// const createUsers = require(`./src/routing/createusers`)
// const createTags = require(`./src/routing/createtags`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createCategories({ actions, graphql })
  // await createPages({ actions, graphql })
  // await createUsers({ actions, graphql })
  // await createTags({ actions, graphql })
}
