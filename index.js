// Arrays to keep track of each task's state

//create a new task object by addin a title and a description.
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    //logging the state of the (in)completed stask
    logTaskState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    // Mark a task as complete by setting the task's status in the `task.complete` array to `true`
    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
}

// Driver Code
const task1 = newTask("Meditate", "Practice Vipassana for 1 hour");
const task2 = newTask(
  "Clean Cat Litter",
  "Remove anything that was left during the night"
);
const task3 = newTask(
  "Take the dog out",
  "Go run hills and do some obedience training"
);

const tasks = [task1, task2, task3];

task1.logTaskState(); // meditate has not be done
task1.markCompleted(); // complete meditation
task1.logTaskState(); // meditation has been completed

console.log(tasks);
