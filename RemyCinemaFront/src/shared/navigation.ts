const mainRoutes = {
  home: "/",
  shop: "/shop",
  movies:"/movies",
  admin:"/admin"
};
export default {
  home: {
    init: `${mainRoutes.home}`,
  },
  shop:{
    init: `${mainRoutes.shop}`,
    item: `${mainRoutes.shop}/:id`
  },
  movies:{
    init: `${mainRoutes.movies}`,
    item: `${mainRoutes.movies}/:id`,
  },
  admin:{
    init: `${mainRoutes.admin}`,
    movies: `${mainRoutes.admin}/movies`,
    functions: `${mainRoutes.admin}/functions`,
    users:`${mainRoutes.admin}/users`,
    cinemas:`${mainRoutes.admin}/cinemas`,
    halls:`${mainRoutes.admin}/halls`,
    tickets:`${mainRoutes.admin}/tickets`,
    foods:`${mainRoutes.admin}/foods`,
    bookings:`${mainRoutes.admin}/bookings`
  },
  mainRoutes,
};
