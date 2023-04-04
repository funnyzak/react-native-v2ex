/**
 * Created by Leon<silenceace@gmail.com> at 2022-02-28 14:56:38.
 * Last modified at 2022-02-28 15:48:47
 */

import { AppDispatch, RootState } from '@src/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
