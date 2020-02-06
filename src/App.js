import React, {Component} from 'react';
import './App.css';
import Messages from './components/Messages'
import Input from './components/Input'
import axios from 'axios';

// function randomName() {
//   const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
//   const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
//   const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
//   const noun = nouns[Math.floor(Math.random() * nouns.length)];
//   return adjective + noun;
// }

// function randomColor() {
//   return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
// }

class App extends Component {

  state = {
    messages: [],
    member: {
      id: 1,
      username: "You",
      color: "red"
    },
    comp: {
      id: 2,
      username: "ChatBot",
      color: "blue"
    }
  }

    onSendMessage = (message) => {
      const messages = this.state.messages
      messages.push({
        text: message,
        member: this.state.member
      })
      this.setState({messages: messages})
      console.log(message)

      this.sendToRasa(message)
    }

      sendToRasa(message) {
        axios.post('http://localhost:5005/webhooks/rest/webhook', JSON.stringify({ 'sender': "You", 'message': message })) 
        .then(response => {
          console.log("fromRasa", response.data)

          const text = response.data
          const computer = this.state.comp
          this.renderResponse(text, computer)
        }) 
        .catch(error => console.error('err', error));
      }

    componentDidMount(){
      axios.get('http://localhost:5005/')
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }

    renderResponse(message, memb) {
      const text = Object.keys(message)
      // const comp = memb;
      // const className = "Messages-message";


      console.log(text)
      console.log(message[0].text)
      text.map((t) => console.log(t))

      var allMessages = text.map((t) => 
        message[t].text
      );

      allMessages.map((e) =>
        this.onReceiveMessage(e)
      );
  }

  onReceiveMessage = (message) => {
    const messages = this.state.messages
    messages.push({
      text: message,
      member: this.state.comp
    })
    this.setState({messages: messages})
    console.log(message)
  }
  
  render() {
    return (
      <div className = "App">
        <div className = "App-header">
          <h1>ChatBot</h1>
        </div>
        <Messages
          messages = {this.state.messages}
          currentMember = {this.state.member}
        />
        <Input  
          onSendMessage = {this.onSendMessage}
        />
      </div>
    );
  }
}

export default App;
