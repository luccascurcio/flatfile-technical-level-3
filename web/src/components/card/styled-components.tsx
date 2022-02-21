import styled from 'styled-components'

export const CardTitle = styled.div``

export const CardContainer = styled.div`
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;
  margin-bottom: 7px;
  min-width: 230px;
  :hover {
    background-color: rgba(10, 30, 66, 0.08);
  }
`

export const ModalBackground = styled.div`
    position: fixed;
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    padding: 25px;
`

export const ModalContent = styled.div`
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation-name: animatetop;
    animation-duration: 0.4s;
`
  
export const ModalHeader = styled.div`
    padding: 10px 16px;
    background-color: #fff;
    color: white;
`

export const ModalTitleTextArea = styled.textarea`
    width: 95%;
    background: #0000;
    border-radius: 3px;
    box-shadow: none;
    font-size: 28px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    min-height: 24px;
    /* resize: none; */
    overflow: hidden;
    overflow-wrap: break-word;
    /* height: 33px; */
    border: none;
    border-color: #091e4221;
    color: #172b4d;
    text-rendering: auto;
`

export const ModalTitleTextAreaEditing = styled.textarea`
    width: 95%;
    overflow: hidden;
    overflow-wrap: break-word;
    background-color: #fff;
    box-shadow: 0 0 0 2px #0079bf;
    background: #0000;
    border-radius: 3px;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin: -4px -8px;
    min-height: 24px;
    padding: 4px 8px;
    /* resize: none; */
    outline: 0;
    box-sizing: border-box;
    display: block;
    -webkit-text-size-adjust: 100%;
`
  
export const ModalBody = styled.div`
    padding: 2px 16px;
`

export const ModalDescription = styled.a`
    background: #091e420a;
    border: none;
    box-shadow: none;
    display: block;
    min-height: 40px;
    padding: 8px 12px;
    text-decoration: none;
    color: #172b4d;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    cursor: pointer;
    :hover {
        background-color: rgba(10, 30, 66, 0.08);
    }
`

export const ModalDescriptionTextArea = styled.textarea`
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    height: 108px;
    background-color: #fff;
    min-height: 108px;
    display: block;
    border-radius: 3px;
    border-color: #091e4221;
    margin-bottom: 4px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
`
  
export const ModalImages = styled.div`
    padding: 4px 12px;
    background-color: #fff;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    border: none;
    border-radius: 3px;
    box-shadow: none;
    display: block;
    min-height: 40px;
`
  
export const ModalCloseButton = styled.span`
    border-radius: 50%;
    color: #42526e;
    height: 32px;
    margin: 4px;
    overflow: hidden;
    padding: 4px;
    position: absolute;
    right: 0;
    top: 0;
    transition: background-color 85ms,color 85ms;
    width: 32px;
    z-index: 2;
    font-size: 20px;
    line-height: 32px;
    display: inline-block;
    font-family: trellicons;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    text-decoration: none;
    vertical-align: bottom;
    background-color: initial;
    :hover {
        background-color: rgba(10, 30, 66, 0.08);
    }
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
`

export const ModalDescriptionButton = styled.input`
    background-color: #0079bf;
    border: none;
    box-shadow: none;
    border-radius: 3px;
    color: #fff;
    float: left;
    margin: 0 4px 0 0;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    justify-content: center;
    line-height: 20px;
    padding: 6px 12px;
    text-decoration: none;
    transition-duration: 85ms;
    transition-property: background-color;
    white-space: normal;
`

export const ModalChooseFileButton = styled.input`
    background-color: #0079bf;
    border: none;
    box-shadow: none;
    border-radius: 3px;
    color: #fff;
    float: left;
    margin: 0 4px 0 0;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    justify-content: center;
    line-height: 20px;
    padding: 6px 12px;
    text-decoration: none;
    transition-duration: 85ms;
    transition-property: background-color;
    white-space: normal;
`

export const ModalImageBox = styled.p`
    box-sizing: border-box;
    cursor: pointer;
    margin: 0;
    min-height: 80px;
    padding: 8px 8px 8px 128px;
    z-index: 0;
    color: #172b4d;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`