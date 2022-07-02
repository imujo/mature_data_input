import React from 'react'
import { Form } from 'react-bootstrap' 



export default function Slovo({title, value, setValue}) {
  return (
    <Form.Group className="mb-3 z_item" controlId="formBasicEmail">
                <Form.Label>{title}</Form.Label>
                <Form.Control 
                    maxLength={1} 
                    type="text" 
                    className='z_tekst' 
                    placeholder={title}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
    </Form.Group>
  )
}
