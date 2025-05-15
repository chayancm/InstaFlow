import { Button } from "@/components/ui/button";
import { useDeleteAutomation } from "@/hooks/use-automations";
import { Trash2 } from "lucide-react";
import React from "react";

interface DeleteAutomationProps {
  id: string;
}

const DeleteAutomation: React.FC<DeleteAutomationProps> = ({ id }) => {
  console.log("Called delete automation", id);
  const { isPending, mutate } = useDeleteAutomation();

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    mutate({ id });
  };

  return (
    <Button
      variant="destructive"
      size="sm"
      className="bg-red-600 hover:bg-red-700 text-white"
      onClick={handleDelete}
      disabled={isPending}
    >
      <Trash2 className="h-4 w-4 mr-1" /> Delete
    </Button>
  );
};

export default DeleteAutomation;
