/* eslint-disable import/prefer-default-export */
export default function toggleStatus(task) {
  if (task.completed === false) {
    if ((task.completed = true)) return true;
  } else {
    if ((task.completed = false)) return true;
  }
  return false;
}
