import { IErrorMessage } from "./IErrorMessage"

export interface IGlobalResponse<T>  {
  isSuccess: boolean
  errorMessages: IErrorMessage[]
  data: T
}

export interface IGlobalResponseWithoutData  {
  isSuccess: boolean
  errorMessages: IErrorMessage[]
}
