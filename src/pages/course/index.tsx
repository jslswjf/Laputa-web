import * as React from 'react';
import { compose } from 'redux';
import CourseListHOC from '../../librarys/CourseListHOC';
import SessionHOC from '../../librarys/SessionHOC';
import VersionHOC from '../../librarys/VersionHOC';
import styles from './index.less';

interface ICourseFilter{
    majorid:string,
    subid:string,
    own:boolean,
    collected:boolean,
    shared:boolean,
    keywords:any,
};

class Course extends React.Component<{
    catalogue:any,
    total:number,
    items:any[],
    UpdateView:any,
    More:any,
    filter:ICourseFilter
}>{

    public nxtfilter:ICourseFilter={
        majorid:null,
        subid:null,
        own:false,
        collected:false,
        shared:false,
        keywords:null
    };

    public render(){

        const {
            catalogue,
            total,
            items,
            UpdateView,
            More,
            filter,
            ...ComponentProps
        } = {...this.props};

        return (<div>
            
            {catalogue&&catalogue.major&&catalogue.major.length>0?(
                <ul>
                    {catalogue.major.map((major,key)=>(
                        <li 
                            onClick={()=>this.nxtfilter.majorid=major.id}
                            key={key}>
                                {filter.majorid===major.id?'*':null}{major.name}
                                {major.sub&&major.sub.length?<ul>{
                                    major.sub.map((sub,subkey)=>(
                                    <li 
                                        onClick={()=>this.nxtfilter.subid=sub.id}
                                        key={subkey}>
                                        {filter.subid===sub.id?'*':null}{sub.name}
                                    </li>))
                                }</ul>:null}
                        </li>))}
                </ul>
            ):null}

            <div>找到{total}个课程</div>
            <div onClick={()=>UpdateView(this.nxtfilter)}>重新查找</div>

            {items?(
                <div>
                    <ul>
                    {
                        items.map((item,key)=>(<li key={key}>{item}</li>))
                    }
                    </ul>
                    
                    <div onClick={()=>More()}>More</div>
                </div>
            ):<div>暂无课程</div>}
            

            </div>)
    }
    
}

export default compose(
    VersionHOC,
    SessionHOC,
    CourseListHOC
  )(Course);