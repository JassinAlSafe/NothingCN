"use client";

import { Button } from "@/components/ui/button";
import { useToastWithHelpers } from "@/components/ui/toast";

export function TestToast() {
  const { toast } = useToastWithHelpers();

  return (
    <div className="flex gap-2 p-4">
      <Button 
        onClick={() => toast.success({ title: "Success!", description: "Theme applied successfully" })}
        size="sm"
      >
        Test Success Toast
      </Button>
      <Button 
        onClick={() => toast.error({ title: "Error!", description: "Failed to apply theme" })}
        size="sm"
        variant="destructive"
      >
        Test Error Toast
      </Button>
    </div>
  );
}