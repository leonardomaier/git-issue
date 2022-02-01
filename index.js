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

const defaultIssueConfig = issue
  .onRepository('leonardomaier/lab')
  .withTitle(`updated issue`)
  .withDescription('updated hello')
  .withAssignees(['leonardomaier'])
  .withState('closed')
  .withLabels(['help wanted', 'good first issue', 'update label']);

defaultIssueConfig
  .onIssueNumber(1)
  .update();

defaultIssueConfig
  .onIssueNumber(2)
  .update();

defaultIssueConfig
  .onIssueNumber(3)
  .update();

  defaultIssueConfig
  .onIssueNumber(4)
  .update();

defaultIssueConfig
  .onIssueNumber(5)
  .update();

defaultIssueConfig
  .onIssueNumber(6)
  .update();