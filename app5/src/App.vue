<template>
       <div>
              <label>Enter your full name: </label>
              <input type="text" id="name">
       </div>
       <br>
       <div>
              <label>Search for your wildest dreams: </label>
              <input type="search" id="search-for-dreams">
       </div>
       <br>
       <div>
              <label>Enter your email: </label>
              <input type="email" id="email" pattern=".+@globex\.com" size="30" required>
       </div>
       <br>
       <div>
              <label>Enter your phone number: </label>
              <input type="tel" id="telephone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
       </div>
       <br>
       <div>
              <label>Enter your favorite URL: </label>
              <input type="url" id="url">
       </div>
       <br>
       <div>
              <label>Write a few lines of a story: </label>
              <textarea id="story" rows="5" cols="40">Long ago before humanity came to an end...</textarea>
       </div>
       <br>
       <div>
              <fieldset>
                     <legend>Eye Color</legend>
                     <div>
                            <input type="radio" id="blue" name="blue">
                            <label for="blue">Blue</label>
                     </div>
                     <div>
                            <input type="radio" id="green" name="green">
                            <label for="green">Green</label>
                     </div>
                     <div>
                            <input type="radio" id="brown" name="brown">
                            <label for="brown">Brown</label>
                     </div>
              </fieldset>
       </div>
       <br>
       <div>
              <fieldset>
                     <legend>Favorite Color</legend>
                     <div>
                            <input type="checkbox" id="cblue" name="cblue">
                            <label for="cblue">Blue</label>
                     </div>
                     <div>
                            <input type="checkbox" id="cgreen" name="cgreen">
                            <label for="cgreen">Green</label>
                     </div>
                     <div>
                            <input type="checkbox" id="cyellow" name="cyellow">
                            <label for="cyellow">Yellow</label>
                     </div>
                     <div>
                            <input type="checkbox" id="cpink" name="cpink">
                            <label for="cpink">Pink</label>
                     </div>
                     <div>
                            <input type="checkbox" id="cred" name="cred">
                            <label for="cred">Red</label>
                     </div>
              </fieldset>
       </div>
       <br>
       <div>
              <label for="show-select">Which option is out of place: </label>

              <select name="show" id="show-select">
                     <option value="">--Please choose an option--</option>
                     <option value="scooby">Scooby Doo</option>
                     <option value="wizards">Wizards of Waverly Place</option>
                     <option value="owl">Jessie</option>
                     <option value="slime">That Time I Got Reincarnated as a Slime</option>
              </select>
       </div>
       <br>
       <div>
              <label for="chocolate-choice">What is your favorite chocolate type? </label>
              <input list="chocolate-flavors" id="chocolate-choice" name="chocolate-choice">

              <datalist id="chocolate-flavors">
                     <option value="Regular"></option>
                     <option value="Dark"></option>
                     <option value="White"></option>
              </datalist>
       </div>
       <br>
       <div>
              <label for="tentacles">Favorite number: </label>

              <input type="number" id="tentacles" name="tentacles" min="-10000" max="100000">
       </div>
       <br>
       <div>
              <p>Slid until you get bored:</p>
              <div>
                     <input type="range" id="slider" name="slider" min="0" max="1000000">
                     <label for="slider">Instant Fun</label>
              </div>
       </div>
       <br>
       <div>
              <label for="progress">Homework progress:</label>
              <progress id="progress" max="100" value="60"> 60% </progress>
       </div>
       <br>
       <div>
              <label for="fuel">Will to finish assignments:</label>
              <meter id="fuel" min="0" max="100" low="33" high="66" optimum="80" value="20">
                     at 20/100
              </meter>
       </div>
       <br>
       <div>
              <label for="birth">Birthday: </label>
              <input type="date" id="birth" name="birth-start" value="1900-04-13" min="1800-01-01" max="2036-12-31">
       </div>
       <br>
       <div>
              <label for="favtime">Choose your favorite time: </label>
              <input type="time" id="favtime" name="favtime" min="01:00" max="24:00" required>
       </div>
       <br>
       <div>
              <label for="favtimedate">Choose your favorite date and time: </label>
              <input type="datetime-local" id="favtimedate" name="favtimedate" value="1900-04-13T01:00"
                     min="1800-01-01T00:00" max="2036-12-31T24:00">

       </div>
       <br>
       <div>
              <p>Choose your favorite colors:</p>
              <div>
                     <label for="color1">First Color: </label>
                     <input type="color" id="color1" name="color1" value="#000000">
              </div>

              <div>
                     <label for="color2">Second Color: </label>
                     <input type="color" id="color2" name="color2" value="#ffffff">
              </div>
       </div>
       <br>
       <div>
              <label for="pic">Choose your favorite picture: </label>
              <input type="file" id="pic" name="pic" accept="image/png, image/jpeg">
       </div>
       <input type="button" value="Button">
       <input type="reset" value="Reset">
       <input type="submit" value="Submit">
       <input type="image" id="image" alt="Login" src="cosplaying.jpg">
       <br>
       <button type="button">
              Button
       </button>
       <button type="reset">
              Reset
       </button>
       <button type="submit">
              Submit
       </button>
       <br>
</template>

<script>
       

</script>

<style>
fieldset {
       border-style: none;
}

div {
       font-family: 'Courier New', Courier, monospace;
}

input {
       font-family: 'Courier New', Courier, monospace;
}

button {
       font-family: 'Courier New', Courier, monospace;
}
#image {
       width: 3%;
}
label {
       font-family:'Courier New', Courier, monospace
}
</style>