const acceptedAnswerChecker = () => {
  // All answers
  const potentialAnswers = document.getElementsByClassName(
    "js-accepted-answer-indicator"
  );

  // All answer votes
  const answerVotes = document.getElementsByClassName("js-vote-count");

  // List of answer votes
  let answerVotesList = [];

  // Populates the answer votes list
  // I started the loop with 'i=1' instead of 'i=0'
  // Because while collecting the answer votes, the 
  // Automated script also collects the topic moderator votes
  // That lead to missmatch between the 2nd for loop 'i' value
  // And the index of the correct vote count in answerVotesList
  for (i = 1; i < answerVotes.length; i++) {
    answerVotesList.push(answerVotes[i].innerText);
  }

  // Filter parameter for checking the css styling 
  // Classes included in the div element
  let correctAnswerFilter = "d-none";

  // Iterates through topic answers and checks for the accepted one
  for (let i = 0; i < potentialAnswers.length; i++) {
    if (
      !(
        potentialAnswers[i].classList[
          potentialAnswers[i].classList.length - 1
        ] == correctAnswerFilter
      )
    ) {
      console.log(
        `This topic has an accepted answer and it has ${answerVotesList[i]} votes`
      );
    } else {
    }
  }
};

acceptedAnswerChecker();
