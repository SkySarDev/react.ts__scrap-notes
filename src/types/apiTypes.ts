export interface ICustomQueryErrors {
  status: number;
  data: {
    code?: number;
    message: string;
  };
}
