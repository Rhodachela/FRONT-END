import React from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";


export default function ErrorBox({ message, onRetry }) {
  return (
    <Alert variant="destructive" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
      <div>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {message || "Something went wrong."}
        </AlertDescription>
      </div>

      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          Retry
        </Button>
      )}
    </Alert>
  );
}
