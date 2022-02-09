# git-issue

Create issues on your GitHub repository using Node.js

## Usage

First of all, we need to create a personal token following this [tutorial](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Once we're done, we need to copy <code>.env.example</code> and paste as <code>.env</code>.

On the <code>GITHUB_PERSONAL_TOKEN</code> env variable we paste our personal GitHub token.

After all that you can starting using it:

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
