import { nanoid } from "nanoid";
import { findItemIndexById, moveItem } from "../utils/arrayUtils";
import {Action, ActionType} from "./actions";
import { DragItem } from "../DragItem";

export type Task = {
  id: string;
  text: string;
};
export type List = {
  id: string;
  text: string;
  tasks: Task[];
};
export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

export const appStateReducer = (
  state: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case ActionType.SetDraggedItem: {
      state.draggedItem = action.payload;
      break;
    }
    case ActionType.AddList: {
      state.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
    case ActionType.AddTask: {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(state.lists, listId);

      state.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;
    }
    case ActionType.MoveList: {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(state.lists, draggedId);
      const hoverIndex = findItemIndexById(state.lists, hoverId);
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      break;
    }
    default: {
      break;
    }
  }
};
