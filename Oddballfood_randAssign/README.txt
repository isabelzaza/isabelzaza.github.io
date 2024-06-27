1) Copy "load-exp.html" file to your local directory. Rename it as you like.
2) Open the file with any text editor. I personally recommend Visual Studio Code (https://code.visualstudio.com/).
3) MAKE SURE TO MODIFY LINES 11-13:
 - Each line contains an experiment URL for one condition.
 - Each experiment URL can be an OPLab test URL or a consent form URL (when using "MobileScreening-ConsentForm/" files).
 - Remove a line if you want to use 2 conditions. Add line(s) if you want more than 3 conditions.
 - Note that all lines except the last line end with comma.
4) MAKE SURE TO MODIFY LINE 16:
 - Each element is probability of a subject being assigned to the experiment URLs specified in lines 11-13.
 - The number of probability values in line 16 should be the same as the number of experiment URLs.
 - The sum of all probability values should be 1.
5) Place the modified file in a web server.
  - You may use "GitHub pages" as an alternative to a web server.
6) Now, you can use the link to the uploaded file.

Ask Oakyoon, if you are not sure what to do.
