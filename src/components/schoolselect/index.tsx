
import * as React from 'react';
import styles from './index.less';

export default (props)=>(
    <ul>
        {props.schools.map((school,i)=>
            (<li
                key={i}
                onClick={()=>props.onSelectSchool(school.id)}
                >{school.name}</li>)
        )}
    </ul>
);