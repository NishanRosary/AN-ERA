const { spawn } = require("child_process");

const commands = [
  {
    name: "backend",
    command: "npm",
    args: ["--prefix", "backend", "run", "dev"]
  },
  {
    name: "frontend",
    command: "npm",
    args: ["--prefix", "frontend", "start"]
  }
];

const children = commands.map((entry) => {
  const child = spawn(entry.command, entry.args, {
    stdio: "inherit",
    shell: true
  });

  child.on("exit", (code) => {
    if (code !== 0) {
      console.error(`${entry.name} exited with code ${code}`);
    }
  });

  return child;
});

function shutdown() {
  children.forEach((child) => {
    if (!child.killed) {
      child.kill();
    }
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
