import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '@/stores'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = useSelector
