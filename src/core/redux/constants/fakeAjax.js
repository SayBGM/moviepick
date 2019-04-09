export const fakeAjax = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('asdf')
      return resolve([{
        imgSrc: require('./../../../assets/testPoster.jpg'),
        ranking: 1,
        name: '어벤져스: 엔드게임',
        manyScreen: 697,
        screening: 3223,
        audience: 353274,
      }])
    }, 1000)
  })
}