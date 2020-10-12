import '../styles/modal.scss';

import React, {useState} from 'react';
import Powered from './../icons/Powered';
import Umbrella from './../icons/Umbrella';
import Button from './../components/Button';
import Close from './../icons/Close';
import FormModal from './FormModal'



const StartModal = () => {
    const [modalOpen, setModalOpen ] = useState(true)
    const [formModalOpen, setFormModalOpen ] = useState(false)


    return (
            <>
            {modalOpen && (
            <div className='bounding-box'>
                <Close size={24} onClick={() => setModalOpen(false)} className='close-icon' />
                <div className='background-mask'>
                    <Umbrella size={60} />
                </div>
                <h2>So what gives?</h2>
                <div className='bullets'>
                    <ul>
                    <li><div className='numbered-item'><span>1</span></div>Answer a few simple questions about your business</li>
                    <li><div className='numbered-item'><span>2</span></div>Browse through specially curated quotes</li>
                    <li><div className='numbered-item'><span>3</span></div>Select your quote-of-choice and receive your policy instantly</li>
                    </ul>
                </div>
                <Button size='md' variant='success' onClick={() => setFormModalOpen(true)}>GET STARTED</Button>
                <div className='powered-by'>
                    <Powered size={16} />
                    <span>Powered by Briza</span>
                </div>

                {formModalOpen && (
                    <FormModal />
                )}
            </div>
            )}
            
            </>
    );
}

export default StartModal;