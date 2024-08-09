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

// Carregar tarefas do local storage
const loadTasksFromLocalStorage = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

// Salvar tarefas no local storage
const saveTasksToLocalStorage = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasksFromLocalStorage());
  const [newTaskContent, setNewTaskContent] = useState("");
  const [inputError, setInputError] = useState(false);

  const addTask = () => {
    // Evita a adição de tarefas vazias
    if (newTaskContent.trim() === "") {
      setInputError(true);
      return;
    }
    const newTask: Task = {
      id: Date.now(),
      content: newTaskContent,
      status: "pending", // Definição do status inicial
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTaskContent("");
    saveTasksToLocalStorage(updatedTasks);
    setInputError(false);
  };

  const removeTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleStatusChange = (taskId: number, newStatus: Task["status"]) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };
  // Renderização condicional dos botões
  const renderButtons = (task: Task) => {
    return (
      <>
        {task.status !== "completed" && (
          <Button
            onClick={() => handleStatusChange(task.id, "completed")}
            variant="contained"
            color="success"
          >
            Marcar como Concluída
          </Button>
        )}
        {task.status !== "incomplete" && (
          <Button
            onClick={() => handleStatusChange(task.id, "incomplete")}
            variant="contained"
            color="warning"
          >
            Marcar como Incompleta
          </Button>
        )}
        <Button
          onClick={() => removeTask(task.id)}
          variant="contained"
          color="error"
        >
          Remover Tarefa
        </Button>
      </>
    );
  };

  return (
    <Box
      sx={{
        padding: 2,
        background: (theme) => theme.palette.background.default,
        border: 2,
        borderColor: (theme) => theme.palette.divider,
        borderRadius: 2,
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
        error={inputError} // Define o erro
        helperText={inputError ? "Campo obrigatório" : ""} // Mensagem de erro
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: inputError ? "red" : undefined, // Cor da borda em erro
            },
            "&:hover fieldset": {
              borderColor: inputError ? "red" : "#0000ff", // Cor da borda ao passar o mouse em erro
            },
            "&.Mui-focused fieldset": {
              borderColor: inputError ? "red" : "#0084ff", // Cor da borda quando focado em erro
            },
          },
        }}
      />
      <Button
        onClick={addTask}
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Adicionar Tarefa
      </Button>

      <Grid container spacing={2} sx={{ marginTop: 1 }}>
        {["pending", "completed", "incomplete"].map((status) => (
          <Grid item xs={12} sm={4} key={status}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
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
                      borderRadius: 1,
                      boxShadow: 2,
                      borderColor: (theme) => theme.palette.divider,
                    }}
                  >
                    <CardContent>
                      <Typography variant="body1">{task.content}</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          marginTop: 1,
                        }}
                      >
                        {renderButtons(task)}
                      </Box>
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
