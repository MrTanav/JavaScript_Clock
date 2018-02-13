# Beautiful Elegant Clock
A simple clock, that displays the time in my opinion beautifuly.

![](https://lh3.googleusercontent.com/-aS8O3KIq82g/WoJOO8Wg26I/AAAAAAAAABc/H2AnNaQvU9o231HyWQSN1XIn4H-vdOCagCJoC/w530-h513-n-rw/beautifulclock.PNG)



## Getting Started

Simply just download the source code, and use it your website and or project. 

### Tips

You are more than welcome to modify the code to make it better and/or to fit your needs. However you may want to direct yourself to the p5 reference manual. Here is a link to the reference:

https://p5js.org/reference/

The p5 library also requires for you to reference some links into your html file, please remeber to include the following links in between your header tags:
```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/addons/p5.dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.11/addons/p5.sound.min.js"></script>
```


### Explanation

p5.js requires two functions; a setup function and a draw function. In my draw function i created a simple 400px by 400px canvas. These values can change depending on the end goal of your project. 

The p5 library makes it supper easy to get the date and time, it will communicate with the clock on your system.

* The hour(); function returns the current hour on the system.
* The minute(); function returns the current minute on the system.
* The second(); function returns the current seccond on the system.

Just like time, date functions work the same.

* The day(); function returns the current day of the month on the system.
* The month(); functions returns the current month of the year on the system.
* The year(); function returns the current year on the system.

All of these values will return a integer value. 

To get the month as a name type, I created an array `months` and based on the integer value recieved from the month(); function, I passed that value to array to print the coresponding month.


## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
