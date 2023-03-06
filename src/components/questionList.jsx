var QuestionList = (function() {
    var questionString = "";
  
    var getQuestionString = function() {
        return questionString;    
    };

    var setQuestionString = function(string) {
        questionString = string; 
      };
  

    return {
      getQuestionString: getQuestionString,
      setQuestionString: setQuestionString
    }
  
  })();
  
  export default QuestionList;