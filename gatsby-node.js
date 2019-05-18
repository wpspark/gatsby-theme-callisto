const createPosts = require(`./src/routing/createPosts`)
// const createPages = require(`./src/routing/createPages`)
// const createUsers = require(`./src/routing/createUsers`)
// const createCategories = require(`./src/routing/createCategories`)
// const createTags = require(`./src/routing/createTags`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  // await createPages({ actions, graphql })
  // await createUsers({ actions, graphql })
  // await createCategories({ actions, graphql })
  // await createTags({ actions, graphql })
}