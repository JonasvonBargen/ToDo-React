import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class  ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [
                {id: 1, name:"Live"}, 
                {id: 2, name:"Laugh"},
                {id: 3, name:"Love"},
                {id: 4, name:"Cringe"}
            ]
      }
      this.removeCurrentElement = this.removeCurrentElement.bind(this);
      this.addElement = this.addElement.bind(this);     
      this.handleInput = this.handleInput.bind(this);
    }

    addElement () {
        const newTask = {id: this.state.toDoList.length+1, name: this.state.userInput};
        this.setState({
            toDoList: [...this.state.toDoList, newTask]
        });
    }

    handleInput (event) {
        this.setState({
        userInput: event.target.value
      });
    }
  
    removeCurrentElement (id) {
        const remainingTasks = this.state.toDoList.filter(item => id !== item.id);
        this.setState({
            toDoList: remainingTasks
        });
    }

    render() {
        const items = this.state.toDoList
        .map(item => 
            <li style={{fontSize:"25px", textAlign: "left"}}> 
                - {item.name}
                <IconButton 
                    style={{color: "hsl(209, 34%, 30%)"}}
                    aria-label="delete" 
                    onClick={() => this.removeCurrentElement(item.id)} 
                >
                    <DeleteIcon fontSize="medium" />
                </IconButton>
            </li> 
        );
        return(
            <div className="toDoList">
                <div className="headLine">
                    To-Do-List
                </div>
                <div>
                    <TextField className="textField"
                        id="standard-basic" 
                        label="Task"
                        variant="outlined" 
                        onChange={this.handleInput}
                    />
                    <br/>
                    <Button className="buttonAddTask"
                        style = {{
                            width: "100px",
                            fontSize: "11px",
                            fontWeight: "bold",
                            margin: "20px",
                            marginTop:"5px",
                            color: "hsl(209, 34%, 30%)",
                            alignContent: "center"
                            
                        }}
                        color="hsl(209, 34%, 30%)"
                        variant="contained" 
                        type="button" 
                        onClick={this.addElement}>
                        Add Task
                    </Button>
                </div>
                <div className="list">
                    <ul>
                        <header className="header">
                            What needs to be done?
                        </header>
                        <br/>
                        {items}
                        
                    </ul>
                </div>
            </div>
        )
    }
}

export default ToDoList;
