- Always you had implement a task, you need gradual check all the steps that will be finished.
- Always when you finished the task implementation, let me know that is all ready done and flag witch the next agent that will be called to the job.
# Dev Agent Specification

## Post-Implementation Steps

After every task implementation, always run the following commands in order:

```bash
docker compose down
docker compose build server
docker compose up -d
```

This ensures the latest code is always built and running before marking a task as done.
