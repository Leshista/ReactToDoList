import ToDoListProps from "./ToDoListProps";
export default interface TodoProps extends ToDoListProps{
    text: string | undefined;
    id: number | undefined;
    completed: boolean | undefined;
    todo: {
        text?: string | undefined;
        id?: number | undefined;
        completed?: boolean | undefined;
    }
}