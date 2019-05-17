const expect = require("chai").expect;
const todoApp = require("./index");

describe('todo-app', () => {
    describe('tasks', () => {
        it('should be of type array', () => {
            expect(todoApp.tasks).to.satisfy(isArray);

            function isArray(array){
                return Array.isArray(array);
            }
        });
        
        it('should always have at least one item', () => {
            expect(todoApp.tasks).length.to.be.greaterThan(0);
        });
        
        it('should always have plain object children', () => {
            expect(todoApp.tasks).to.satisfy(hasObjectChildren);

            function hasObjectChildren(array){
                return array.every(i => Object.prototype.toString.call(i) === '[object Object]');
            }
        });
    });
    
    describe('addTask', () => {
        it('should be of type function', () => {
            expect(todoApp.addTask).to.satisfy(isFunction)

            function isFunction(fun){
                return Object.prototype.toString.call(fun) === '[object Function]';
            }
        });
        
        it('should add item to tasks', () => {
            const task = {
                id: "12",
                name: "The real name"
            };
            todoApp.addTask(task);
            expect(todoApp.addTask).to.satisfy(containsNewTask)

            function containsNewTask(){
                return todoApp.tasks.filter(elem => elem.id === task.id).length > 0;
            }
        });
    });
});