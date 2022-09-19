function RemoveHTMLTags(str) {
    if (str === null || str === "") return "";
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
}
let alpha=[
    {
       "questionId": "sec_1-ques_1",
       "question": "Name?",
       "answerType": "Short Answer",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": "Hyderabad"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "Bibhu"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "Jay Sah"
          },
          {
             "userName": "Hyderabad",
             "answer": "Anwar friend of Hyderabad"
          },
          {
             "userName": "Hyderabad",
             "answer": "Mozammil friend of Hyderabad"
          }
       ]
    },
    {
       "questionId": "sec_1-ques_2",
       "question": "Organization name?",
       "answerType": "Short Answer",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": "uex learning tech "
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "uExcelerate"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "uExcelerate"
          },
          {
             "userName": "Hyderabad",
             "answer": "IBM"
          },
          {
             "userName": "Hyderabad",
             "answer": "Google"
          }
       ]
    },
    {
       "questionId": "sec_1-ques_3",
       "question": "Your organization objective",
       "answerType": "Paragraph",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": "<p>Help the executive to climb the ladder</p>"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "<p>Empower the executive withing</p>"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "<p>Help the executive</p>"
          },
          {
             "userName": "Hyderabad",
             "answer": "<p>Make world of computation faster</p>"
          },
          {
             "userName": "Hyderabad",
             "answer": "<p>To make search more easy and life much more easier then ever before</p>"
          }
       ]
    },
    {
       "questionId": "sec_1-ques_4",
       "question": "how does your organization add value to the target customer?",
       "answerType": "Paragraph",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": "<p>We build a mindset </p>"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "<p>We build leader </p>"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "<p>we help the individual and business</p>"
          },
          {
             "userName": "Hyderabad",
             "answer": "<p>Our main goal is to research</p>"
          },
          {
             "userName": "Hyderabad",
             "answer": "<p>All human being </p>"
          }
       ]
    },
    {
       "questionId": "sec_2-ques_1",
       "question": "Which is your target audience ",
       "answerType": "Multiple Choice",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": "SME"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "Start up"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "Start up"
          },
          {
             "userName": "Hyderabad",
             "answer": "Executive"
          },
          {
             "userName": "Hyderabad",
             "answer": "Start up"
          }
       ]
    },
    {
       "questionId": "sec_2-ques_5",
       "question": "What techonology you use?",
       "answerType": "Check Box",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": [
                "javascript",
                "python"
             ]
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": [
                "java",
                "go lang"
             ]
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": [
                "java",
                "python"
             ]
          },
          {
             "userName": "Hyderabad",
             "answer": [
                "java",
                "javascript",
                "python",
                "go lang"
             ]
          },
          {
             "userName": "Hyderabad",
             "answer": [
                "javascript",
                "python"
             ]
          }
       ]
    },
    {
       "questionId": "sec_2-ques_6",
       "question": "What is the future of the development ",
       "answerType": "Check Box",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": [
                "Flutter",
                "Go Lang"
             ]
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": [
                "React Native",
                "ROR"
             ]
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": [
                "Flutter",
                "Go Lang"
             ]
          },
          {
             "userName": "Hyderabad",
             "answer": [
                "Flutter",
                "React Native"
             ]
          },
          {
             "userName": "Hyderabad",
             "answer": [
                "Flutter",
                "Go Lang"
             ]
          }
       ]
    },
    {
       "questionId": "sec_3-ques_1",
       "question": "Year of exp?",
       "answerType": "Drop Down",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": "3"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "7+"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "7+"
          },
          {
             "userName": "Hyderabad",
             "answer": "5"
          },
          {
             "userName": "Hyderabad",
             "answer": "3"
          }
       ]
    },
    {
       "questionId": "sec_3-ques_7",
       "question": "Your team size?",
       "answerType": "Drop Down",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": "11-20"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "31-40"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "11-20"
          },
          {
             "userName": "Hyderabad",
             "answer": "31-40"
          }
       ]
    },
    {
       "questionId": "sec_3-ques_8",
       "question": "perks at your organization?",
       "answerType": "Multiple Choice Grid",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": [
                "Medical : 1",
                "Education : 3"
             ]
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": [
                "Medical : 1",
                "Education : 2"
             ]
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": [
                "Medical : 1",
                "Education : 2"
             ]
          },
          {
             "userName": "Hyderabad",
             "answer": [
                "Medical : 4",
                "Education : 4"
             ]
          },
          {
             "userName": "Hyderabad",
             "answer": [
                "Medical : 3",
                "Education : 4"
             ]
          }
       ]
    },
    {
       "questionId": "sec_3-ques_9",
       "question": "your exp with co-worker?",
       "answerType": "Multiple Choice Grid",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": [
                "In Learning : 2",
                "In Earning : 3"
             ]
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": [
                "In Learning : 3",
                "In Earning : 2"
             ]
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": [
                "In Learning : 3",
                "In Earning : 1"
             ]
          },
          {
             "userName": "Hyderabad",
             "answer": [
                "In Learning : 3",
                "In Earning : 5"
             ]
          },
          {
             "userName": "Hyderabad",
             "answer": [
                "In Learning : 2",
                "In Earning : 4"
             ]
          }
       ]
    },
    {
       "questionId": "sec_4-ques_1",
       "question": "Your organization establishement date?",
       "answerType": "Date",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": "19/06/2022"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "30/06/2022"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "24/09/2022"
          },
          {
             "userName": "Hyderabad",
             "answer": "30/09/2022"
          },
          {
             "userName": "Hyderabad",
             "answer": "30/09/2022"
          }
       ]
    },
    {
       "questionId": "sec_4-ques_10",
       "question": "Your organization registration date?",
       "answerType": "Date",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": "24/06/2022"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "05/06/2022"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "23/09/2022"
          },
          {
             "userName": "Hyderabad",
             "answer": "19/09/2022"
          },
          {
             "userName": "Hyderabad",
             "answer": "23/09/2022"
          }
       ]
    },
    {
       "questionId": "sec_4-ques_11",
       "question": "At what time you logged in?",
       "answerType": "Time",
       "userAnswer": [
          {
             "userName": "Hyderabad",
             "answer": "02:00 PM"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "04:00 PM"
          },
          {
             "userName": "\"Bibhu Prashad Shahoo Iv\"",
             "answer": "01:00 PM"
          },
          {
             "userName": "Hyderabad",
             "answer": "04:00 PM"
          },
          {
             "userName": "Hyderabad",
             "answer": "06:00 PM"
          }
       ]
    }
 ];

 function getToolDataToExportToCSV(alpha){
    let arr = [];
    for (let i = 0; i < alpha[0].userAnswer.length; i++) {
      
      let y = {};
      let count = 0;
      for (let a of alpha) {
       // console.log("Object - "+count+" - "+a.userAnswer[i].answer);
        
            if(typeof a.userAnswer[i] === 'undefined'){
                y[`anwser${count}`]=" ";
            }
            else if(typeof a.userAnswer[i] !== 'undefined'){
                if (Array.isArray(a.userAnswer[i].answer)) {
                    y[`anwser${count}`] = RemoveHTMLTags(a.userAnswer[i].answer.join(","));
                  } else {
                    y[`anwser${count}`] = RemoveHTMLTags(a.userAnswer[i].answer);
                  }
            }
           
        
        
        count++;
      }
      arr.push(y);
    }
    console.log("Arr >>>"+JSON.stringify(arr));
    return arr;
  }

  getToolDataToExportToCSV(alpha);