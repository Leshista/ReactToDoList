export default interface FormProps{
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    todos: {}[];
    setTodos: React.Dispatch<React.SetStateAction<{}[]>>;
}