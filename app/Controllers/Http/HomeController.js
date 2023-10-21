class HomeController {
    async index ({ auth, view }) {
      const user = await auth.getUser()
  
      return view.render('root', {
        user: user || null
      })
    }
  }
  
  module.exports = HomeController