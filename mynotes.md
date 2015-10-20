#DAY 11 Class Notes

.json way to get data

- getting data from reddit
  - copy json data from website.json and put in a file called redditData.js

- put the reddit.js above main.js in HTML

var redditData = {
   paste all the data here
}
- in main.js
- redditData.data.children => will return an array of objects
- if you look at the structure of the object you see that inside the obj is data and children
- redditData.data.children[0]

var redditArray = redditData.data.children;
redditArray.forEach(function(item, idx, arr){
  console.log(item.data.title);
  });
var redditText= " ";
redditArray.forEach(function (item, idx, arr){
  redditText += " <h3>" + item.data + title + " </h3>"
  <!-- grabs all the titles with the forEach loop -->
  });
<!-- or you can use this to get text -->
document.querySelector('body').innerHTML = redditText;

var redditArray = redditData.data.children;
var redditHTML = " ";
redditArray.forEach(function(item, idx, arr){
  redditHTML += "<h3>" + item.data.title + "item.data.ups: " + item.data.ups + "</h3>"
    });
  document.querySelector('body').innerHTML = redditHTML;
    <!-- will return all titles and uploads -->
### filter
<!-- creates a new array that only has items that have been uploaded more than 5 times -->
redditArray.filter(function(item){
  return item.data.ups > 5;
  });
var filteredReddit = redditArray.filter(function(item){
  return item.data.ups > 5;
  });
  <!-- filteredReddit is a filtered array/list of the objects -->
var redditArray = redditData.data.children;
var reddit10ups = reddit.filter(function(item){
  return item.data.ups > 10;
  });

### map
- map iterates over customized objects you create

var redditMapped10ups = reddit10ups.map(funtion(item){
  return {
    title: item.data.title,
    upvotes: item.data.ups,
    downvotes: item.data.downs,
    text: item.data.selftext
  };
});
<!-- redditMapped10ups will return a bunch of our customized objects -->
  redditMapped10ups.indexof(0);
  <!-- returns the first object in the list -->
var redditHTML = "";
reddit10ups.forEach(function(item, idx, arr){
  redditHTML += "<div class='box'><h3><span>+<</span>" + item.data.title + " - ups: " + item.data.ups + "</h3></div>";
});

$(document).ready(function(){
  $('body').append(redditHTML);
});

$('h3')
<!-- returns all the h3 on page -->
$('h3').text();
<!-- returns only the text in the h3s -->
$('h3').append(''<img src=" ');
$('h3').html():
<!-- grabs everything on page -->
$('body').html('hi everyone'):
<!-- will replace everything with hi everyone -->
$('body').prepend('more text');

in html add <span>+</span>

$('body');
$('h3'>span).text();
<!-- grabs only the span text -->
$('h3').find('span').css('color', 'red');
 <!-- will turn all the plus signs red -->
$('span');
<!-- returns all spans  -->
$('span').parent();
<!-- returns the h3 -->
$('span').closest('box');
$('span').eq(0);
<!-- returns the first span -->
- .parent()
- .parents() and
- .closest() => go up the DOM from selector

- .children()
- .find()
- .filter() => go down the DOM from the selector
  $('body').children('span');
  $('body').find('span');
  $('body').find('span').css('color', 'red');
***************************
### Jquery and Underscore
- when using libraries, link with script tag and place above other script files in HTML

<script src="bower_components/jquery/dist/jquery.js" charset="utf-8"></script>
<script src="bower_components/underscore/underscore.js" charset="utf-8"></script>
 <script src="redditData.js"></script>
 <script src="main.js"></script>

- create a .gitignore and type bower_components inside
- bower install jquery
- bower install underscore

## underscore
<!-- underscore .map works the same as .map in js -->
_.map(redditArray, function(item, idx, arr){
  return item.data.title;
  });

_.each(redditArray, function(item, idx, arr){
  console.log(item.data.title);
  });
<!-- will iterate over all the titles works like a forEach loop -->

_.pluck(redditArray, 'title');
<!-- plucks the titles -->

_.chain(redditArray).pluck('data').pluck('title')
var mapped = _.pluck(redditArray, 'data');
_.pluck(mapped, 'title');
_.pluck(mapped, 'ups');
var newReddit = _.chain(redditArray).filter(function(item){
  return item.data.ups > 10;
  });
  _.pluck('data')
  _.map(function(item){
    return {
      title: item.title,
      ups: item.ups,
    }
    .value();
    <!-- gives all the values of the new mapped array -->
  }):

_.filter(newReddit, function(item){
  return item.title;
  })
