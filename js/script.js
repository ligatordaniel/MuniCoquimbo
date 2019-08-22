<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("imagendenoticia");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



// Autocomplete demo
var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
	"COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript",
	"Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];

$('#text')
	.keyboard({ layout: 'qwerty' })
	.autocomplete({
		source: availableTags
	})
	// position options added after v1.23.4
	.addAutocomplete({
		position : {
			of : null,        // when null, element will default to kb.$keyboard
			my : 'right top', // 'center top', (position under keyboard)
			at : 'left top',  // 'center bottom',
			collision: 'flip'
		}
	})
	.addTyping();
</script>