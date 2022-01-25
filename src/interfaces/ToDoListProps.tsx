export default interface ToDoListProps{
    todos: {
        text?: string;
        id?: number;
        completed?: boolean;
    }[];
    setTodos: React.Dispatch<React.SetStateAction<{}[]>>;
};