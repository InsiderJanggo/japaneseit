/* eslint-disable */
import React from 'react'
import { Modal } from 'react-bootstrap'

export function CenteredModal(props) {
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               {props.heading}
            </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4>{props.title}</h4>
                <p>
                    {props.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>{props.close}</Button>
                <Button variant="primary" onClick={props.onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}