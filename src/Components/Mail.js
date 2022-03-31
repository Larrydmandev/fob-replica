import React from 'react'
import { Form, Button } from 'react-bootstrap'

function Mail() {
  return (
    <section className="mail-sec">
        <div className="mail-div">
            <h2>Join our Mailing List</h2>
            <div style={{marginTop: '2%'}}>
                <hr  style={{width: '50%', position: 'relative', left: '25%'}}/>
            </div>
        </div>
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail" id='main-form'>
                    <Form.Control type="email" placeholder="E-mail" id='mail-form' className="w-50" />
                </Form.Group>

                <Button variant="primary" id='mail-btn' className="w-50" type="submit">
                    Submit
                </Button>
          </Form>
        </div>
    </section>
  )
}

export default Mail