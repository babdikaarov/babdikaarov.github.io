// Write your function here:
const toEmoticon = (emoticon) => {
    switch (emoticon) {
      case 'shrug':
        return '|_{"}_|';
        break;
      case 'smiley':
        return ':)';
        break;
      case 'frowny':
        return ':(';
        break;
      case 'winky':
        return ';)';
        break;
      case 'heart':
        return '<3';
        break;
      default:
        return '|_(* ~ *)_|';
        break;
        
    }
  }
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(toEmoticon("whatever")) 
  // Should print  '|_(* ~ *)_|'
  
  // We encourage you to add more function calls of your own to test your code!
  