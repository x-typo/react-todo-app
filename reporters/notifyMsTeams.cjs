module.exports = {
  targets: [
    {
      name: "teams",
      condition: "always",
      inputs: {
        url: process.env.TEAMS_WEBHOOK_URL,
        publish: "test-summary-slim",
        title: "React Todo App - Test Results",
        title_link: "https://github.com/x-typo/react-todo-app",
        width: "full",
      },
      extensions: [
        {
          name: "hyperlinks",
          condition: "always",
          inputs: {
            links: [
              {
                text: "GitHub - x-typo",
                url: "https://github.com/x-typo",
              },
              {
                text: "Repo - React Todo App",
                url: "https://github.com/x-typo/react-todo-app",
              },
              {
                text: "Workflow Runs",
                url: "https://github.com/x-typo/react-todo-app/actions",
              },
            ],
          },
        },
      ],
    },
  ],
  results: [
    {
      type: "junit",
      files: ["../test-results/junit.xml"],
    },
  ],
};
