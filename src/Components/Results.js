const Results = ({...props}) => {

    const {score,questions} = props;
    const percent = (score / questions.length * 100);
    let message = ""
    if(percent > 80){
        message = 'Awesome Job!';
    } else if(percent < 80 && percent > 60){
        message = 'You Did Ok!';
    } else {
        message = 'You Did Horrible!';
    }
    return(
        <div className="well">
        <h4>You Got {score} out of {questions.length} Correct</h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a href="/app">Take Again</a>
        </div>
    )

}

export default Results