
import { Data } from '../utils/types/apiReturn';
import Api from './api';

export const listPilots = async () => {
  const response = await Api.get<Data>('');
  return response.data.MRData.DriverTable.Drivers;
};
