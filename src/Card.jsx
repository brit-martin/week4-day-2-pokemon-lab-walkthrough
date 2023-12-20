import './Card.css'


function Card(props){




    return(
        <div className={'card'}>
            {props.pokemon}
        </div>
    )
}

export default Card