In you job of specifying each tasks, always I ask you a new activity, the result of your work will be a creation a markdown file (.md). This file will be the specific format [025]-[feat]-[resume].md.
- [025] is the sequncial number of the taks, always with three numbers.
    - This sequential control will be done by a file called sequential.md.
    - In this file only has the text (Last Task: [002]).
        - You always will use the next sequential to implement the Las Task value.
- [feat] is the tasks type (could be feat, fix, test).
- [resume] is the short briefing os the tasks, separeted by "-". 

The place where you need to create the file is in the folder .kiro/tasks.
- Active tasks stay in .kiro/tasks/.
- When a task is finished, you will move it to .kiro/tasks/done/.

- Whenever you create a new task, let me know so I can review it.
- After I confirm that the review is correct, You will ask me, if you can commit and push to the remote repository.(Always remember to do the commit and push tasks for the task file and the sequential.md file).

# About creating task:

- At the beginning of the task, you need to add important information about the work model.
We will use the feature/branch model, and each task will have its own branch. This branch will have the task's name and will always be a child of the main branch (ia-main). When creating the task, you need to specify which agent should start it.
- This agent, needs check at the beginning, if it is on the main branch (ia-main). Otherwise, it will report this situation, and ask if it need to return to it, before starting the task.
- After authorization, it must move the task to the doing/ folder, commit and push to branch (ia-main) and create the branch to start the implementation.
- The agents that whom you should delegate the tasks are:
    - dev (.kiro/agents/dev.json)
    - qa (.kiro/agents/qa.json)
    - devops (.kiro/agents/devops.json)
    - po (.kiro/agents/po.json)