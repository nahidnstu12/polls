import React from 'react';
import Poll from './pollComponent';

function MainContent() {
    return (
        <>
        {/* <div>
            <h3>Welcome to my <em>'Poll App'</em></h3>
            <p>You can create as many poll as you want.Click the new button create new poll.To check details poll,pls click select from the left sidebar.By selecting a poll,you can check its details,perticipate and check other opinion about this poll</p>
        </div> */}
        <Poll />
        </>
    )
}

export default MainContent