export default interface TodoProps{
    todos: {
        text?: string;
        id?: number;
        completed?: boolean;
    }[];
    setTodos: React.Dispatch<React.SetStateAction<{}[]>>;
    text: string | undefined;
    id: number | undefined;
    completed: boolean | undefined;
    todo: {
        text?: string | undefined;
        id?: number | undefined;
        completed?: boolean | undefined;
    }
}