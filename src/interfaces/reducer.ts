import {OptionsTheme, Theme} from './theme';

export enum ReducerActionType {
  UPDATE_COLORS = 'update_colors',
}

export type ReducerAction = {
  type: ReducerActionType.UPDATE_COLORS;
  payload: OptionsTheme;
};

export type SatateThemeContext = {
  theme: Theme;
};
