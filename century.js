function century(year) {
    const century = Math.floor(year/100);
    const decade = year % 100;
     if(decade > 0) {
     return century +1;
      }
      return century;
   }
   console.log(century (1705));
   console.log(century (1900));
   
   // centuryFromYear(1705)  returns (18)
   // centuryFromYear(1900)  returns (19)
   // centuryFromYear(1601)  returns (17)
   // centuryFromYear(2000)  returns (20)
   
   
   
   
   
   // The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
   
   // Task :
   // Given a year, return the century it is in.