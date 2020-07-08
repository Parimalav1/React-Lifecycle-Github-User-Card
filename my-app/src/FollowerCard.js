import React from 'react';
import axios from 'axios';

class FollowerCard extends React.Component {
    constructor() {
        super();
        console.log('FollowCardProps at constructor:' + JSON.stringify(this.props));
        this.state = {
          followers: []
        }
      }
    
      componentDidMount() {
        console.log('FollowerCard at componentDidMount: ' + JSON.stringify(this.props));
        axios.get(`https://api.github.com/users/${this.props.user}/followers`)
          .then(res => {
            console.log('FollowerCard cDM:' + JSON.stringify(res.data));
            this.setState({
              followers: res.data
            });
          });
      }
    
    render() {
        console.log('renderFollowerCard:' + JSON.stringify(this.state.followers));
        return (
            <div className='list'>
               <p>Followers: </p> 
                {this.state.followers.map(x =>
                    <p key={x.id}>{x.login}</p>
                )}
            </div>
        )
    }
}

export default FollowerCard;