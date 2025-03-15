export interface ITask{
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    priority: "low" | "medium" | "high";
    dueDate: string;
  };
  