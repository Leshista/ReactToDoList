export default interface FormProps{
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    setTodos: React.Dispatch<React.SetStateAction<{}[]>>;
    todos: {}[];
}