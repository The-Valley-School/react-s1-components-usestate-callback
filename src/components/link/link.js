import './link.css';

const Link = (props) => {
    return (
        <a className='link' href={ props.link }>Ir a { props.name }</a>
    );
}

export default Link;