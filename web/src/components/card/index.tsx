import React, { useState, useEffect } from 'react'

import CardI from '../../types/card'

import {
  CardTitle,
  CardContainer,
  ModalBackground,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalImages,
  ModalTitleTextArea,
  ModalDescription,
  ModalDescriptionTextArea,
  ModalDescriptionButton,
  ModalTitleTextAreaEditing,
  ModalChooseFileButton,
} from './styled-components'

const Card = ({
  card: { title, description, images, section_id },
}: {
  card: CardI
}) => {

  const [openModal, setOpenModal] = useState(false)
  const [cardTitle, setCardTitle] = useState(title)
  const [cardDescription, setCardDescription] = useState('use property "description" here')
  const [cardImages, setCardImages] = useState([{name: 'use property "images" here'},{name: 'use property "images" here'}])
  const [isEditingTitle, setIsEditingTitle] = useState(false)
  const [isEditingDescription, setIsEditingDescription] = useState(false)

  const showModal = () => {
    setOpenModal(true);
  }

  const closeModal = () => {
    setIsEditingTitle(false)
    setIsEditingDescription(false)
    setOpenModal(false)
  }

  const editingTitle = (value: boolean) => {
    setIsEditingTitle(value)
  }

  const editingDescription = (value: boolean) => {
    setIsEditingDescription(value)
  }

  const saveTitle = () => {
    console.log('call POST for new title. use .trim()')
    console.log(cardTitle);
    setIsEditingTitle(false)
  }
  
  const saveDescription = () => {
    console.log('call POST for new description. use .trim()')
    console.log(cardDescription);
    setIsEditingDescription(false)
  }

  const submitFile = (file: any) => {
    if(file.length > 0){
      console.log('call POST of image')
      setCardImages(file[0]) //add response from POST to the images state
    }
  }

  const pressEsc = (event: any) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  useEffect( () => {
    document.addEventListener("keydown", pressEsc, false)
  }
);
  
  return (
  <>
  <CardContainer className='card' onClick={() => showModal()}>
    <CardTitle>{title}</CardTitle>
  </CardContainer>
  { openModal ? (
    <ModalBackground>
      <ModalContent>
          <ModalHeader onClick={() => editingTitle(true)}>
              { isEditingTitle ? (
              <ModalTitleTextAreaEditing
                autoFocus
                readOnly={false}
                defaultValue={cardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
                onBlur={() => saveTitle()} />
              ) : (
                <ModalTitleTextArea
                readOnly={true}
                defaultValue={cardTitle}
                />
              )}
              <p style={{color:'#172b4d' } }>in list Load Section</p>
          </ModalHeader>
          <ModalBody>
              <h3 style={{color: '#172b4d'}}>Description</h3>
              { isEditingDescription ? (
                <>
                <ModalDescriptionTextArea
                  autoFocus
                  onChange={(e) => setCardDescription(e.target.value)}
                  defaultValue={cardDescription !== null && cardDescription !== '' ? cardDescription :  'Add a more detailed description...'}
                  />
                <ModalDescriptionButton type="submit" value="Save" onClick={() => saveDescription()}/>
                <ModalDescriptionButton type="submit" value="Cancel" onClick={() => editingDescription(false)} />
                </>
              ) : (
                <ModalDescription
                onClick={() => editingDescription(true)}
                onChange={() => console.log('state para novadescription')}>{cardDescription !== '' ? cardDescription :  'Add a more detailed description...'}</ModalDescription>
              )
              }
              <br />
              <h3 style={{color: '#172b4d'}}>Images</h3>
              <ModalImages>
                <p style={{color:'#172b4d' } }>Attach maximum of 3 images</p>
                <input type="file" id="image" onChange={(e) => submitFile(e.target.files)} />
                {cardImages.length > 0 ? (
                    cardImages.map((file) => {
                      return (<div><a href={'file.url'}>{file.name}</a></div>)
                    })
                  ) : (
                    <h3>No Images Uploaded</h3>
                  )
                }
              </ModalImages>
            </ModalBody>
          <ModalCloseButton onClick={() => closeModal()}>X</ModalCloseButton>
      </ModalContent>
    </ModalBackground>
  ) : null }
  </>
  )
}

export default Card
