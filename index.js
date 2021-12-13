function scuberGreetingForFeet(feet){
  // Write your code here!
  let response;
  if (feet > 2500) {
    //not allowed
    response = 'No can do.'
  } else if (feet > 2000) {
    //$30
    response = 'I will gladly take your thirty bucks.';
  } else {
    //free sample
    response = 'This one is on me!';
  }
  return response;
}

function ternaryCheckCity(city){
  // Write your code here!
  return ( city === 'NYC' ? 'Ok, sounds good.' : 'No go.' )
  
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}