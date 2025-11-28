import React, { useState } from "react"; // <-- add useState
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useFetchTasks } from "./hooks/useFetchTasks";
import { useAddTask } from "./hooks/useAddTask";
import { useUpdateTask } from "./hooks/useUpdateTask";
import { useDeleteTask } from "./hooks/useDeleteTask";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ProgressTracker from "./components/ProgressTracker";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ErrorBox from "./components/ErrorBox";
import Toast from "./components/Toast";

import "./styles/index.css";

const queryClient = new QueryClient();

function InnerApp() {
  const [toast, setToast] = useState(null); // <-- useState works now
  const { data: tasks = [], isLoading, isError, refetch } = useFetchTasks();
  const addTask = useAddTask();
  const updateTask = useUpdateTask();
  const deleteTask = useDeleteTask();

  const handleAdd = (task) =>
    addTask.mutate(task, {
      onSuccess: () => {
        setToast({ message: "Task added successfully!", type: "success" });
        console.log("Task added:", task);
      },
      onError: () => {
        setToast("Failed to add task!"); // optional: show error toast
      },
    });

  const handleToggle = (task) => {
    updateTask.mutate(
      {
        id: task.id,
        updatedTask: { ...task, completed: !task.completed },
      },
      {
        onSuccess: () =>
          setToast({
            message: task.completed
              ? "Task marked as incomplete!"
              : "Task completed successfully!",
            type: "success",
          }),
        onError: () =>
          setToast({ message: "Failed to update task!", type: "error" }),
      }
    );
  };

  const handleDelete = (taskId) => {
    deleteTask.mutate(taskId, {
      onSuccess: () => {
        setToast({ message: "Task deleted successfully!", type: "success" });
      },
      onError: () => {
        setToast({ message: "Failed to delete task!", type: "error" });
      },
    });
  };

  return (
    <div className="container mx-auto p-2 flex flex-col items-center space-y-2">
      <header className="flex flex-col items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-5xl font-bold m-0">Task Nest</h1>
          <img src="/study.png" alt="Task Nest Logo" className="w-20 h-20" />
        </div>
        <p className="text-gray-600 dark:text-gray-600 mt-0 text-center">
          Your Favorite Task Tracker
        </p>
      </header>

      <div className="w-full max-w-xl">
        <TaskForm
          onAdd={handleAdd}
          showToast={(msg, type) => setToast({ message: msg, type })}
        />
      </div>

      {isLoading && <LoadingSkeleton rows={4} />}
      {isError && (
        <ErrorBox message="Failed to load tasks." onRetry={refetch} />
      )}

      {!isLoading && !isError && (
        <div className="w-full max-w-xl space-y-6">
          <TaskList
            tasks={tasks}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
          <ProgressTracker tasks={tasks} />
        </div>
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
          duration={2000}
        />
      )}
    </div>
  );
}

export default function AppWithProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <InnerApp />
    </QueryClientProvider>
  );
}
