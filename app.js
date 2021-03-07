'use strict';

// constructers :
function Plan (name)
{
this.name = name; // plan a, plan b , plan c
this.numOfDays = 0; // from user
this.budget = 0; // from user
this.catogeries = []; // from user
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
function Resturent ()
{
this.name = '' ;
this.resturentBudget = '';
this.location = '';
Resturent.all.push(this);
this.timeNeeded = 1;
this.map = '';
this.imagePath = '';
}
function Hotel ()
{
  this.name = '' ;
  this.hotelBudget = '';
  this.location = '';
  Hotel.all.push(this);
  this.timeNeeded = 7;
  this.map = '';
  this.imagePath = '';
}
// fill plan object properties 
Plan.prototype.getFormData = function (numOfDays,budget,catogeries)
{
  this.numOfDays = numOfDays;
  this.budget = budget; 
  this.catogeries = catogeries; 
  console.log(this);
}
Plan.prototype.saveToLocalStorage = function() {
  // TODO: save the user selections to localStorage : send plan object to local storage
  localStorage.setItem('planA', JSON.stringify(this));
};