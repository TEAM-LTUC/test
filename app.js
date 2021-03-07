'use strict';
Activities.all = [];

Resturent.all  = [];
Hotel.all = [];
PlanDay.all= [];
// constructers :
function Plan (name)
{
this.name = name; // plan a, plan b , plan c
this.numOfDays = 0; // from user
this.budget = 0; // from user
this.catogeries = []; // from user
this.planDays=[];// push planDay type objcts 

}
function PlanDay () {
  this.dayLocation; // day1 : north / day2:middle / day3:south 
  PlanDay.all.push(this);
  this.planResturent = [];
  this.planHotel;
  this.planActivities = [];
}
function Activities ()
{
  this.name = '' ;
  this.activityBudget = '';
  this.location = '';
  this.catogery = '';
  Activities.all.push(this);
  this.timeNeeded = '';
  this.map = '';
  this.imagePath = '';
}
// function Resturent ()
// {
// this.name = '' ;
// this.resturentBudget = '';
// this.location = '';
// Resturent.all.push(this);
// this.timeNeeded = 1;
// this.map = '';
// this.imagePath = '';
// }
function Resturent (name,resturentBudget,location)
{
this.name = name ;
this.resturentBudget = resturentBudget;
this.location = location;
Resturent.all.push(this);
this.timeNeeded = 1;
this.map = '';
this.imagePath = '';
}

function Hotel (name,hotelBudget,location)
{
  this.name = name;
  this.hotelBudget = hotelBudget;
  this.location = location;
  Hotel.all.push(this);
  this.timeNeeded = 7;
  this.map = '';
  this.imagePath = '';
}
// function Hotel ()
// {
//   this.name = '' ;
//   this.hotelBudget = '';
//   this.location = '';
//   Hotel.all.push(this);
//   this.timeNeeded = 7;
//   this.map = '';
//   this.imagePath = '';
// }
// fill plan object properties 
Plan.prototype.getFormData = function (numOfDays,budget,catogeries)
{
  this.numOfDays = numOfDays;
  this.budget = budget; 
  this.catogeries = catogeries; 
  const planDay1= new PlanDay('South');
  this.planDays.push(planDay1);
  console.log(this);
}
Plan.prototype.saveToLocalStorage = function() {
  // TODO: save the user selections to localStorage : send plan object to local storage
  localStorage.setItem('planA', JSON.stringify(this));

  console.log(JSON.stringify(this));
};
function generateHotel ()
{
new Hotel ('Hotel','L','south'); 
new Hotel ('Hotel','L','north');
new Hotel ('Hotel','L','middle');
new Hotel ('Hotel','M','south');
new Hotel ('Hotel','M','north');
new Hotel ('Hotel','M','middle');
new Hotel ('Hotel','G','south');
new Hotel ('Hotel','G','north');
new Hotel ('Hotel','G','middle');
console.log(Hotel.all);
}
// generate Resturent objects  (18 obj to account all cases) , time needed = 1
function generatResturent ()
{
new Resturent ('Resturent1','L','south'); 
new Resturent ('Resturent2','L','south'); 
new Resturent ('Resturent1','L','north');
new Resturent ('Resturent2','L','north');
new Resturent ('Resturent1','L','middle');
new Resturent ('Resturent2','L','middle');
//----------------------------------------------
new Resturent ('Resturent1','M','south'); 
new Resturent ('Resturent2','M','south'); 
new Resturent ('Resturent1','M','north');
new Resturent ('Resturent2','M','north');
new Resturent ('Resturent1','M','middle');
new Resturent ('Resturent2','M','middle');
//------------------------------------------------
new Resturent ('Resturent1','G','south'); 
new Resturent ('Resturent2','G','south'); 
new Resturent ('Resturent1','G','north');
new Resturent ('Resturent2','G','north');
new Resturent ('Resturent1','G','middle');
new Resturent ('Resturent2','G','middle');
console.log(Resturent.all);
}

generatResturent ();
generateHotel ();
