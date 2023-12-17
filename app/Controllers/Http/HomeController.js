class HomeController {
  async index({ view }) {
    return view.render('root')
  }
}

module.exports = HomeController