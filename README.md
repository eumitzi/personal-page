# personal-page
A webpage created using some model found while completing HTML module on SoloLearn learning Platform.

It contains basic HTML elements and it helps me understand the tree structure of an HTML document. 

<!DOCTYPE html>
<html>
    <head>
        <title>Mitzi`s Blog</title>
    </head>
    
    <body>
        <!-- header start -->
        <div id="header" class="section">
            <img alt="" class="img-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5a3MF5XVL9LPb-slqJ5AKUyg4SSUo38q-hqlGgq6oapHprs4MXA">
            <p><sup>Mihaela TUTU</sup></p>
        </div>
        <!-- header end -->
        
        <!-- About Me section start -->
        <div class="section">
            <h1><span>About Me</span></h1>
            <p>
                Hey! I'm <strong>Miha</strong>. Coding has changed my world and also my whole lifestyle. 
				It's not just about apps.
				Learning to code gave me <i>problem-solving skills</i> and a way to communicate with others on a technical level. 
				I can also develop websites and use my coding skills to get a better job. 
				And I learned it all at <strong>SoloLearn</strong> where they build your self-esteem and keep you motivated. 
				<i> I also had some moments when I found it impossible and "not for me", but I did not give up and now,
				as a Nokia employee, all I can say is that it all worth.</i>
				Join me in this rewarding journey. 
				You'll have fun, get help, and learn along the way!
				 <i> I also had some moments when I found it impossible and "not for me", but I did not give up.</i>
            </p>
            <p class="quote">"Declare variables, not war"</p>
        </div>
        <!-- About Me section end -->
		
		 <!-- My Schedule section start -->
        <div class="section">
            <h1><span>My Schedule(including coding, working @nokia, school)</span></h1>
            <table>
                <tr>
                    <th><strong>Day</strong></th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
					<th>Sat</th>
					<th>Sun</th>
                </tr>
                <tr>
                    <td><strong>8-8:30</strong></td>
                    <td class="selected">Learn</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>9-10</strong></td>
                    <td></td>
                    <td class="selected">Practice</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>1-1:30</strong></td>
                    <td></td>
                    <td></td>
                    <td class="selected">Play</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>3:45-5</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="selected">Code</td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>6-6:15</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="selected">Discuss</td>
                </tr>
				 <tr>
                    <td><strong>10-10:30</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
					<td></td>
                    <td class="selected">Enjoy life</td>
                </tr>
				 <tr>
                    <td><strong>10-10:30</strong></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
					<td></td>
					<td></td>
                    <td class="selected">Enjoy life</td>
                </tr>
            </table>
        </div>
        <!-- My Schedule section end -->
<div class="section">
            <h1><span>My Skills so far</span></h1>
            <ul>
                <li>HTML <br />
                    <progress min="0" max="100" value="100"></progress>
                </li>
				<li>CSS <br />
					<progress min="0" max="100" value="100"></progress>
				</li>
				<li>jQuery <br />
					<progress min="0" max="100" value="100"></progress>
				</li>
				<li>JAVA <br />
					<progress min="0" max="100" value="60"></progress>
				</li>
				<li>C# <br />
					<progress min="0" max="100" value="50"></progress>
				</li>
                <li>JavaScript <br />
                    <progress min="0" max="100" value="100"></progress>
                </li>
                
            </ul>
        </div>
        <!-- My Skills section end -->
	
	<!-- My Skills section start -->
        <div class="section">
            <h1><span>My Skills so far</span></h1>
            <ul>
                <li>HTML <br />
                    <progress min="0" max="100" value="100"></progress>
                </li>
				<li>CSS <br />
					<progress min="0" max="100" value="100"></progress>
				</li>
				<li>jQuery <br />
					<progress min="0" max="100" value="100"></progress>
				</li>
				<li>JAVA <br />
					<progress min="0" max="100" value="60"></progress>
				</li>
				<li>C# <br />
					<progress min="0" max="100" value="50"></progress>
				</li>
                <li>JavaScript <br />
                    <progress min="0" max="100" value="100"></progress>
                </li>
                
            </ul>
        </div>
        <!-- My Skills section end -->
	
	<div class="section">
            <h1><span>Contact Me</span></h1>
            
            <svg class="face" height="100" width="100">
                <circle cx="50" cy="50" r="50" fill="#FDD835"/>
                <circle cx="30" cy="30" r="10" fill="#FFFFFF"/>
                <circle cx="70" cy="30" r="10" fill="#FFFFFF"/>
                <circle cx="30" cy="30" r="5" fill="#000000"/>
                <circle cx="70" cy="30" r="5" fill="#000000"/>
                <path d="M 30 70 q 20 20 40 0" stroke="#FFFFFF" stroke-width="5" fill="none" />
            </svg>
                 
            <form>
                <input name="name" placeholder="Name" type="text" required /><br/>
                <input name="email" placeholder="Email" type="email" required /><br/>
                <textarea name="message" placeholder="Message" required ></textarea>
                <input type="submit" value="SEND" class="submit" />
            </form>
        </div>
        <!-- Form section end -->
        
        <!-- Contacts section start -->
        <div class="section" id="contacts">
            <h1><span>Follow Me</span></h1>
            <div>
                <a href="https://www.sololearn.com/" target="_blank">
                    <img alt="SoloLearn" src="https://www.sololearn.com/Uploads/icons/sololearn.png" />
                </a>
                <a href="#">
                    <img alt="Facebook" src="https://www.sololearn.com/Uploads/icons/facebook.png"/>
                </a>
                <a href="#">
                    <img alt="Twitter" src="https://www.sololearn.com/Uploads/icons/twitter.png" />
                </a>
            </div>
        </div>
        <!-- Contacts section end -->
        
        <div class="copyright">
            &copy; 2018 My Blog. All rights reserved.
        </div>
	
	</body>
	
</html>
