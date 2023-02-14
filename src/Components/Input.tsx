import './Input.css'

const Input = (props:any) => {
    return (
        <form>
            <div className='search'></div>
            <input type="text" placeholder={props.placeholder}/>
        </form>
    )
}

export default Input;