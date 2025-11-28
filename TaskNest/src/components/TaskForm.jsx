import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Toast from "./Toast"; // adjust path

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTask = task.trim();

    // --- VALIDATIONS ---
    if (!trimmedTask) {
      setToast({ message: "Please enter a task", type: "error" });
      return;
    }

    if (/^\d/.test(trimmedTask)) {
      setToast({ message: "Task cannot start with a digit", type: "error" });
      return;
    }

    if (trimmedTask.length < 4) {
      setToast({
        message: "Task must be at least 4 characters long",
        type: "error",
      });
      return;
    }

    if (/[^a-zA-Z\s]/.test(trimmedTask)) {
      setToast({
        message: "Task can only contain letters and spaces",
        type: "error",
      });
      return;
    }

    // --- ADD TASK ---
    onAdd({
      text: trimmedTask,
      priority,
      category,
      completed: false,
    });

    setTask("");
    setPriority("Medium");
    setCategory("General");

    setToast();
  };

  return (
    <Card className="mb-4">
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          {/* Task Input */}
          <Input
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          {/* Dropdown Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Priority */}
            <Select value={priority} onValueChange={setPriority}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>

            {/* Category */}
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="Work">Work</SelectItem>
                <SelectItem value="Personal">Personal</SelectItem>
              </SelectContent>
            </Select>

            {/* Add Button */}
            <Button type="submit" className="sm:w-auto w-full flex-shrink-0">
              Add Task
            </Button>
          </div>

          {/* Toast */}
          {toast && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
              duration={2000}
            />
          )}
        </form>
      </CardContent>
    </Card>
  );
}
