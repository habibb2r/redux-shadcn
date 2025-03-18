export interface ITask{
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    priority: "Low" | "Medium" | "High";
    dueDate: string;
  };

  export interface IUser{
    id: string;
    name: string;
  }
  