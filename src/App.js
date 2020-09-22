import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import "./App.css" 

const mySchema ={
  "title": "Dog License Application",
  "description": "Dogs must be registered in the city before April 1st each year Please fill out this form",
  "type": "object",
  "required": [
    "firstName",
    "lastName",
    "address",
    "email",
    "homePhone"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "Owner First Name",
    },
    "middleInitial": {
      "type": "string",
      "title": "Middle Initial"
    },
    "lastName": {
      "type": "string",
      "title": "Owner Last Name"
    },
    "address": {
      "type": "string",
      "title": "Residential Address (required)"
    },
    "aptNum": {
      "type": "integer",
      "title": "Apt #"
    },
    "email": {
      "type": "string",
      "title": "Email Address",
    },
    "secondEmail": {
      "type": "integer",
      "title": "Secondary Email"
    }, 
    "city": {
      "type": "string",
      "title": "City"
    },
    "state": {
      "type": "string",
      "title": "State"
    },
    "zip": {
      "type": "integer",
      "title": "Zip"
    },
    "homePhone": {
      "type": "string",
      "title": "Home Phone",
      "pattern": "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$"
    },
    "workPhone": {
      "type": "string",
      "title": "State"
    },
    "altPhone": {
      "type": "integer",
      "title": "Zip"
    },
}
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleSubmit({formData}) {
    console.log(formData)
  }

  render() {
    return (
      <div>
        <Form schema={mySchema} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
