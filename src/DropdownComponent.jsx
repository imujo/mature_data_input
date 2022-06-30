import React, { useEffect, useState } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'



export default function DropdownComponent({options, option, setOption, optionName}) {

    const [title, setTitle] = useState('')

    useEffect(() => {
        if (option === ''){
            setTitle(`Odaberi ${optionName}`)
        }else{
            setTitle(option)
        }
      
    }, [option])
    

  return (
    <DropdownButton id="dropdown-basic-button" title={title}>
        {
            options.map((m, i) => {
                return (
                    <Dropdown.Item href="#/m"
                    key={i}
                    onClick={()=>{
                        setOption(m)
                    }}
                    >{m}
                    </Dropdown.Item>
                )
            })
        }
            
            
    </DropdownButton>
  )
}
