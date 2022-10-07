const Department = (props) => {
    console.log(props);
    return (
        <>
        <h1>Department Information</h1>
        <p>Dept Name: {props.dept }</p>
        <p>Doctor: {props.doctor }</p>
        <p>Nurse: {props.nurse }</p>
        </>
    );
}
export default Department;