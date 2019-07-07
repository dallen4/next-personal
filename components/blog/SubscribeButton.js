import React, { useState } from 'react';
import SubscribeModal from './SubscribeModal';
import Button from './Button';

const SubscribeButton = (props) => {
    const [modalOpen, setModal] = useState(false);
    const toggleModal = () => setModal(!modalOpen);
    return (
        <div>
            <Button
                label={'Subscribe'}
                onClick={toggleModal}
            />
            <SubscribeModal
                modalOpen={modalOpen}
                toggleModal={toggleModal}
            />
        </div>
    );
}

export default SubscribeButton;
