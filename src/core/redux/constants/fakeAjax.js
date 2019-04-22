export const fakeAjax = (dateType) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve([
        {
          imgSrc: require('./../../../assets/testPoster.jpg'),
          ranking: 1,
          name: '어벤져스: 엔드게임',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('./../../../assets/testPoster.jpg'),
          ranking: 2,
          name: '어벤져스: 엔드게임',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('./../../../assets/testPoster.jpg'),
          ranking: 3,
          name: '어벤져스: 엔드게임',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('./../../../assets/testPoster.jpg'),
          ranking: 4,
          name: '어벤져스: 엔드게임',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('./../../../assets/testPoster.jpg'),
          ranking: 5,
          name: '어벤져스: 엔드게임',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('./../../../assets/testPoster2.jpg'),
          ranking: 6,
          name: '어벤져스: 인피니티 워',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('./../../../assets/testPoster2.jpg'),
          ranking: 7,
          name: '어벤져스: 인피니티 워',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('./../../../assets/testPoster2.jpg'),
          ranking: 8,
          name: '어벤져스: 인피니티 워',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('./../../../assets/testPoster2.jpg'),
          ranking: 9,
          name: '어벤져스: 인피니티 워',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('./../../../assets/testPoster2.jpg'),
          ranking: 10,
          name: '어벤져스: 인피니티 워',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
      ])
    }, 5000)
  })
}