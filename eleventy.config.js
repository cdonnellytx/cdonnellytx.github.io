const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const timeToRead = require('eleventy-plugin-time-to-read')
const includeDrafts = false

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 * @returns {{ dir: Record<string, string?>}}
 */
module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
    eleventyConfig.addPlugin(syntaxHighlight)
    eleventyConfig.addPlugin(timeToRead)

    /**
     * @param {import('@11ty/eleventy').collectionApi} collectionApi
     */
    eleventyConfig.addCollection('posts', collectionApi => {
        return collectionApi.getFilteredByGlob([
            "blog/_posts/*",
            ...(includeDrafts ? ["blog/_drafts/*"] : []),
        ]).filter(p => p.data.published !== false).reverse()
    })

    eleventyConfig.addPassthroughCopy('.well-known')
    eleventyConfig.addPassthroughCopy('zalgo')

    const unhandled = {
        // Site settings
        "title": "Finally, a blog!",
        "description": "Because the Internet doesn't have enough blogs already.",
        "url": "http://www.chrisdonnelly.com",
        "baseurl": "",
        "author": "Chris R. Donnelly",
        "email": "blog@chrisdonnelly.com",
        "lang": "en-US",
        "repository": "cdonnellytx/cdonnellytx.github.io",

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

        // Build settings
        "exclude": [
            ".editorconfig",
            "Gemfile",
            "Gemfile.lock",
            "LICENSE",
            "README.md",
            ".vscode"
        ]
    }

    return {
        dir: {
            input: "./",
            output: "./_site",
            layouts: "./_layouts"
        }
    }
}


