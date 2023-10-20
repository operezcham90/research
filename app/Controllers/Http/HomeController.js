class HomeController {
    async index({ auth, view }) {
        const user = await auth.getUser()
        return view.render('welcome', { username: user.username })
    }
}

module.exports = HomeController