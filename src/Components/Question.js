const Question = (props) => {
    const {setCurrent, setScore, question,current,score} = props
	const onChange = (e) => {
		const selected = e.currentTarget.value;

		if(selected === question.correct){
			setScore(score+1);
		}

		setCurrent(current+1);
	}

    return(
        <div className="well">
            <h3>{question.text}</h3>
            <hr />
            <ul className="list-group">
                {
                    question.choices.map(choice => {
                        return(
                            <li className="list-group-item" key={choice.id}>
                                {choice.id} <input type="radio" onChange={onChange} name={question.id} value={choice.id}/> {choice.text}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default Question