import KakaoEnterprise from './module/ComponyCrawler/KakaoEnterprise';

// db.Recruit.findAll().then((value: any) => {
//   console.log(value);
// });

const kakao = new KakaoEnterprise();
kakao.getRecruits();
