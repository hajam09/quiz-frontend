import React from 'react';
import CustomCreatableSelect from "./CustomCreatableSelect";

interface Props {
}

interface State {
    name?: string
    description?: string
    topic?: string,
    duration?: number
    maxAttempt?: number
    difficulty?: string
    passMark?: number
    successText?: string
    failText?: string
    isDraft?: boolean
}

class Quiz extends React.Component<Props, State> {

    state = {
        name: '',
        description: '',
        topic: 'dd',
        duration: 0,
        maxAttempt: 0,
        difficulty: '',
        passMark: 0,
        successText: '',
        failText: '',
        isDraft: false
    };

    constructor(props: Props) {
        super(props);

        this.handleQuizChange = this.handleQuizChange.bind(this);
        this.handleTopic = this.handleTopic.bind(this);
    }

    handleQuizChange(event: any) {
        let {name: fieldName, value} = event.target;
        this.setState({
            [fieldName]: value
        });
        event.preventDefault();
    };

    handleTopic(newTopic: any){
        this.setState({
            topic: newTopic
        });
    }

    handleSubmit(event: any) {
        /*
        * required: name, topic, quizDuration, maxAttempt, difficulty, passMark,
        * optional: description, successText, failText, isDraft
        * */

        console.log(this.state)

        const element = document.getElementById("react-select-3-input");

        // fetch("http://localhost:8000/v1/essay-questions/", {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         state: this.state
        //     }),
        // }).then((response) => response.json())
        //     .then((response) => {
        //     })

        event.preventDefault();
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <form className="card px-5 py-5">
                            <h2 className="text-center">Create quiz</h2>
                            <br></br>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text" className="form-control" name="name"
                                       onChange={this.handleQuizChange}/>
                            </div>
                            <div className="mb-3">
                                <label>Description</label>
                                <textarea className="form-control" name="description" rows={5}
                                          onChange={this.handleQuizChange}></textarea>
                            </div>
                            <div className="mb-3">
                                <label>Topic</label>
                                <CustomCreatableSelect handleTopic={this.handleTopic}/>
                            </div>
                            <div className="mb-3">
                                <label>Duration (minutes)</label>
                                <input type="number" name="duration" className="form-control" min={1}
                                       onChange={this.handleQuizChange}/>
                            </div>
                            <div className="mb-3">
                                <label>Max attempt</label>
                                <input type="number" name="maxAttempt" className="form-control" min={1}/>
                            </div>
                            <div className="mb-3">
                                <label>Difficulty</label>
                                <select className="form-control" name="difficulty" onChange={this.handleQuizChange}>
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label>Pass mark</label>
                                <input type="number" name="passMark" className="form-control" min={0} max={100}
                                       onChange={this.handleQuizChange}/>
                            </div>
                            <div className="mb-3">
                                <label>Text to display when passed</label>
                                <input type="text" className="form-control" name="successText"
                                       onChange={this.handleQuizChange}/>
                            </div>
                            <div className="mb-3">
                                <label>Text to display when failed</label>
                                <input type="text" className="form-control" name="failText"
                                       onChange={this.handleQuizChange}/>
                            </div>
                            <div className="mb-3">
                                <input className="form-check-input" type="checkbox" name="isDraft"
                                       onChange={this.handleQuizChange}
                                       style={{height: '25px', width: '25px'}}/>
                                &nbsp;&nbsp;
                                <label style={{marginTop: '3px'}}>Is this a draft?</label>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-outline-primary" type="submit"
                                        onClick={this.handleSubmit.bind(this)}>Create
                                </button>
                            </div>
                        </form>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Quiz;