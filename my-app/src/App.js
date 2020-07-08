import React from 'react';
import axios from 'axios';
import GithubCard from './GithubCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: 'tetondan'
    }
  }

  componentDidMount() {
    console.log('cDM is running');
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        this.setState({
          githubData: res.data
        });
      });
  }

  render() {
    if (!this.state.githubData) {
      return <p>'Loading data!...'</p>;
    }
    console.log('githubData:' + JSON.stringify(this.state.githubData))
    return (
      <div className="App" >
        <div className="App-header">
          <img className='App-logo' src="./assets/lambdalogo.png" alt="Lambda Logo" />
          <p><span role='img'>❤️'s</span></p>
          <img className='App-logo' src="./assets/githublogo.png" alt="GitHub Logo" />
        </div>
        <h1>Github User</h1>
        <div>
          <GithubCard user={this.state.githubData} />
        </div>
      </div>
    );
  }
}
export default App;