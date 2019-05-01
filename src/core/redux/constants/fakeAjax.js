export const fakeAjax = dateType => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve([
        {
          imgSrc: require("./../../../assets/testPoster.jpg"),
          ranking: 1,
          name: "어벤져스: 엔드게임",
          manyScreen: 697,
          screening: 3223,
          audience: 353274
        },
        {
          imgSrc: require("./../../../assets/testPoster.jpg"),
          ranking: 2,
          name: "어벤져스: 엔드게임",
          manyScreen: 697,
          screening: 3223,
          audience: 353274
        },
        {
          imgSrc: require("./../../../assets/testPoster.jpg"),
          ranking: 3,
          name: "어벤져스: 엔드게임",
          manyScreen: 697,
          screening: 3223,
          audience: 353274
        },
        {
          imgSrc: require("./../../../assets/testPoster.jpg"),
          ranking: 4,
          name: "어벤져스: 엔드게임",
          manyScreen: 697,
          screening: 3223,
          audience: 353274
        },
        {
          imgSrc: require("./../../../assets/testPoster.jpg"),
          ranking: 5,
          name: "어벤져스: 엔드게임",
          manyScreen: 697,
          screening: 3223,
          audience: 353274
        },
        {
          imgSrc: require("./../../../assets/testPoster2.jpg"),
          ranking: 6,
          name: "어벤져스: 인피니티 워",
          manyScreen: 697,
          screening: 3223,
          audience: 353274
        },
        {
          imgSrc: require("./../../../assets/testPoster2.jpg"),
          ranking: 7,
          name: "어벤져스: 인피니티 워",
          manyScreen: 697,
          screening: 3223,
          audience: 353274
        },
        {
          imgSrc: require("./../../../assets/testPoster2.jpg"),
          ranking: 8,
          name: "어벤져스: 인피니티 워",
          manyScreen: 697,
          screening: 3223,
          audience: 353274
        },
        {
          imgSrc: require("./../../../assets/testPoster2.jpg"),
          ranking: 9,
          name: "어벤져스: 인피니티 워",
          manyScreen: 697,
          screening: 3223,
          audience: 353274
        },
        {
          imgSrc: require("./../../../assets/testPoster2.jpg"),
          ranking: 10,
          name: "어벤져스: 인피니티 워",
          manyScreen: 697,
          screening: 3223,
          audience: 353274
        }
      ]);
    }, 5000);
  });
};

export const fakeMovieInfoAjax = data =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        name: "어벤져스: 엔드게임",
        engName: "Avengers: EndGame",
        imgURL: require("./../../../assets/testPoster.jpg"),
        makeYear: 2019,
        director: "안소니 루소, 존 루소",
        actors:
          "로버트 다우니 주니어, 크리스 에반스, 스칼렛 요한슨, 마크 러팔로, 크리스 헴스워스, 제레미 레너, 폴 러드, 브리 라슨, 조슈 브롤린",
        naverMovieLink:
          "https://movie.naver.com/movie/bi/mi/basic.nhn?code=136900"
      });
    }, 3000);
  });
