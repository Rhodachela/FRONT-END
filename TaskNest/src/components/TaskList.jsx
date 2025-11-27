import React from "react";
import TaskItem from "./TaskItem";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TaskList({ tasks = [], onToggle, onDelete }) {
  const isEmpty = !tasks || tasks.length === 0;

  return (
    <Card className="w-full max-w-xl mx-auto shadow-sm">
      {/* Header */}
      <CardHeader className="px-0 py-0">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-800 text-center">
          Your Tasks
        </h2>
      </CardHeader>

      <Separator />

      {/* Card Content */}
      <CardContent className="px-4 py-1 flex flex-col gap-3">
        {/* Empty State */}
        {isEmpty && (
          <p className="text-gray-500 text-center py-6">
            No tasks yet — add one!
          </p>
        )}

        {/* Task Items */}
        {!isEmpty &&
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
      </CardContent>
    </Card>
  );
}
