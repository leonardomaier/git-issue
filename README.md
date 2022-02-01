# git-issue

Create issues on your GitHub repository using Node.js

## Usage

First of all, you need to create a personal token following this [link](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Once you're done, you can start using it:

```js
const Issue = require('./issue');

const issue = new Issue();

for (let i = 0; i <= 2; i += 1) {
  issue
    .onRepository('leonardomaier/lab')
    .withTitle(`testing #${i}`)
    .withDescription('hello')
    .withAssignees(['leonardomaier'])
    .withLabels(['help wanted', 'good first issue'])
    .create();
}
```