import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

// Ensure that the modal root is correctly set
Modal.setAppElement('#root');

const FullScreenModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleUseLocation = () => {
    // Functionality to get user's location
    setIsModalOpen(false);
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    // Functionality to submit address
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => {}}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          borderRadius: '0',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          height: '100%',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <ModalContent>
      <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
        <h2 className='mt-10'>Find Restaurants Near You</h2>
        <button onClick={handleUseLocation}>Use My Location</button>
        <form onSubmit={handleAddressSubmit}>
          <input type="text" placeholder="Enter your address" />
          <button type="submit">Submit</button>
        </form>
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled.div`
  text-align: center;
  button {
    font-family: 'Yu Gothic UI';
    background-color: #EEA734;
    color: #FFFFFF;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #D48B29;
    }
  }
  form {
    margin-top: 10px;
    input {
      padding: 10px;
      margin-bottom: 10px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  }
`;
const CloseButton = styled.a`
  position: absolute;
  top: 10px;
  left: 20px;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
`;
export default FullScreenModal;
