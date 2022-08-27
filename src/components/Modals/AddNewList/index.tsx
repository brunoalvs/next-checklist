import { useEffect, useState } from "react"
import ReactModal from "react-modal"
import { Button } from "../../shared/Button"
import { Input } from '../../shared/Input'
import CloseIcon from '../../../../public/close.svg'

import {Container, Header, Footer, CloseButton} from './styles'

interface AddNewListProps {
  isOpen: boolean
  addNewList: (todo: string) => void
  onRequestClose: () => void
}

export const AddNewList = ({isOpen, addNewList, onRequestClose}: AddNewListProps) => {
  const [newList, setNewList] = useState("")

  async function createNewList () {
    addNewList(newList)
    setNewList("")
  }

  const handleClick = () => {
    createNewList().then(() => onRequestClose())
  }

  useEffect(() => {
    if (!isOpen) setNewList("")
  } , [isOpen])

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)"
        },
        content: {
          width: "80%",
          maxWidth: "300px",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
        }
      }}
    >
      <Header>
        <CloseButton onClick={()=> onRequestClose()}>
          <CloseIcon />
        </CloseButton>
      </Header>
      <Container>
        <h1>New List</h1>

        <Input
          autoFocus
          type="text"
          required
          value={newList}
          onChange={(e) => setNewList(e.target.value)}
          placeholder="Enter a new list"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick()
            }
          }}
        />

        <Footer>
          <Button onClick={() => onRequestClose()}>
            Cancel
          </Button>
          <Button
            disabled={newList.length === 0}
            onClick={() => handleClick()}
          >
            Add
          </Button>
        </Footer>
      </Container>
    </ReactModal>
  )
}