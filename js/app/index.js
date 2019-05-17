var tasks = [
    {
        id: "raanasid",
        name: "Setup task"
    }
];

function addTask(task){
    tasks.push(task);
}

module.exports = {
    tasks,
    addTask
}