export default interface TodoProps{
    text: string | undefined;
    id: number | undefined;
    completed: boolean | undefined;
    setTodos: React.Dispatch<React.SetStateAction<{}[]>>;
}