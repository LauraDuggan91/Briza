import '../styles/modal.scss';
import '../styles/formModal.scss'

import React, {useState, useRef, createRef} from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Box from '../icons/Box';
import Check from '../icons/Check';
import ChevronDown from '../icons/ChevronDown';
import ChevronUp from '../icons/ChevronUp';
import Close from './../icons/Close';
import Cloud from '../icons/Cloud';
import Input from '../components/Input'
import Suitcase from '../icons/Suitcase';
import Umbrella from '../icons/Umbrella';
import Wifi from '../icons/Wifi';
import questions from '../data/questions';


const FormModal = () => {
    const [modalOpen, setModalOpen ] = useState(true)
    const [activeQuestion, setActiveQuestion] = useState(0)
    const questionNumber = activeQuestion + 1
    const questionRef = useRef(null)

    const handleScroll = () => {
        questionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    const nextQuestion = () => {
        if (activeQuestion === questions.length - 1) {
            setActiveQuestion(0)
        }
        setActiveQuestion(activeQuestion + 1)
      }
    
      const prevQuestion = () => {
        if (activeQuestion === 0) {
            setActiveQuestion(questions.length - 1)
        }
        setActiveQuestion(activeQuestion - 1)
      }


    const iconName = (icon) => {
        switch(icon) {
            case 'Suitcase':
                return <Suitcase size={30}/>
            case 'Cloud':
                return <Cloud size={30}/>
            case 'Box':
                return <Box size={30}/>
            case 'Wifi':
                return <Wifi size={30}/>
            default:
        }
    }

    return (
        <>
        {modalOpen &&
        <div className='form-modal-body'>

            <Close size={24} onClick={() => setModalOpen(false)} className='close-icon' />
            <div className='umbrella-hub'><Umbrella size={35} viewBox='0 0 70 70'/><span>Umbrella Hub</span></div>

            <form>
                {questions.map((question, index) => (
                    <div className={index === activeQuestion ? 'question active' : 'question'} key={index} tabIndex={1} ref={index === activeQuestion ? questionRef : null}>
                        <div className='question-title'><span>1</span>{question.title}</div>
                        {question.type === 'text'
                        ? 
                        <>
                            <Input placeholder={question.placeholder}/>
                            <Button size='sm' variant='secondary' onClick={e => {e.stopPropagation(); e.preventDefault(); nextQuestion(); handleScroll()}}>ENTER<Check size={18}/></Button>
                        </>
                        :
                        <div className='card-grid'>
                            {question.choices.map((choice, index) => ( 
                                <Card
                                    key={index}
                                    title={choice.title}
                                    body={choice.body}
                                    icon={iconName(choice.icon)}
                                    onClick={e => {
                                        e.stopPropagation();
                                        nextQuestion();
                                        handleScroll();
                                    }}
                                />
                            ))}
                        </div>
                        }

                    </div>
                ))}
                <div>
                    <Button size='md' variant='success' onClick={() => console.log('clocled')}>GET QUOTES</Button>
                </div>
            </form>
            <div className='question-nav'>
                <div className='question-count'>{questionNumber}/{questions.length}</div>
                <div className='chevron-buttons'>
                    <Button size='xs' variant='ghost' onClick={prevQuestion} disabled={questionNumber === 1}><ChevronUp size={24}/></Button>
                    <Button size='xs' variant='ghost' onClick={nextQuestion} disabled={questionNumber >= questions.length}><ChevronDown size={24}/></Button>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default FormModal;