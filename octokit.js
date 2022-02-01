const { Octokit } = require("@octokit/core");

require('dotenv').config();

const { GITHUB_PERSONAL_TOKEN } = process.env;

const CustomOctokit = Octokit.defaults({
  auth: GITHUB_PERSONAL_TOKEN,
  baseUrl: "https://api.github.com"
});

const octokit = new CustomOctokit();

module.exports = octokit;