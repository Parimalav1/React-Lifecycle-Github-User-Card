import React from 'react';
import FollowerCard from './FollowerCard';

function GithubCard(props) {
    // console.log('GithubCardProps:' + JSON.stringify(props));
    // console.log('GithubCardProps2:' + JSON.stringify(props.user.login));

    return (
        <div>
            <div className='user'>
                <img src={props.user.avatar_url} alt={props.user.login} />
            </div>
            <div className='user'>
                <h3>{props.user.login}</h3>
                <p>Bio: {props.user.bio}</p>
                <p>Profile: {props.user.email}</p>
                <p>Location: {props.user.location}</p>
                <p>Following: {props.user.following}</p>
                <FollowerCard user={props.user.login}/>
            </div>
        </div>
    )
}

export default GithubCard;