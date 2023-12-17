class HomeController {
  index({ view }) {
    return view.render('root')
  }
  register({ view }) {
    return view.render('register')
  }
  login({ view }) {
    return view.render('login')
  }
}

module.exports = HomeController