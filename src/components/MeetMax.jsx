import React from 'react';
import { Link } from 'react-router-dom';

function MeetMax() {
    return (
        <div className="meet-max">
            <Link to='./About'>
                <button >Meet Max</button>
            </Link>
            
        </div>
    );
}

export default MeetMax;
