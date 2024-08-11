import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

const TaskTable: React.FC = () => {
  // Sample data
  const tasks = [
    { task: 'Design UI', assignee: 'Alice', dueDate: '2024-08-15', status: 'In Progress' },
    { task: 'Develop Backend', assignee: 'Bob', dueDate: '2024-08-20', status: 'Not Started' },
    { task: 'Write Tests', assignee: 'Charlie', dueDate: '2024-08-22', status: 'Completed' },
  ];

  return (
    <TableContainer p={6}>
      <Table variant="simple" p={3}>
        <Thead>
          <Tr>
            <Th>Task</Th>
            <Th>Assignee</Th>
            <Th>Due Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task, index) => (
            <Tr key={index}>
              <Td>{task.task}</Td>
              <Td>{task.assignee}</Td>
              <Td>{task.dueDate}</Td>
              <Td>{task.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
