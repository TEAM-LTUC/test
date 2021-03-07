
// plan obj used in the code is the same from from.js


// pick a hotel // fill planHotel in planDay obj
function pickHotel ()
{

for ( let i = 0 ; i< Hotel.all.length ; i++)
{
if (plan.budget ==='L' && plan.planDays[0].dayLocation ==='south' )
{
plan.planDays[0].planHotel = Hotel.all[i];
}

if (plan.budget ==='M' && plan.planDays[0].dayLocation ==='south' )
{
plan.planDays[0].planHotel = Hotel.all[i];
}

if (plan.budget ==='G' && plan.planDays[0].dayLocation ==='south' )
{
plan.planDays[0].planHotel = Hotel.all[i];
}
}

console.log(Hotel.all);
console.log(plan);
}

// pick 2 resturents // fill planResturent array in planDay obj
function pickResturent ()
{

  for ( let i = 0 ; i< Resturent.all.length ; i++) 
  {
  if (plan.budget ==='L' && plan.planDays[0].dayLocation ==='south' )
  {
  plan.planDays[0].planResturent.push( Resturent.all[i]);
  }
  
  if (plan.budget ==='M' && plan.planDays[0].dayLocation ==='south' )
  {
  plan.planDays[0].planResturent.push( Resturent.all[i]);
  }
  
  if (plan.budget ==='G' && plan.planDays[0].dayLocation ==='south' )
  {
  plan.planDays[0].planResturent.push( Resturent.all[i]);
  }
  }
  
  console.log(Resturent.all);
  console.log(plan);
  }





// function getFromLocalStorage ()
// {
//   const localPlan = JSON.parse( localStorage.getItem( 'planA' ) ) || [];

// }
