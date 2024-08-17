// compare object titles alphabetically, case-insentitive
const compareByTitle = (itemA, itemB) => {
  let titleA = itemA.title.toLowerCase();
  let titleB = itemB.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0;
  }
}

module.exports = {
  // return the list of todo lists sorted by completion status and title.
  sortTodoLists(lists) {
    let done = lists.slice().filter(list => list.isDone());
    let notDone = lists.slice().filter(list => !list.isDone());
    
    let sortedDone = done.sort(compareByTitle);
    let sortedNotDone = notDone.sort(compareByTitle);
    
    return sortedNotDone.concat(sortedDone);
  },
  
  // return the list of todos in the todo list by completion status and title
  sortTodos(list) {
    let done = list.todos.slice().filter(todo => todo.isDone());
    let notDone = list.todos.slice().filter(todo => !todo.isDone());
    
    let sortedDone = done.sort(compareByTitle);
    let sortedNotDone = notDone.sort(compareByTitle);
    
    return sortedNotDone.concat(sortedDone);
  },
};