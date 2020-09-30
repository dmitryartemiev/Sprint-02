str1 = 'You\'re catnip to a girl like me. Handsome, dazed, and to die for...'

alert (str1 + 
'\nLength: ' + str1.length + 
'\nCharacter number ' + str1.indexOf('u') + ' is: ' + str1.charAt(2) +
'\nTo uppercase ' + str1.toUpperCase() +
'\nConcatenation in a phrase: ' + str1.concat(' - Catwoman') +
'\n[Batman Returns] ' + (str2 = 'Batman: "I tried to save you."') +
'\n' + (str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful.'.replace(/catwoman/ig, ' ')));
