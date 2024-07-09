/**
 * @returns {Record<string, any>}
 */
module.exports = {
    // Site settings
    "title": "Finally, a blog!",
    "description": "Because the Internet doesn't have enough blogs already.",
    "url": "http://www.chrisdonnelly.com",
    "baseurl": "",
    "author": "Chris R. Donnelly",
    "email": "blog@chrisdonnelly.com",
    "lang": "en-US",
    "repository": "cdonnellytx/cdonnellytx.github.io",

    "github": {
        "url": process.env.PAGES_BASE_URL ?? ""
    },

    // UX
    "remote_theme": "StartBootstrap/startbootstrap-clean-blog-jekyll",
    "image": "/assets/img/bg/home.jpg",
    "permalink": "/:categories/:year/:month/:day/:title",
    "feed_url": "/feed.xml",

    // Social
    // "twitter_username": "cdonnellytx",
    "github_username": "cdonnellytx",
    // "facebook_username": "cdonnellytx",
    "stackoverflow_link": "users/17152/chris-r-donnelly",
    "mastodon_link": "hachyderm.io/@cdonnellytx",
}

