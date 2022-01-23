export interface ICustomQueryErrorsArray {
  msg: string;
  params: string;
}

export interface ICustomQueryErrorData {
  message: string;
  errorsArray?: ICustomQueryErrorsArray[];
}

export interface ICustomQueryError {
  status: number;
  data: ICustomQueryErrorData;
}
