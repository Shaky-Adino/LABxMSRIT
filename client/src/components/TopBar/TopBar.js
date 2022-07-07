import { useState } from 'react';
import { Link } from 'react-router-dom';
import Question from '../Question/Question';
import DSQuestions from '../../Data/DetailedQuestionData';
import FocQuestions from '../../Data/FocQuestionData';
import TopBarItem from '../TopBarItem/TopBarItem';
import styles from './topbar.module.css'

function TopBar(props){

    const [tag, setTag] = useState(null);
    const [dsquestions, setQuestions] = useState(DSQuestions);
    const [focquestions] = useState(FocQuestions);

    const addTag = (newTag) => {
        setTag(newTag);
        let temp = DSQuestions.filter(item => item.PreReq.includes(newTag.replace(/\s+/g, '')));
        setQuestions(temp);
    }

    const removeTag = () => {
        setTag(null);
        setQuestions(DSQuestions);
    }

    return(<div className={styles.page}>
        <div className={styles.container}>
            {props.arr.map((title) => (
                <TopBarItem name={title} tag={tag} addTag={addTag} removeTag={removeTag} />
            ))}
        </div>
        { (props.name === "Data Structures") ?
            <div className={styles.qContainer}>
                {tag && <div className={styles.dsPage}>
                    <Link to={`/datastructure/${tag.replace(/\s+/g, '')}`} style={{ all: 'unset' }}>
                        <h2>Learn about {tag} &#8921;</h2>
                    </Link>
                </div>}
                {dsquestions.map((question) => (
                    <Link to={`/dslab/question/${question.id}`} style={{ all: 'unset' }} key={question.id}>
                        <Question
                            id={question.id}
                            question={question.value}
                        />
                    </Link>
                ))
                }
            </div>:
            <div className={styles.qContainer}>
                {tag && <div className={styles.dsPage}>
                    <Link to={`/foclab/${tag.replace(/\s+/g, '')}`} style={{ all: 'unset' }}>
                        <h2>Learn about {tag} &#8921;</h2>
                    </Link>
                </div>}
                {focquestions.map((question) => (
                    <Link to={`/foclab/question/${question.id}`} style={{ all: 'unset' }} key={question.id}>
                        <Question
                            id={question.id}
                            question={question.value}
                        />
                    </Link>
                ))
                }
            </div>}
    </div>);
}

export default TopBar;