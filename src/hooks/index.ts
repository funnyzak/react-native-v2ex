/**
 * Created by leon<silenceace@gmail.com> on 22/2/28.
 */

import { AppDispatch, RootState } from '@src/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
