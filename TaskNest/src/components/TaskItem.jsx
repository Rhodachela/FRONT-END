import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function TaskItem({ task, onToggle, onDelete }) {
  const priorityColors = {
    High: "bg-red-500",
    Medium: "bg-yellow-500",
    Low: "bg-green-500",
  };

  return (
    <div
      className="
        w-full flex items-center justify-between 
        p-3 rounded-lg border shadow-sm bg-card
      "
    >
      {/* Left side: checkbox + text */}
      <div className="flex items-start gap-3">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggle(task)}
        />

        <div className="flex flex-col">
          <span
            className={`text-sm ${
              task.completed ? "line-through text-muted-foreground" : ""
            }`}
          >
            {task.text}
          </span>

          <div className="flex gap-2 mt-1">
            <Badge className={`${priorityColors[task.priority]} text-white`}>
              {task.priority}
            </Badge>

            <Badge variant="secondary">{task.category}</Badge>
          </div>
        </div>
      </div>

      {/* Right side: two buttons */}
      <div className="flex gap-2">
        {/* Complete / Undo Button */}
        <Button
          size="sm"
          variant={task.completed ? "secondary" : "default"}
          onClick={() => onToggle(task)}
        >
          {task.completed ? "Undo" : "Complete"}
        </Button>

        {/* Delete Button */}
        <Button
          size="sm"
          variant="destructive"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
