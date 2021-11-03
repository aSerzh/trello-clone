import {DragItem} from "../DragItem";

export enum ActionType {
  SetDraggedItem,
  AddList,
  AddTask,
  MoveList,
}

export type Action =
  | {
      type: ActionType.SetDraggedItem
      payload: DragItem | null
    }
  | {
      type: ActionType.AddList
      payload: string
    }
  | {
      type: ActionType.AddTask
      payload: { text: string; listId: string }
    }
  | {
      type: ActionType.MoveList
      payload: {
        draggedId: string
        hoverId: string
      }
  }

export const addTask = (
  text: string,
  listId: string,
): Action => ({
  type: ActionType.AddTask,
  payload: {
    text,
    listId
  }
})

export const addList = (
  text: string,
): Action => ({
  type: ActionType.AddList,
  payload: text
})

export const moveList = (
  draggedId: string,
  hoverId: string,
): Action => ({
  type: ActionType.MoveList,
  payload: {
    draggedId,
    hoverId,
  }
})

export  const setDraggedItem = (
  draggedItem: DragItem | null,
): Action => ({
  type: ActionType.SetDraggedItem,
  payload: draggedItem
})