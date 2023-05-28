export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}
export interface Month {
  id: string;
  month: string;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}
export interface Day {
  id: string;
  day: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  TotalProfit: number;
  TotalRevenue: number;
  TotalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}
export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  transactions: Array<string>;
  createdAt: string;
  updatedAt: string;
}
export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: Array<string>;
  createdAt: string;
  updatedAt: string;
}
