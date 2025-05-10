'use client';

import { useEffect, useState } from 'react';

export default function List(){

  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=10')
      .then(res => res.json())
      .then(data => setAlunos(data.users));
  }, []);

  return(
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {alunos.map ((aluno) => (
        <li key={aluno.id} className="flex gap-2">
          <button
            className="!bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md">
            {aluno.firstName}
          </button>
          <button
          className="text-red-500 hover:text-red-700"
          title="Excluir tarefa"
          >
            👑
          </button>
          <button
          className="text-red-500 hover:text-red-700"
          title="Excluir tarefa"
          >
            🗑️
          </button>
          <button
          className="text-red-500 hover:text-red-700"
          title="Excluir tarefa"
          >
            🧧
          </button>
        </li>
      ))}
    </ul>
  );
}
  