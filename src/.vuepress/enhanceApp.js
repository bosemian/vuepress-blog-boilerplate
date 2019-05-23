export default ({ router }) => {
  router.addRoutes([
    { path: '/', redirect: '/blog/' }
  ])
}