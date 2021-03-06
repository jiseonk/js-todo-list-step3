import { api } from '../../etc/api.js';
import { teamId } from '../todo.js';
import { loadTodo } from '../loadTodo.js';

export const addMember = async (target) => {
  const result = prompt('새로운 팀원 이름을 입력해주세요');
  if (result === null) return;

  const memberName = {
    name: result,
  };

  await api.addMember(teamId, memberName);

  loadTodo();
};
