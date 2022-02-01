const octokit = require('./octokit');

module.exports = class Issue {

  constructor(opts = {}) {

    const {
      fullRepositoryName,
      title,
      body,
      labels,
      assignees,
      state,
      milestone,
      issueNumber
    } = opts;

    this._fullRepositoryName = fullRepositoryName;
    this._title = title;
    this._body = body;
    this._labels = labels;
    this._assignees = assignees;
    this._issueNumber = issueNumber;
    this._state = state || 'open';
    this._milestone = milestone;
  }

  onRepository(repository = null) {
    this._fullRepositoryName = repository;
    return this;
  }

  onIssueNumber(issueNumber = null) {
    this._issueNumber = issueNumber;
    return this;
  }

  withTitle(title = "") {
    this._title = title;
    return this;
  }

  withDescription(description = "") {
    this._body = description;
    return this;
  }

  withLabels(labels = []) {
    this._labels = labels;
    return this;
  }

  withAssignees(assignees = []) {
    this._assignees = assignees;
    return this;
  }

  withMilestone(milestone = null) {
    this._milestone = milestone;
    return this;
  }

  withState(state = 'open') {
    this._state = state;
    return this;
  }

  async create() {

    const [owner, repo] = this._fullRepositoryName.split('/');

    this._owner = owner;
    this._repo = repo;

    const createData = {
      title: this._title,
      body: this._body,
      assignees: this._assignees,
      labels: this._labels,
      milestone: this._milestone,
    };

    return octokit.request(`POST /repos/${this._owner}/${this._repo}/issues`, createData);
  }

  async update() {

    if (!this._issueNumber) {
      console.log('You need to specify the issue number before updating it');
      return;
    }

    const [owner, repo] = this._fullRepositoryName.split('/');

    this._owner = owner;
    this._repo = repo;

    const updateData = {
      title: this._title,
      body: this._body,
      assignees: this._assignees,
      labels: this._labels,
      state: this._state,
      milestone: this._milestone,
    };

    return octokit.request(`PATCH /repos/${this._owner}/${this._repo}/issues/${this._issueNumber}`, updateData);
  }
}