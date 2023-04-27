interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) return new Teacher()
  else return new Director();
}

export const isDirector = (employee: Teacher | Director): boolean => employee instanceof Director;


export function executeWork(employee: Teacher | Director): void {
  if (employee instanceof Director) {
    let description = employee.workDirectorTasks();
    console.log(description);
  } else {
    let description = employee.workTeacherTasks();
    console.log(description);
  }
}

type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math' ? 'Teaching Math': 'Teaching History';
}