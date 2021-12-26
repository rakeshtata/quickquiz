const Scorebox = ({...props}) => {
    const {current,questions,score} = props
    return(
        <div className="well">
            Question {current} out of {questions.length} <span className="pull-right"><strong>Score: {score}</strong></span>
        </div>
    )

}

export default Scorebox