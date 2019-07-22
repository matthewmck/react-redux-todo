import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { closeModal } from '../actions/TodoActions';

Modal.setAppElement('#root');

const TodoModal = (props) => {
    const { selectedOption, closeModal } = props;
    return (
        <Modal
            isOpen={!!selectedOption}
            onRequestClose={handleCloseModal}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
        >
            <h3>Selected Option</h3>
            <p>{selectedOption}</p>
            <button onClick={() => handleCloseModal(selectedOption, closeModal)}>Okay</button>
        </Modal>
    );
};

const handleCloseModal = (selectedOption, closeModal) => {
    if  (selectedOption) {
        closeModal();
    }
};

const mapStateToProps = state => ({
    selectedOption: state.todo.selectedOption
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);