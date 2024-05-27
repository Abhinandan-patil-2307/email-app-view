module.exports = {
  apps: [
    {
      name: "my-react-app2",
      script: "npm",
      args: "start",
      cwd: "/home/ubuntu/email-app-view", // Adjust this path to the root directory of your React app
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
