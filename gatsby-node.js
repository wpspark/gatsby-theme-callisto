const axios = require('axios');
const createPosts = require(`./src/routing/create-posts`)
const createCategories = require(`./src/routing/create-categories`)

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createCategories({ actions, graphql })
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const url = `${process.env.protocol}://${process.env.baseUrl}`;
  const result = await axios.get(`${url}/wp-json/spark/sitedata`);
  const data = result.data;

  const dataObject = {
    "favicon": data.favicon,
    "logo": data.logo
  };

  const nodeContent = JSON.stringify(dataObject)
  const nodeMeta = {
    id: createNodeId(`spark-site-info`),
    parent: null,
    children: [],
    internal: {
      type: `sparkData`,
      content: nodeContent,
      contentDigest: createContentDigest(dataObject)
    }
  }

  const node = Object.assign({}, dataObject, nodeMeta)
  actions.createNode(node)
}