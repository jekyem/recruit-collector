import { Moment } from 'moment';

export default interface RecruitData {
  company: string;
  url: string;
  title: string;
  startDate: Moment;
  endDate: Moment | null;
  contents?: string;
}
