import Question from './Question';

const QuestionList = ({...props}) => {
    const {questions} = props
    return(
        <div className="questions">
        {
            questions.map(question => {
                    return <Question question={question} key={question.id} {...props} />

            })
        }
    </div>
    )

}

export default QuestionList