const express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);      


app.use( express.static(__dirname) );


async function botstr(findStr){
      var { NlpManager } = require('node-nlp');      
      const manager =  new NlpManager({ languages: ['en']});
      
      //train the chatbot
      manager.addDocument('en', 'hello', 'greetings.hello');
      manager.addDocument('en', 'hi', 'greetings.hello');
     
      manager.addDocument('en',  '*', 'back1.hello');

      manager.addDocument('en', '1' , 'option1.output');
          {
            manager.addDocument('en', '11', 'gip11.output');
            manager.addDocument('en', '12', 'gip12.output');
              {
                manager.addDocument('en', '121', 'clk121.output');
                manager.addDocument('en', '122', 'clk122.output');
                manager.addDocument('en', '123', 'clk123.output');
                manager.addDocument('en', '124', 'clk124.output');
                manager.addDocument('en', '125', 'clk125.output');
                manager.addDocument('en', '126', 'clk126.output');
                manager.addDocument('en', '127', 'clk127.output');
                manager.addDocument('en', '128', 'clk128.output');
              }
            manager.addDocument('en', '13', 'gip13.output');
               {
                  manager.addDocument('en', '131', 'jc131.output');
                  manager.addDocument('en', '132', 'jc132.output');
                  manager.addDocument('en', '133', 'jc133.output');
                  manager.addDocument('en', '134', 'jc134.output');
                  manager.addDocument('en', '135', 'jc135.output');
                }
           
            manager.addDocument('en', '14', 'gip14.output');   
            {
              manager.addDocument('en', '141', 'ind141.output');
              manager.addDocument('en', '142', 'ind142.output');
              manager.addDocument('en', '143', 'ind143.output');
            }
            manager.addDocument('en', '15', 'gip15.output');  
            {
              manager.addDocument('en', '151', 'pcl151.output');  
              manager.addDocument('en', '152', 'pcl152.output');  
              manager.addDocument('en', '153', 'pcl153.output');  
              manager.addDocument('en', '154', 'pcl154.output');  
              manager.addDocument('en', '155', 'pcl155.output');
              manager.addDocument('en', '156', 'pcl156.output');
              manager.addDocument('en', '157', 'pcl157.output');
              manager.addDocument('en', '158', 'pcl158.output');
              manager.addDocument('en', '159', 'pcl159.output');  
             } 
          }
      manager.addDocument('en', '2', 'option2.output');
     
      {
        manager.addDocument('en', '21', 'bitrix21.output'); 
      {
          manager.addDocument('en', '211', 'bitrix211.output');
          manager.addDocument('en', '212', 'bitrix212.output');
          manager.addDocument('en', '213', 'bitrix213.output');
          manager.addDocument('en', '214', 'bitrix214.output');
      }
      manager.addDocument('en', '22', 'bitrix22.output'); 
      {   
          manager.addDocument('en', '221', 'bitrix221.output');
          manager.addDocument('en', '222', 'bitrix222.output');
          manager.addDocument('en', '223', 'bitrix223.output');
          manager.addDocument('en', '224', 'bitrix224.output');
      }
    }
      manager.addDocument('en', '3', 'option3.output');
         {
          manager.addDocument('en', '31', 'lp31.output'); 
          {
          manager.addDocument('en', '311', 'lp311.output');   
          manager.addDocument('en', '312', 'lp312.output');
          manager.addDocument('en', '313', 'lp313.output');
          }
          manager.addDocument('en', '32', 'lp32.output');
          {
          manager.addDocument('en', '321', 'lp321.output');
          manager.addDocument('en', '322', 'lp322.output');
          manager.addDocument('en', '323', 'lp323.output');
          manager.addDocument('en', '324', 'lp324.output');
          manager.addDocument('en', '325', 'lp325.output');
          }
       }
      manager.addDocument('en', '4', 'option4.output');
       {  
         manager.addDocument('en', '41', 'lp41.output');
        {
            manager.addDocument('en', '411', 'lp411.output');
            manager.addDocument('en', '412', 'lp412.output');
        }
        manager.addDocument('en', '42', 'lp42.output');
        {
            manager.addDocument('en', '421', 'lp421.output');
            manager.addDocument('en', '422', 'lp422.output');
        }
       }
      manager.addDocument('en', '5', 'option5.output');
      {
        manager.addDocument('en', '51', 'lp51.output'); 
        {
            manager.addDocument('en', '511', 'lp511.output');
            manager.addDocument('en', '512', 'lp512.output');
            manager.addDocument('en', '513', 'lp513.output');
            manager.addDocument('en', '514', 'lp514.output');
            manager.addDocument('en', '515', 'lp515.output');
        }
        manager.addDocument('en', '52', 'lp52.output'); 
        {
            manager.addDocument('en', '521', 'lp521.output');
            manager.addDocument('en', '522', 'lp522.output');
            manager.addDocument('en', '523', 'lp523.output');
            manager.addDocument('en', '524', 'lp524.output');
            manager.addDocument('en', '525', 'lp525.output'); 
        }
     }

      manager.addDocument('en', '6', 'option6.output');
      {
        manager.addDocument('en', '61', 'lp61.output');
        {
          manager.addDocument('en', '611', 'lp611.output');
          manager.addDocument('en', '612', 'lp612.output');
          manager.addDocument('en', '613', 'lp613.output');
          manager.addDocument('en', '614', 'lp614.output');
        }
        manager.addDocument('en', '62', 'lp62.output');
        {
          manager.addDocument('en', '621', 'lp621.output');
          manager.addDocument('en', '622', 'lp622.output');
          manager.addDocument('en', '623', 'lp623.output');
        }
       
      }
      manager.addDocument('en', '7', 'option7.output');
      {
        manager.addDocument('en', '71', 'lp71.output'); 
        {
            manager.addDocument('en', '711', 'tg711.output');
            manager.addDocument('en', '712', 'tg712.output');
            manager.addDocument('en', '713', 'tg713.output');
            manager.addDocument('en', '714', 'tg714.output');
            manager.addDocument('en', '715', 'tg715.output');
            manager.addDocument('en', '716', 'tg716.output');
            manager.addDocument('en', '717', 'tg717.output');
            manager.addDocument('en', '718', 'tg718.output');
            manager.addDocument('en', '719', 'tg719.output');
        }
        manager.addDocument('en', '72', 'lp72.output'); 
        {
              manager.addDocument('en', '721', 'tg721.output');
              manager.addDocument('en', '722', 'tg722.output');
                       
        }
        manager.addDocument('en', '73', 'lp73.output'); 
        {
            manager.addDocument('en', '731', 'tg731.output');
            manager.addDocument('en', '732', 'tg732.output');
            manager.addDocument('en', '733', 'tg733.output'); 
            manager.addDocument('en', '734', 'tg734.output'); 
        }

       
      }
      manager.addDocument('en', '8', 'option8.output');
      { 
        manager.addDocument('en', '81', 'lp81.output');
        {
        manager.addDocument('en', '811', 'ti811.output');
        manager.addDocument('en', '812', 'ti812.output');
        manager.addDocument('en', '813', 'ti813.output');
        manager.addDocument('en', '814', 'ti814.output');
        manager.addDocument('en', '815', 'ti815.output');
        
        }
        manager.addDocument('en', '82', 'lp82.output');
        {
        manager.addDocument('en', '821', 'ti821.output');
        manager.addDocument('en', '822', 'ti822.output');
        }
        manager.addDocument('en', '83', 'lp83.output');
        {
        manager.addDocument('en', '831', 'ti831.output');
        manager.addDocument('en', '832', 'ti832.output');
        }
      }    
      // Train it to answer
      

      manager.addAnswer('en', 'greetings.hello', 
      'Hi, how may I help you? <br> Please reply with the numbers to the corresponding questions <br> 1.what is IP? <br> 2. How is IP? <br> 3.Bitrix24 Issues <br> 4.IP training issues <br> 5.Jobs available');
      
      

      manager.addAnswer('en', 'option1.output', 'Please reply with the numbers to the corresponding questions.<br> 11. IP Start/End date <br>12. Clock in/Clock out <br>13. Joining and Completion Letter <br>14. Induction<br>15. Personal Questions/College related<br> Reply with * to go back to the previous menu');
         {
              manager.addAnswer('en', 'gip11.output', 'The dates to begin the learning paths (LP) are: -<br> ● LP1 - 01/03/2020<br>● LP2 - 18/03/2020<br>● LP3 - 02/04/2020 <br>● All learning Paths (LP) are expected to be completed by the interns before the first week of June as Live Projects will begin in that time frame.Reply with "1" to go back to the previous menu');
              manager.addAnswer('en', 'gip12.output', 'Please reply with the corresponding Question number to get your queries Cleared.<br>121). Do we need to complete all the six steps within 14 hours as you mentioned that we have to complete all the 6 steps within 2 weeks so it becomes 14 hours?<br>122). Is it ok to clock-out before an hour is completed if the tasks are completed? Do we need to clock-in and compulsorily complete 7 hours a week even if the tasks are completed?<br>123). How can we check our weekly hours?<br>124). I forgot to clock in for a few days, will this affect my internship?<br>125). In my work time I can see one exclamation mark?/ What does the remaining time mean?<br>126). Is it necessary to clock-in if I am done with my tasks?<br>127). Can we be online after 1 hr in a day?<br>128). I have not got the acknowledgment from you regarding the weekly report.<br> Reply with "1" to go back to the previous menu');
              {
                manager.addAnswer('en', 'clk121.output', 'Its preferred if you complete the LP1 training in 2 weeks but not mandatory. LP1, LP2, and LP3 are expected to be completed before the live projects start in July; but that doesnt mean you should give anything less than 1 hour a day or 7 hours a week towards the learning paths (LP).<br>Reply with "12" to go back to the previous menu');
                manager.addAnswer('en', 'clk122.output', ' If the tasks are completed, there is no need to clock-in and clock-out unnecessarily for hours. However, you should keep a track of all the updates of the internship being posted on the groups.<br>Reply with "12" to go back to the previous menu');
                manager.addAnswer('en', 'clk123.output', 'In the menu select <b>time and reports</b> ->worktime and then you could see your worktime or click on this link once you’re logged in to Bitrix24;<a href="https://cloudcounselage24.bitrix24.com/timeman/timeman.php" target="_blank">https://cloudcounselage24.bitrix24.com/timeman/timeman.php</a><br>Reply with "12" to go back to the previous menu');
                manager.addAnswer('en', 'clk124.output', 'This could have an adverse effect on your internship, please contact Cloud Counsealge HR and provide a genuine reason to miss clock in/ clock out. Also, please start performing your clock in/ clock out now.<br>Reply with "12" to go back to the previous menu');
                manager.addAnswer('en', 'clk125.output', 'It is showing the remaining time because its configured for 8 working hours per day. Our interns need to only make sure that they are online for 1 hour per day or 7 hours a week.<br>Reply with "12" to go back to the previous menu');
                manager.addAnswer('en', 'clk126.output', 'Yes, it is mandatory to do, we are trying to include some more tasks due to the current scenarios, but adherence to clock-in/ clock-out policy is utterly important.<br>Reply with "12" to go back to the previous menu');
                manager.addAnswer('en', 'clk127.output', 'Yes, you can be.<br>Reply with "12" to go back to the previous menu');
                manager.addAnswer('en', 'clk128.output', 'Once you submit your weekly report, your supervisor and the HR team shall take the cognizance. They would reach out to you in case of discrepancies, so you need not worry about the confirmation.<br>Reply with "12" to go back to the previous menu');       
              }
              manager.addAnswer('en', 'gip13.output', 'Please reply with the corresponding Question number to get your queries Cleared.<br>131). When will we get a joining letter?<br>132). When will we get an internship completion letter?<br>133). I have got another attachment called ‘noname’ or ‘win.dat’ with my Appointment letter, what should I do about it? Will it cause any harm?<br>134). I did not get my appointment letter yet.<br>135). Is it okay to mention this internship as ongoing for college records?<br>Reply with "1" to go back to the previous menu');
              {
                manager.addAnswer('en', 'jc131.output', 'Joining letter to all the interns will be provided on or before the 31st of March 2020. <br>Reply with "13" to go back to the previous menu');
                manager.addAnswer('en', 'jc132.output', 'This is a three (3) month internship conducted in the month of March, June & July 2020. You will receive your internship experience letter in August during the convocation only if you successfully submit your Live Project.<br>Reply with "13" to go back to the previous menu');
                manager.addAnswer('en', 'jc133.output', 'We have observed that there is such an attachment for a few mailing service providers like Gmail and yahoo, please ignore this attachment. It won’t cause any harm to your system.<br>Reply with "13" to go back to the previous menu');
                manager.addAnswer('en', 'jc134.output', 'If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, 31st March. Then you will get your joining letter by 30th April 2020. If you have otherwise, please a mail to hrsupport@cloudcounselage.in or ping <b>Cloud Counselage HR</b> in B24.<br>Reply with "13" to go back to the previous menu');
                manager.addAnswer('en', 'jc135.output', 'Yes, we will provide every intern a joining letter as soon as all interns are inducted.<br>Reply with "13" to go back to the previous menu');
              }
               manager.addAnswer('en', 'gip14.output', 'Please reply with the corresponding Question number to get your queries Cleared.<br>141). Is the induction online or offline?<br>142). I could not attend the induction last time, can I get an online induction again?/ I want some points said in the introduction, where can I get them.<br>143). Can I just finish the task that you have just uploaded as I have attended the live induction session on 22nd of march<br>Reply with "1" to go back to the previous menu');
              {
                manager.addAnswer('en', 'ind141.output', 'As a precautionary measure to safeguard our intern’s health, we have decided to conduct all the inductions online. <br>Reply with "16" to go back to the previous menu');
                manager.addAnswer('en', 'ind142.output', 'We have created a separate page with a pre-recorded induction, please visit it; <a href="https://www.cloudcounselage.co.in/ipinduction" target="_blank">https://www.cloudcounselage.co.in/ipinduction</a><br>Reply with "16" to go back to the previous menu');
                manager.addAnswer('en', 'ind143.output', 'Yes. Although, you can always revisit the induction so that you can review what has been said in it.<br>Reply with "16" to go back to the previous menu');
              }
              manager.addAnswer('en', 'gip15.output', 'Please reply with the corresponding Question number to get your queries Cleared.<br>151). What to do when our university exams start?<br>152). Can we do another internship with IP?<br>153). Can my friends still apply for the Internship Program (IP) - Maharashtra? Can create awareness about this internship? Can we be the representative for Cloud Counselage in our college?<br>154).  Can we be a part of your future development team?/ Can we be hired by Cloud Counselage after this internship?<br>155). Can we visit the office? How many times do we have to visit the office for this internship?<br>156). Can we extend this internship?<br>157). What are the company policies for IP interns?<br>158). One of my friends had applied for the IP but she do not receive any further updates<br>159). When will the step 3 of the internship program start?<br>Reply with "1" to go back to the previous menu');
              {
                manager.addAnswer('en', 'pcl151.output', 'We have provided our interns with preparatory leave from the exam season, nevertheless, you are free to work on your LP3 assignment, but we suggest to concentrate on your exams first.<br>Reply with "17" to go back to the previous menu');
                manager.addAnswer('en', 'pcl152.output', 'Yes, you can do another internship outside of Cloud Counselage but please ensure to provide 1 hour a day or 7 hours a week for IP<br>Reply with "17" to go back to the previous menu');
                manager.addAnswer('en', 'pcl153.output', 'Yes, your friends can apply till the 30th of March 2020;<br> <a href="https://www.cloudcounselage.com/ipmaharashtra/" target="_blank">https://www.cloudcounselage.com/ipmaharashtra/</a>.<br> To be a student representative of Cloud Counselage, please contact Cloud Counselage HR<br>Reply with "17" to go back to the previous menu');
                manager.addAnswer('en', 'pcl154.output', ' All our current interns if performing well in our internship programs can be offered an opportunity to interview for various positions in Cloud Counsealge. Many of our now full-time employees were interns in Cloud Counselage.<br>Reply with "17" to go back to the previous menu');
                manager.addAnswer('en', 'pcl155.output', 'As this is an online internship you do not need to visit the offices in the duration of this internship. You will be requested to visit the Vikhroli office only once; i.e. on your internship convocation day which will be in July 2020. Nevertheless, you can visit our offices with an appointment.<br>Reply with "17" to go back to the previous menu');
                manager.addAnswer('en', 'pcl156.output', 'Yes, you can extend your internship by being part of our other online programs like, ‘Online Career Program’.<br>Reply with "17" to go back to the previous menu');
                manager.addAnswer('en', 'pcl157.output', 'The company policies will be published on www.cloudcounselage.co.in/ippolicies<br>Reply with "17" to go back to the previous menu');
                manager.addAnswer('en', 'pcl158.output', 'Please ask them to send a mail to hrsupport@cloudcounselage.in and wait till 30th April 2020 for a reply<br>Reply with "17" to go back to the previous menu');
                manager.addAnswer('en', 'pcl159.output', ' Hope you and your family are in the best of health given the current scenario and you are making the most of your time through the Internship Program by Cloud Counselage. According to the schedule of this internship program, some of you must have completed steps 1 and 2 of your internship and some of you must be in the process of completing step 2. Please note that as per the program schedule (https://www.cloudcounselage.com/ipmaharashtra/), the following are the dates for entering step 3, wherein interns take preparatory leaves for exams:<br>a) 16th April 2020 - access given before 31st March 2020 <br>b) 01st May 2020 - access given after 31st March 2020 Kindly note that we are in touch with the DTE - Maharashtra for the exam schedules various universities in Maharashtra and the start of step 4 will be announced accordingl via individual email and our social media pages. While step 3 is in progress, you do not need to login to Bitrix24 or submit your timesheet until you are in step 4. All the best and please stay safe! See you soon in step 4. <br>Reply with "17" to go back to the previous menu');
   

              }
         }
      manager.addAnswer('en', 'option2.output', 'Please reply with the corresponding Question number to get your queries Cleared.<br>21). Workgroups and Work Report<br>22). General Bitrix Queries <br>Reply with * to go back to the previous menu');
       { manager.addAnswer('en', 'bitrix21.output', 'Please reply with the corresponding Question number to get your queries Cleared.<br>211). How many workgroups will an intern be a part of?/ How many workgroups should I be in?<br>212). What do we do in the work report?<br>213). I am having trouble finding the workgroup<br>214). I am not added into my technology workgroup./ actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page<br> Reply with "2" to go back to the previous menu');          
            {
              manager.addAnswer('en', 'bitrix211.output', 'Every intern should be a part of 2 workgroups.<br> 1. "202003-IP" -- This is a general workgroup. Everyone who is enrolled in IP should be a part of this workgroup.<br> 2. "202003-IP-Technology" -- This is a technology-specific workgroup. You will be added to the technology you had enrolled for. For example "202003-IP-Python" for students who enrolled for python.<br>Reply with "21" to go back to the previous menu');
              manager.addAnswer('en', 'bitrix212.output', 'As mentioned in the video, please write what you have done this week and request approval from your supervisor by clicking on "send to supervisor".<br>Reply with "21" to go back to the previous menu');
              manager.addAnswer('en', 'bitrix213.output', 'Please ensure that you have connected to the drive of that workgroup by going to your notification and connecting to the drive of that workgroup. If that is done, please try to search for your workgroup in the search bar at the top of your screen. To search, use the keywords, 202003-IP-TechnologyName. Ex "202003-IP-DevOps". In case there is no invitation to you, please message Cloud Counselage HR. You will be added to 2 groups “202003-IP” which is a general workgroup and the other one is “202003-IP-Technology which is a technology-specific workgroup.<br>Reply with "21" to go back to the previous menu');
              manager.addAnswer('en', 'bitrix214.output', ' Please follow the instructions given in the videos or the one in the Bitrix24 mail(these are the same videos share in the task), the tokens are given to you. Ensure that you are putting the right token on the right page<br>Reply with "21" to go back to the previous menu');
            }
            manager.addAnswer('en', 'bitrix22.output', 'Please reply with the corresponding Question number to get your queries Cleared.<br>221). By when will we receive access to Bitrix24? <br>222). I m not able to access my Bitrix24 account?<br>223). What is the job profile? Will we be able to work only in the tech we have chosen for the internship?<br>224).I am not able to see my tasks <br> Reply with "2" to go back to the previous menu');       
            {
              manager.addAnswer('en', 'bitrix221.output', 'If you have submitted the ‘New Joinee Form’ after the 1st of March, please wait till the 31st of March to receive your access.<br>Reply with "22" to go back to the previous menu');
              manager.addAnswer('en', 'bitrix222.output', 'Go to <a href="https://cloudcounselage24.bitrix24.com/" target="_blank">https://cloudcounselage24.bitrix24.com/</a> On the Login page, In the, ‘Enter the phone number or email’<br> type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’.<br> In case the problem persists, please write a mail to hrsupport@cloudcounselage.in <br>Reply with "22" to go back to the previous menu');
              manager.addAnswer('en', 'bitrix223.output', 'Your job profile is <b>Technology - Intern</b>, if you are in cloud computing technology to update in your LinkedIn or resume, you can write as <b>Cloud Computing - Intern</b>. Yes, you will only work in the technology you are selected for but you can take the training of other technologies.<br>Reply with "22" to go back to the previous menu');
              manager.addAnswer('en', 'bitrix224.output', 'Please remove the default "In Progress" from your filter of the task section and try. <br>Reply with "22" to go back to the previous menu');
            }
          }
      manager.addAnswer('en', 'option3.output', 'Please reply with the corresponding Question number to get your queries Cleared <br>31. Access Token <br>32. General LP1 Queries <br> Reply with * to go back to the previous menu'); 
           { 
            manager.addAnswer('en', 'lp31.output', 'Please reply with the corresponding Question number to get your queries Cleared <br>311).Not able to access the LP1 page with my token/ When I put my token it redirects me to the home page/ Getting error while accessing the page- "User Not Found”/Website Redirection Issue/Tokens not working.<br>312). I did follow the instructions given in the video, but still, I am not able to log in for the LP1 task.<br>313). Do I need to register every time I do different tasks of lp1?<br> Reply with "3" to go back to the previous menu');
             {
              manager.addAnswer('en', 'lp311.output', 'Please watch the videos shared with the invite and you should not face any problems in accessing the training. Please follow the protocol shown in the videos.<br>Reply with "31" to go back to the previous menu');
              manager.addAnswer('en', 'lp312.output', 'Ensure you are using the right token<br>Reply with "31" to go back to the previous menu');
              manager.addAnswer('en', 'lp313.output', 'There are codes in the LP1 assignment, and each time you have to register also, please check your task description.<br>Reply with "31" to go back to the previous menu');
             }
             manager.addAnswer('en', 'lp32.output', 'Please reply with the corresponding Question number to get your queries Cleared <br>321). What do I do after completing the quiz? how to complete the entire lp1?<br>322). I had press finished button of LP1 task but want to resume the task, how to do that?<br>323). Can you help me by telling how can I get to know about my progress of LP 1<br>324). Is it necessary to attend LP1 for other domains as well if we want to take its training.<br>325). If my technology is IOT/ AI/ ML/ etc., do I still have to complete the mandatory training for LP1 "Cloud Computing"?<br> Reply with "3" to go back to the previous menu');
             {
              manager.addAnswer('en', 'lp321.output', 'There are tokens for each training in the task, if this learning path is done, please wait for the next learning path to begin and then please try to finish it. If you are done with LP3 please wait for Live Projects to begin.<br>Reply with "32" to go back to the previous menu');
              manager.addAnswer('en', 'lp322.output', 'You can go back to that task and then click on <b>More</b> and then <b>resume</b> to restart that task.<br>Reply with "32" to go back to the previous menu');
              manager.addAnswer('en', 'lp323.output', 'There is no metric to score your progress in any learning paths as it will be at a different pace for every individual.<br>Reply with "32" to go back to the previous menu');
              manager.addAnswer('en', 'lp324.output', 'LP1 training is common across all the technologies <br>Reply with "32" to go back to the previous menu');
              manager.addAnswer('en', 'lp325.output', ' Yes, you will need to complete the mandatory training as cloud computing is fundamental to many technologies and this additional knowledge will help you in your career.<br>Reply with "32" to go back to the previous menu');
             } 
          }
          manager.addAnswer('en', 'option4.output', 'Please reply with the corresponding Question number to get your queries Cleared <br>41. Training <br>42. Others<br> Reply with * to go back to the previous menu');
          {    
            manager.addAnswer('en', 'lp41.output', 'Please reply with the corresponding Question number to get your queries Cleared <br>411). What happens in LP2? What kind of training can we expect? Is it a Basic/Advance level?<br>412). Why only this training for LP2?<br> Reply with "4" to go back to the previous menu');
            {
                manager.addAnswer('en', 'lp411.output', ' The main focus of LP2 is to provide you with a basic foundation of the technology you are interested in. The training is also handpicked in such a way that they enable you to work on LP3 assignments which interim gives you the beginning to start your study for the selected technology and in no terms is the only/ final training you should look into. Please keep learning after your LP2 is complete, that is the only way to grow in your technology of choice.<br>Reply with "41" to go back to the previous menu');
                manager.addAnswer('en', 'lp412.output', 'They are our training partners and we have handpicked this training to cover a certain topic for you. These training cover from the very basic to intermediate level and is the perfect medium for you to have a starting point.<br>Reply with "41" to go back to the previous menu.');
            }
            manager.addAnswer('en', 'lp42.output', 'Please reply with the corresponding Question number to get your queries Cleared <br>421). Can I do certification for the training provided in LP2? <br>422). The videos of LP2 are taking too much time to load.<br> Reply with "4" to go back to the previous menu');
            {
                manager.addAnswer('en', 'lp421.output', 'Yes, Cloud Counselage has purposefully partnered with Edureka so as to enable our interns to get the advantage of the corporate benefits at <b>no profit no loss</b> basis for Cloud Counselage, that we receive from the partnership. Being our interns, you can get huge discounts on the certifications you choose to enrol for through Cloud Counselage and Edureka. In case you want to know more about the discounts offered, please reach out to ‘Cloud Counselage HR’ or write to hrsupport@cloudcounselage.in. <br>Reply with "42" to go back to the previous menu');
                manager.addAnswer('en', 'lp422.output', 'We have uploaded the videos of the highest quality and best resolution which has resulted in some videos being over 1 GB as they are of hours in duration. To experience these high definition videos we request you to wait at least 5 minutes or more, depending on your computer RAM and internet connection.<br>Reply with "42" to go back to the previous menu');
            }
          }
        manager.addAnswer('en', 'option5.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>51. LP3 General Queries <br>52. Submission and Help <br>Reply with * to go back to the previous menu');
        {
              manager.addAnswer('en', 'lp51.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>511). What happens in LP3? What kind of training can we expect? Is it a Basic/Advance level?<br>512). What to do after LP3?<br>513). What will be the projects in AI/ ML/ etc. technologies in LP3/ Live Projects?<br>514). Will these training be enough for us to complete the LP3 and Live Project.<br>515). Will I get LP3 and Live project of technology other than what I am selected for?<br>Reply with "5" to go back to the previous menu');
              {    
                manager.addAnswer('en', 'lp511.output', 'LP3 will be assignment based and its execution and content vary from technology to technology. This assignment will be like a mini-project for all interns in a particular technology which will be verified by Cloud Counselage Project Managers. <br> Reply with "5" to go back to the previous menu');
                manager.addAnswer('en', 'lp512.output', 'You will be given preparatory leave (PL) from April to June after that your Live Projects will be given after the first week of June. <br> Reply with "5" to go back to the previous menu');
                manager.addAnswer('en', 'lp513.output', ' Projects in LP3 and Live Projects will be relevant to your training and ongoing projects in Cloud Counselage. The actual problem statements will only be given when the LP3/ Live Project phase is in progress to keep the interns focused on LP1/ LP2. <br> Reply with "5" to go back to the previous menu');
                manager.addAnswer('en', 'lp514.output', ' The set of training is not exhaustive and you are required to keep learning about the technology on your own to excel in your Live Project.<br> Reply with "5" to go back to the previous menu');
                manager.addAnswer('en', 'lp515.output', ' No, you will receive LP3 and Live Projects of your respective technology. <br> Reply with "5" to go back to the previous menu');
              }  
              manager.addAnswer('en', 'lp52.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>521). Where do we push the code in LP3?<br>522). Where should we share our hacker rank id/ where should we share the link/ anything relate to LP3 assignment submission?<br>523). I am stuck in LP3/ Live project with a technical issue, Is there any technical person who can help in this?<br>524). I have a query with respect to LP3, what should I do and whom should I ask?<br>525). For some reason, I am unable to download my LP3 assignment problem statement document shared on LP3 page, is there any other way I can get it?<br>Reply with "5" to go back to the previous menu');
              {
                manager.addAnswer('en', 'lp521.output', ' Please push you to code in a public repo of your GitHub account if required by your LP3 assignment<br> Reply with "52" to go back to the previous menu');
                manager.addAnswer('en', 'lp522.output', ' For now, please concentrate on completing the task. We will ask all the interns to submit their work in the first week of June. Ensure you make it up to the mark till then as there would be no extension given that time.<br> Reply with "52" to go back to the previous menu');
                manager.addAnswer('en', 'lp523.output', ' As mentorship/ hand-holding is not part of an internship by definition, we would not provide any technical help. Nevertheless, feel free to ask your doubt in your respective workgroup chat/ in the community or Google it :)<br> Reply with "52" to go back to the previous menu');
                manager.addAnswer('en', 'lp524.output', ' As mentioned in the <b>202003-IP</b> workgroup, please ask all queries related to LP3 in your technology workgroup only and tag Jayanth G S in your message. <br> Reply with "52" to go back to the previous menu');
                manager.addAnswer('en', 'lp525.output', ' Since some of you are not able to download, please find the same document in your technology drive in the folder LP3. We have made an announcement in your respective technology workgroup as well, please check. <br> Reply with "52" to go back to the previous menu');
              }
      }
      manager.addAnswer('en', 'option6.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>61. General Live Projects Queries <br>62. Help & Requirements <br>Reply with * to go back to the previous menu');
        {
          manager.addAnswer('en', 'lp61.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>611). What to do after Live Projects? Are we getting an offer letter/Stipend?<br>612). Live Project/ LP3 has to be submitted individually or it will be a group project?<br>613).Are LP1/ LP2/ LP3 a part of the Live Project?<br>614). Will Live Projects have only one technology or a mixture of technologies?<br>Reply with "6" to go back to the previous menu');
        {
          manager.addAnswer('en', 'lp611.output', 'Submit your project and once its reviewed as successful, collect your internship letter. Your internship is complete after this. There is no stipend for live projects. If your work is sublime and we have a vacancy in the position you are interested in, you may be offered a chance for interviews and can get an offer letter from Cloud Counselage Pvt. Ltd.<br> Reply with "61" to go back to the previous menu');
          manager.addAnswer('en', 'lp612.output', 'All the LP3/ Live Projects are on an individual scale.<br> Reply with "61" to go back to the previous menu');
          manager.addAnswer('en', 'lp613.output', 'LP1/ LP2/ LP3 is your preparation for the Live Project. All the phases LP1/ LP2/ LP3/ Live Project are a part of this internship.<br> Reply with "61" to go back to the previous menu');
          manager.addAnswer('en', 'lp614.output', 'Live Projects will have only your part of technology even if there are multiple technologies that are a part of the project, you will be working only on the part that covers your technology.<br> Reply with "61" to go back to the previous menu');
        }
        manager.addAnswer('en', 'lp62.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>621). Problem statements of the Live Project will be chosen by the intern or will be provided by Cloud Counselage?<br>622). Will you provide mentorship or doubt clearing sessions in this internship?<br>623). Live projects use case will be provided or can we have our own use case?<br>Reply with "6" to go back to the previous menu');
        {
          manager.addAnswer('en', 'lp621.output', 'Live Projects will be provided by Cloud Counselage as these are the ongoing projects of Cloud Counselage and your opportunity to create an impact in the organisation.<br> Reply with "62" to go back to the previous menu');
          manager.addAnswer('en', 'lp622.output', 'As this is an internship you’re expected to do self-learning, mentorship is not part of an internship. However, we have created forums to resolve your doubts in the form of workgroups. As an intern ensure that you are part of relevant workgroups, i.e. ‘202003 - IP’ and your resp. Technology workgroup. In case, you are not a part of these workgroups, please reach out to ‘Cloud Counselage HR’ on Bitrix24 Chat.<br> Reply with "62" to go back to the previous menu');
          manager.addAnswer('en', 'lp623.output', 'Live projects use case will strictly be provided by Cloud Counselage and you cannot choose your own use case. <br> Reply with "62" to go back to the previous menu');
        }
      }
        manager.addAnswer('en', 'option7.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>71. Training Issues <br>72. Quiz <br>73. Technology Related Queries <br>Reply with * to go back to the previous menu');  
        {
          manager.addAnswer('en', 'lp71.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>71). Login issues with training/ for every module of LP1/ LP2, do we have to register again for access to the content?<br>72). I just joined the group and I am not understanding what to do further. How do I start my internship?<br>73). I am not able to view a page/ I am logged in the training and still the website asks me to login<br>74).  I have complete one training, I did not find any options to continue my training.<br>75). Can we skip any training if we are already clear with the basics?<br>76). Not able to see the task as not part of the IP workgroup.<br>77). I am not getting results of the training.<br>78). I tried it 3-4 times and have to enter token each time I visit it.<br>79). Could I have done this training from other websites/ resources?<br>Reply with "7" to go back to the previous menu');
          {
          manager.addAnswer('en', 'tg711.output', 'Yes, you need to register for every module of training. Some of you are facing login issues, we have kept the training visible without login. Even then, to post a comment and give a quiz you will have to login. In case you face difficulty to do so, please try to perform your quiz or post a comment by using a different browser or incognito mode.<br> Reply with "71" to go back to the previous menu');
          manager.addAnswer('en', 'tg712.output', 'Please go through the mail from which you have accepted the invite and check the task section as well.<br> Reply with "71" to go back to the previous menu');
          manager.addAnswer('en', 'tg713.output', ' This could be because of some issue in the cookies or extension in your browser. Please try again with a different browser or open the tab with incognito mode. Also, you dont need to record your results, the quizzes are only for your knowledge check and not a metric to score you.<br> Reply with "71" to go back to the previous menu');
          manager.addAnswer('en', 'tg714.output', 'Go back to the technology Page. Enter the respective tokens and then work. follow the same process every time.<br> Reply with "71" to go back to the previous menu');
          manager.addAnswer('en', 'tg715.output', ' No, these pieces of training will cover basics and there is no harm in brushing up your skills before you start with the assignments later.<br> Reply with "71" to go back to the previous menu');
          manager.addAnswer('en', 'tg716.output', 'Please message ‘Cloud Counselage HR’ in Bitrix24<br> Reply with "71" to go back to the previous menu');
          manager.addAnswer('en', 'tg717.output', 'They are just for your practice and not for our record, so you do not need the results of LP1 and LP2 training. <br> Reply with "71" to go back to the previous menu');
          manager.addAnswer('en', 'tg718.output', 'We understand that it sometimes becomes tedious to access the training and we highly appreciate your support in making the training possible. We only do this for security reasons and we are trying to find a way to minimise the token use. For now, please note that in LP1 there are 3 types tokens:<br> 1. One for each technology, you are a part of.<br> 2. The lp1 home page.<br> 3. The 6 tokens (one for each step) <br> Reply with "71" to go back to the previous menu');
          manager.addAnswer('en', 'tg719.output', 'Yes, you could have but the reason to have these videos is to keep an enclosed environment for you to watch these tutorials without distractions with quizzes and forums for you to discuss in. As mentioned earlier, our main aim is to provide you with a starting point and baseline for the technology of your choice.<br> Reply with "71" to go back to the previous menu');
          }
          manager.addAnswer('en', 'lp72.output', 'Please reply with the corresponding Question number to get your queries Cleared.<br>721). How do I access my quiz?<br>722). Unable to access the quiz<br>Reply with "7" to go back to the previous menu');
         {
          manager.addAnswer('en', 'tg721.output', ' As mentioned in the video: -<br> Step1: Go to lp1 module <br>Step2: Select module <br>Step3: Put token (it will direct you to the home screen if the token is correct) <br>Step4: Again go to lp1 module n select that module <br>Step5: You will get the access by now <br>Step6: Register there (each time for every module) <br>Step7: Give the quiz <br>Step8: Logout<br>Reply with "72" to go back to the previous menu');
          manager.addAnswer('en', 'tg722.output', 'Please retry after some time in an incognito window<br>Reply with "72" to go back to the previous menu');
         }
         manager.addAnswer('en', 'lp73.output', 'Please reply with the corresponding Question number to get your queries Cleared.<br>731). I have opted for a blockchain internship, can I also learn about AI and do an internship in both?<br>732). Can I switch my technology now? / I had enrolled for two technologies at the time of form-filling and got selected for the technology I’m not interested in.<br>733). If we are working on more than one technology, are those technologies added to the certificate?<br>734). I have not been added to the technology I preferred to work on?<br>Reply with "7" to go back to the previous menu');
         {
          manager.addAnswer('en', 'tg731.output', 'You can learn both the technologies using Learning Path 2 (LP2) which will begin after the 2nd week of March, but your internship will only be continuing with the one you are selected for.<br>Reply with "73" to go back to the previous menu');
          manager.addAnswer('en', 'tg732.output', 'You cannot switch the technology currently. You have to continue with the one you are selected for. In the case of multiple form entries, you just got selected for one of them; the first one that you entered. You cannot make a switch right now. <br>Reply with "73" to go back to the previous menu');
          manager.addAnswer('en', 'tg733.output', 'You are not restricted from doing the training of other technologies but you will only be given an internship certificate of the technology you’re selected for. <br>Reply with "73" to go back to the previous menu');
          manager.addAnswer('en', 'tg734.output', 'We do understand that you might be interested in other technologies and are eager to learn more, but we have prescribed the technologies based on your first inputs and cannot change your base technology. Nevertheless, you do have the opportunity to go through the training of all the technologies.<br>Reply with "73" to go back to the previous menu');        
         }
        }
        manager.addAnswer('en', 'option8.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>81. Web Page and Links<br>82. Efficiency & Token <br>83. Social Media Task<br>Reply with * to go back to the previous menu');
        {
          manager.addAnswer('en', 'lp81.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>811). Which Browser I should use?<br>812). The web pages on mobile are not showing properly.<br>813). Resource links not working. What to do? Should we skip?<br>814). The web pages on mobile are not showing properly.<br>815). I am getting an error:: Exception: SQLSTATE[HY000]: General error: 1 no such table: layout, what should I do?<br>Reply with "8" to go back to the previous menu');
          {
           manager.addAnswer('en', 'ti811.output', 'Google Chrome is recommended.<br> Reply with "81" to go back to the previous menu');
           manager.addAnswer('en', 'ti812.output', 'They are purposefully only configured for Desktops/ Laptops. In an emergency, you can use the "show as desktop" mode of your browser.<br> Reply with "81" to go back to the previous menu');
           manager.addAnswer('en', 'ti813.output', 'Please do not skip any piece of training, in case you are not able to access any link please message to Cloud Counselage HR and drop an email to hrsupport@cloudcounselage.in regarding the same.<br> Reply with "81" to go back to the previous menu');
           manager.addAnswer('en', 'ti814.output', 'They are purposefully only configured for Desktops/ Laptops. In an emergency, you can use the "show as desktop" mode of your browser.<br> Reply with "81" to go back to the previous menu');
           manager.addAnswer('en', 'ti815.output', ' This is due to many webpages opened, please close your browser and try again or you can open a new incognito tab and try again.<br> Reply with "81" to go back to the previous menu');
          }
          manager.addAnswer('en', 'lp82.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>821). My Efficiency is 0% what should I do?<br>822). I am applying my 2nd token that is the LP1 then it shows invalid user but the first token was accepted. What should I do?/ Tokens not working<br>Reply with "8" to go back to the previous menu');
          {
           manager.addAnswer('en', 'ti821.output', 'Ensure that you have clicked ‘Start’ when you resume a task, the ‘Finish’ button gets active only after the task is started. Once you complete the task you can then click on ‘Finish’ and then the efficiency is updated in the system. However, please raise this issue with the Cloud Counselage HR, as they will look at it on a case to case basis.<br> Reply with "82" to go back to the previous menu');
           manager.addAnswer('en', 'ti822.output', 'For each training of LP1, there are different tokens. Please read the tasks or watch the videos again meticulously. Try accessing it in incognito mode.<br> Reply with "82" to go back to the previous menu');
          }
          manager.addAnswer('en', 'lp83.output', 'Please reply with the corresponding Question number to get your queries Cleared<br>831). I am trying to complete social media tasks. I completed that day and clicked finish but it did not show finished in the task menu. What should I do?<br>832). When will my review on social media update task be done?<br>Reply with "8" to go back to the previous menu');
          {
           manager.addAnswer('en', 'ti831.output', 'Our team will verify and then only your task shall be accepted as completed. Please wait till the verification complete. <br> Reply with "83" to go back to the previous menu');
           manager.addAnswer('en', 'ti832.output', 'We will review this task in May 2020. <br> Reply with "83" to go back to the previous menu');
          }
        }
      manager.addAnswer('en', 'back1.hello', '1. General IP Queries <br>2. Bitrix Related Queries<br>3. Learning Path 1<br>4. Learning Path 2<br>5. Learning Path 3<br>6. Live Project<br>7. Training <br>8. Technical Issues ');
      manager.addAnswer('en', 'my.name', 'You can call me Sam');
      manager.addAnswer('en', 'my.name', 'I prefer to be called Phil :)');
      






      
      await manager.train();
      manager.save();
      var response = await manager.process('en', findStr);
      console.log(response);
  
      return response.answer;
}


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
[]

io.on('connection', function(socket){
  console.log('User connected');
  socket.on('disconnect', function(){
      console.log('User disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
    botstr(msg)
        .then(result => {
            if(result == null){
              io.emit('chat message', "Sorry :( Please enter valid reply");
            }
            else{
              io.emit('chat message', result);
            }
        });

  });
});

http.listen(4300, function(){
  console.log('Your server is running at http://localhost:4300');
});
