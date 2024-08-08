import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";

// Tipos para as tarefas
type Task = {
  id: number;
  content: string;
  status: "pending" | "completed" | "incomplete";
};

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskContent, setNewTaskContent] = useState("");

  const addTask = () => {
    if (newTaskContent.trim() === "") return; // Evita a adição de tarefas vazias
    const newTask: Task = {
      id: Date.now(),
      content: newTaskContent,
      status: "pending", // Definição do status inicial
    };
    setTasks([...tasks, newTask]);
    setNewTaskContent("");
  };

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleStatusChange = (taskId: number, newStatus: Task["status"]) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <Box
      sx={{
        padding: 2,
        background: (theme) => theme.palette.background.default,
        border: 2,
        borderColor: (theme) => theme.palette.divider,
      }}
    >
      <Typography variant="h3" align="center" sx={{ marginBottom: 2 }}>
        To-Do List
      </Typography>
      <TextField
        value={newTaskContent}
        onChange={(e) => setNewTaskContent(e.target.value)}
        label="Digite uma nova tarefa"
        fullWidth
      />
      <Button onClick={addTask} variant="contained" sx={{ marginTop: 2 }}>
        Adicionar Tarefa
      </Button>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {["pending", "completed", "incomplete"].map((status) => (
          <Grid item xs={12} sm={4} key={status}>
            <Typography variant="h6" gutterBottom>
              {status === "pending"
                ? "Em andamento"
                : status === "completed"
                ? "Concluídas"
                : "Incompletas"}
            </Typography>
            <Box sx={{ maxHeight: "400px", overflowY: "auto", padding: 1 }}>
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <Card
                    key={task.id}
                    sx={{
                      marginBottom: 2,
                      border: 1,
                      boxShadow: 3,
                      borderColor: (theme) => theme.palette.divider,
                    }}
                  >
                    <CardContent>
                      <Typography variant="body1">{task.content}</Typography>
                      <Button
                        onClick={() => handleStatusChange(task.id, "completed")}
                        variant="outlined"
                        sx={{ marginRight: 1 }}
                      >
                        Marcar como Concluída
                      </Button>
                      <Button
                        onClick={() =>
                          handleStatusChange(task.id, "incomplete")
                        }
                        variant="outlined"
                        sx={{ marginRight: 1 }}
                      >
                        Marcar como Incompleta
                      </Button>
                      <Button
                        onClick={() => removeTask(task.id)}
                        variant="outlined"
                        color="error"
                      >
                        Remover
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TaskBoard;
