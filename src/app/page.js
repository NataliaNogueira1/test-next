'use client';

export default async function Tasks({onTaskClick, onDeleteTaskClick}) {
  const tasks = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  return(
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map ((task) => (
        <li key={task.id} className="flex gap-2">
          <button onClick={() => onTaskClick(task.id)}
            className={`!bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md ${
            task.isCompleted && "line-through"}`}>
            {task.isCompleted && <span>✔</span>}
            {task.title}
          </button>
          <button
          onClick={() => onDeleteTaskClick(task.id)}
          className="text-red-500 hover:text-red-700"
          title="Excluir tarefa"
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
}
  