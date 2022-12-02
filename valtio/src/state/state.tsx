import { ref } from 'valtio';

const state = {
  id: 1,
  name: '张三',
  address: {
    city: '北京',
    district: '海淀',
  },
  famaily: ref({ father: 'Tom' }),
};
export default state;
