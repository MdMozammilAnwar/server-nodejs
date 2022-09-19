function RemoveHTMLTags(str) {
    if (str === null || str === "") return "";
    else str = str.toString();
    return str.replace(/(<([^>]+)>)/gi, "");
}
function getToolDataToExportToCSV(alpha) {
    console.log("getToolDataToExportToCSV called with data >>"+JSON.stringify(alpha));
    let arr = [];
    for (let i = 0; i < alpha[0].userAnswer.length; i++) {
      
      let y = {};
      let count = 0;
      for (let a of alpha) {
        if (Array.isArray(a.userAnswer[i].answer)) {
          //console.log(a.userAnswer[i].answer.split().join(','))
          y[`anwser${count}`] = RemoveHTMLTags(a.userAnswer[i].answer.join(","));
        } else {
          y[`anwser${count}`] = RemoveHTMLTags(a.userAnswer[i].answer);
        }
        count++;
      }
      arr.push(y);
    }
    console.log("Arr >>>"+JSON.stringify(arr));
    return arr;
  }
  let multipleData=[
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
             "userName": "Anwar",
             "answer": "Anwar friend of Hyderabad"
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
             "answer": "IBM"
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
             "answer": "<p>Make world of computation faster</p>"
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
             "answer": "<p>Our main goal is to research</p>"
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
             "answer": "Executive"
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
             "answer": [
                "java",
                "javascript",
                "python",
                "go lang"
             ]
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
             "answer": [
                "Flutter",
                "React Native"
             ]
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
             "answer": "5"
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
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
             "userName": "Anwar",
             "answer": [
                "Medical : 4",
                "Education : 4"
             ]
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
             "answer": [
                "In Learning : 3",
                "In Earning : 5"
             ]
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
             "answer": "30/09/2022"
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
             "answer": "19/09/2022"
          },
          {
             "userName": "mozammil",
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
             "userName": "Anwar",
             "answer": "04:00 PM"
          },
          {
             "userName": "mozammil",
             "answer": "06:00 PM"
          }
       ]
    }
 ];
 console.log("result =="+getToolDataToExportToCSV(multipleData));