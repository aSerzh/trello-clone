import { Column } from "./Column"
import { AddNewItem } from "./AddNewItem"
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";
import styled from "styled-components";

export const App = () => {
  const { lists, dispatch } = useAppState()

  return (
    <Container>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}

      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch(addList(text))} />
    </Container>
  );
}

const Container = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`
