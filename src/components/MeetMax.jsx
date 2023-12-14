import React from 'react';
import { Link } from 'react-router-dom';

function MeetMax() {
    return (
        <div className="meet-max">
            <Link to='./About'>
                <button >Meet Max</button>
            </Link>
            <p>AUVI-Q® and AUVI-q® are registered trademarks of kaleo, Inc. Other referenced trademarks are owned by their respective third-party owners.</p>
        </div>
    );
}

export default MeetMax;
