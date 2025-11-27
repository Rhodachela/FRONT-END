import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Toast from "./Toast"; // your custom Toast component
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
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) {
      setToastMessage("Please enter a task!");
      return;
    }

    onAdd({
      text: task,
      priority,
      category,
      completed: false,
    });

    setTask("");
    setPriority("Medium");
    setCategory("General");
  };

  return (
    <>
      <Card className="mb-1">
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
          </form>
        </CardContent>
      </Card >

      {/* Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage("")}
        />
      )}
    </>
  );
}
