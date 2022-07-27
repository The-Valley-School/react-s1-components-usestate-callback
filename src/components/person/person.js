const Person = (props) => {
    console.log("Ejecutamos render de Person");

    return (
        <>
            <p>El nombre es: {props.person.name}</p>
            <p onClick={ () => props.makeOlderCallback() }>Su edad es: {props.person.age} </p>
        </>
    );
}
 
export default Person;