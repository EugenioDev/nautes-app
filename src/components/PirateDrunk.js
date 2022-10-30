const PirateDrunk = () => {
  const arrr = [
    { rum: 13, grog: 5 },
    { ace: 7, grog: 9 },
    { rum: 8, grog: 11 },
    { rum: 20, ace: 2 },
    { rum: 4, grog: 8 },
  ];

  let sum = arrr.reduce( (accumulator, curValue) =>  {

    if(curValue.hasOwnProperty('rum') && curValue.hasOwnProperty('grog')){
      return accumulator + curValue.rum + curValue.grog
    }

    if(curValue.hasOwnProperty('rum')){
      return accumulator + curValue.rum
    }

    if(curValue.hasOwnProperty('grog')){
      return accumulator + curValue.grog
    }
  }, 0)

//Single rum
  let sumRum = arrr.reduce( (accumulator, curValue) =>  {

    if(curValue.hasOwnProperty('rum')){
      return accumulator + curValue.rum
    }
    return accumulator

  }, 0)

  //Single Grog
  let sumGrog = arrr.reduce((acc,currentValue) => {
    if(currentValue.hasOwnProperty('grog')){
      return acc + currentValue.grog
    }
    return acc
  },0)

  return(
  <div className='flex flex-col justify-center items-center p-2'>

    <div className='flex flex-col items-center mt-10'>
      <h4 >Rum & Grog in Totale: <span className='font-bold'> {sum} </span></h4>
      <div className='flex space-x-2'>
        <h4>Il totale del Rum è: <span className='font-bold'>{sumRum}</span></h4>
        <h4> Il totale di Grog è: <span className='font-bold'>{sumGrog}</span></h4>
      </div>
    </div>

  </div>
  )
}
export default PirateDrunk