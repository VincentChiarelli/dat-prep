// Lightweight study-planner module backed by localStorage.
// Key: "dat-planner". Dispatches "dat-planner-change" on every write so
// React components can re-render without polling.

const STORAGE_KEY = "dat-planner";
const CHANGE_EVENT = "dat-planner-change";

export interface Task {
  id: string;
  text: string;
  date?: string; // ISO date YYYY-MM-DD, optional
  done: boolean;
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function dispatch(): void {
  if (isBrowser()) {
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }
}

function load(): Task[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Task[]) : [];
  } catch {
    return [];
  }
}

function save(tasks: Task[]): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    // localStorage full or unavailable
  }
  dispatch();
}

export function getTasks(): Task[] {
  return load();
}

export function addTask(text: string, date?: string): Task {
  const tasks = load();
  const task: Task = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    text: text.trim(),
    date,
    done: false,
  };
  tasks.push(task);
  save(tasks);
  return task;
}

export function toggleTask(id: string): void {
  const tasks = load();
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.done = !task.done;
    save(tasks);
  }
}

export function deleteTask(id: string): void {
  const tasks = load().filter((t) => t.id !== id);
  save(tasks);
}
