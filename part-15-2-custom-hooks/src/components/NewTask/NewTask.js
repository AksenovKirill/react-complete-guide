import Section from '../UI/Section';
import TaskForm from './TaskForm';
import {useHttp} from "../../hooks/useHttp";
import {BASE_URL} from "../../const";

const NewTask = (props) => {
    const {isLoading, error, sendRequest: sendTask} = useHttp()

    const enterTaskHandler = async (taskText) => {
        sendTask({
            url: BASE_URL, method: "POST", body: {text: taskText},
            headers: {
                'Content-Type': 'application/json',
            }
        },)

        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = {id: generatedId, text: taskText};

        props.onAddTask(createdTask);
    }


    return (<Section>
        <TaskForm onEnterTask={enterTaskHandler} loading={isLoading}/>
        {error && <p>{error}</p>}
    </Section>);
};

export default NewTask;
