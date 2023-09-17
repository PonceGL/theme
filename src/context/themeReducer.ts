import {ReducerAction, ReducerActionType} from '../interfaces/reducer';
import {OptionsTheme, Theme} from '../interfaces/theme';

import {INITIAL_STATE} from './initailStatte';

export function themeReducer(
  state: OptionsTheme,
  action: ReducerAction,
): Theme {
  switch (action.type) {
    case ReducerActionType.UPDATE_COLORS:
      return {
        ...INITIAL_STATE,
        colors: {
          ...INITIAL_STATE.colors,
          ...action.payload.colors,
        },
      };

    default:
      return INITIAL_STATE;
  }
}
