const createPosts = require(`./src/routing/createPosts`)
// const createPages = require(`./src/Routing/createPages`)
// const createUsers = require(`./src/Routing/createUsers`)
// const createCategories = require(`./src/Routing/createCategories`)
// const createTags = require(`./src/Routing/createTags`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  // await createPages({ actions, graphql })
  // await createUsers({ actions, graphql })
  // await createCategories({ actions, graphql })
  // await createTags({ actions, graphql })
}