import {PayloadAction} from '@reduxjs/toolkit';
import {UserSliceType} from './slice';

type stateType = UserSliceType;
type actionType = PayloadAction<Partial<UserSliceType>>;

export const setUser = (state: stateType, action: actionType) => {
  const {email, creationTime, fullName, uid} = action.payload;

  state.email = email !== undefined ? email : state?.email;
  state.creationTime =
    creationTime !== undefined ? creationTime : state?.creationTime;
  state.fullName = fullName !== undefined ? fullName : state?.fullName;
  state.uid = uid !== undefined ? uid : state?.uid;
};
