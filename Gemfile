# frozen_string_literal: true

source "https://rubygems.org"
gem "github-pages", "~> 223", group: :jekyll_plugins
gem "jekyll-theme-clean-blog", "~> 4.0"
gem "minimal-mistakes-jekyll", "~> 4.24"

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }

# Needed to satisfy security warnings
gem "addressable", ">= 2.8.0"
gem "kramdown", ">= 2.3.1"
gem "nokogiri", ">= 1.12.5"
gem "rubyzip", "~> 2.3.2"

gem "webrick", "~> 1.7"   # REQUIRED for ruby 3.0

# Running on Windows
if Gem.win_platform?
    gem 'wdm', '~> 0.1.1'
    # timezone? hmm.
    gem 'tzinfo-data'
end
