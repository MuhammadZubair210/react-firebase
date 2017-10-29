import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';


class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     count: 10
  //   }
  // }

  // componentDidMount() {
  //   const rootRef = firebase.database().ref().child('react');
  //   const speedRef = rootRef.child('count');
  //   speedRef.on('value', snap => {
  //     this.setState({
  //       count: snap.val()
  //     });
  //   });
  // }
  // render() {
  //   return (
  //     <div className="App">
  //       <h1>{this.state.count}</h1>
  //     </div>
  //   );
  // }

   constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = firebase.database().ref('messages');
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    firebase.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={ el => this.inputEl = el }/>
        <input type="submit"/>
        <ul>
          { /* Render the list of messages */
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </form>
    );
  }
}

export default App;
