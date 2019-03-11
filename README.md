# MoviePick
 영화인들이 점점 많아지면서 어떤 영화의 관객수가 많은지를 비교하는 것은 영화 매니아로써의 필수 적인 일이다. 하지만 기존 영화진흥위원회는 느린 로딩시간과 가독성이 좋지 못한 GUI로 인하여 접근성이 떨어지는 결과를 초래하게 되었다.
 이를 시각화 된 정보를 바탕으로 각 영화를 분석해주는 웹 어플리케이션이 있다면 영화 매니아층의 요구를 충족 시킬 뿐만 아니라 영화를 보기 전 이 영화에 대한 정보, 예매율, 평점들을 다양하게 확인 할 수 있을 것이라 생각한다.

## 사용 기술
  * FrontEnd
    * React
    * Redux
    * Rxjs
    * Jest
    * D3.js
      - 데이터 시각화용
    * Parcel
      - 무설정 지향 번들
  * BackEnd
    * Django

## 사용하는 API
  * [네이버 영화 api](https://developers.naver.com/docs/search/movie/)
  * [영화 진흥 위원회 api](http://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)

## 제공 기능
  * 박스 오피스
    * 일별
    * 주간
    * 월별
    * 연도별
  * 실시간 예매율
  * 영화 정보