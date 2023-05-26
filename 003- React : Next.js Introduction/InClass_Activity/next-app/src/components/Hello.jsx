// The props here are being imported from the main file
function Hello(props) {
    return (
        <div>
            Hello World from {props.name} from {props.college}
        </div>
    )
}

export default Hello;